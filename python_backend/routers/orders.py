from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from auth import get_current_user
from database import get_db
from models import Cart, Order, OrderItem, Product, User
from schemas import OrderOut, OrderPlace

router = APIRouter(prefix="/api/orders", tags=["orders"])


def _order_query():
    return select(Order).options(
        selectinload(Order.items).selectinload(OrderItem.product).selectinload(Product.category)
    )


@router.get("", response_model=list[OrderOut])
async def get_orders(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(
        _order_query().where(Order.user_id == current_user.id).order_by(Order.created_at.desc())
    )
    return result.scalars().all()


@router.post("", response_model=OrderOut, status_code=201)
async def place_order(
    payload: OrderPlace,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    cart_result = await db.execute(
        select(Cart).options(selectinload(Cart.product)).where(Cart.user_id == current_user.id)
    )
    cart_items = cart_result.scalars().all()
    if not cart_items:
        raise HTTPException(status_code=400, detail="Cart is empty")

    total = sum(item.product.price * item.quantity for item in cart_items)
    order = Order(
        user_id=current_user.id,
        total_amount=total,
        delivery_address=payload.delivery_address,
        payment_method=payload.payment_method,
        status="pending",
        payment_status="pending",
    )
    db.add(order)
    await db.flush()

    for item in cart_items:
        db.add(OrderItem(
            order_id=order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            unit_price=item.product.price,
        ))

    await db.execute(delete(Cart).where(Cart.user_id == current_user.id))
    await db.commit()

    result = await db.execute(_order_query().where(Order.id == order.id))
    return result.scalar_one()


@router.get("/{order_id}", response_model=OrderOut)
async def get_order(
    order_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(_order_query().where(Order.id == order_id, Order.user_id == current_user.id))
    order = result.scalar_one_or_none()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

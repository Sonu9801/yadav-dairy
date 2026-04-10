from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from auth import get_current_admin
from database import get_db
from models import Order, OrderItem, Product, User
from schemas import AdminStats, OrderOut, OrderStatusUpdate

router = APIRouter(prefix="/api/admin", tags=["admin"])

VALID_STATUSES = {"pending", "confirmed", "delivered", "cancelled"}


@router.get("/orders", response_model=list[OrderOut])
async def admin_list_orders(
    db: AsyncSession = Depends(get_db),
    _admin: User = Depends(get_current_admin),
):
    result = await db.execute(
        select(Order)
        .options(selectinload(Order.items).selectinload(OrderItem.product).selectinload(Product.category))
        .order_by(Order.created_at.desc())
    )
    return result.scalars().all()


@router.put("/orders/{order_id}", response_model=OrderOut)
async def admin_update_order(
    order_id: int,
    payload: OrderStatusUpdate,
    db: AsyncSession = Depends(get_db),
    _admin: User = Depends(get_current_admin),
):
    if payload.status not in VALID_STATUSES:
        raise HTTPException(status_code=422, detail=f"Invalid status. Must be one of: {VALID_STATUSES}")
    result = await db.execute(select(Order).where(Order.id == order_id))
    order = result.scalar_one_or_none()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    order.status = payload.status
    await db.commit()
    result = await db.execute(
        select(Order)
        .options(selectinload(Order.items).selectinload(OrderItem.product).selectinload(Product.category))
        .where(Order.id == order_id)
    )
    return result.scalar_one()


@router.get("/stats", response_model=AdminStats)
async def admin_stats(
    db: AsyncSession = Depends(get_db),
    _admin: User = Depends(get_current_admin),
):
    total_users = (await db.execute(select(func.count(User.id)))).scalar_one()
    total_products = (await db.execute(select(func.count(Product.id)))).scalar_one()
    total_orders = (await db.execute(select(func.count(Order.id)))).scalar_one()
    total_revenue = (await db.execute(select(func.coalesce(func.sum(Order.total_amount), 0.0)))).scalar_one()
    return AdminStats(
        total_users=total_users,
        total_products=total_products,
        total_orders=total_orders,
        total_revenue=float(total_revenue),
    )

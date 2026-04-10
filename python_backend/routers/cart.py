from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from auth import get_current_user
from database import get_db
from models import Cart, Product, User
from schemas import CartAdd, CartItemOut, CartUpdate

router = APIRouter(prefix="/api/cart", tags=["cart"])


def _cart_query(user_id: int):
    return (
        select(Cart)
        .options(selectinload(Cart.product).selectinload(Product.category))
        .where(Cart.user_id == user_id)
    )


@router.get("", response_model=list[CartItemOut])
async def get_cart(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(_cart_query(current_user.id))
    return result.scalars().all()


@router.post("", response_model=CartItemOut, status_code=201)
async def add_to_cart(
    payload: CartAdd,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    product = await db.get(Product, payload.product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    existing = await db.execute(
        select(Cart).where(Cart.user_id == current_user.id, Cart.product_id == payload.product_id)
    )
    cart_item = existing.scalar_one_or_none()
    if cart_item:
        cart_item.quantity += payload.quantity
    else:
        cart_item = Cart(user_id=current_user.id, product_id=payload.product_id, quantity=payload.quantity)
        db.add(cart_item)
    await db.commit()
    await db.refresh(cart_item)
    result = await db.execute(
        select(Cart).options(selectinload(Cart.product).selectinload(Product.category)).where(Cart.id == cart_item.id)
    )
    return result.scalar_one()


@router.put("/{item_id}", response_model=CartItemOut)
async def update_cart_item(
    item_id: int,
    payload: CartUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(select(Cart).where(Cart.id == item_id, Cart.user_id == current_user.id))
    cart_item = result.scalar_one_or_none()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    cart_item.quantity = payload.quantity
    await db.commit()
    result = await db.execute(
        select(Cart).options(selectinload(Cart.product).selectinload(Product.category)).where(Cart.id == item_id)
    )
    return result.scalar_one()


@router.delete("/{item_id}", status_code=204)
async def remove_cart_item(
    item_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await db.execute(select(Cart).where(Cart.id == item_id, Cart.user_id == current_user.id))
    cart_item = result.scalar_one_or_none()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    await db.delete(cart_item)
    await db.commit()


@router.delete("", status_code=204)
async def clear_cart(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    await db.execute(delete(Cart).where(Cart.user_id == current_user.id))
    await db.commit()

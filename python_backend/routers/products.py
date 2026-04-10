from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from auth import get_current_admin
from database import get_db
from models import Product, User
from schemas import ProductCreate, ProductOut, ProductUpdate

router = APIRouter(prefix="/api/products", tags=["products"])


def _product_query():
    return select(Product).options(selectinload(Product.category))


@router.get("", response_model=list[ProductOut])
async def list_products(
    category: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    min_price: Optional[float] = Query(None),
    max_price: Optional[float] = Query(None),
    packaging_type: Optional[str] = Query(None),
    db: AsyncSession = Depends(get_db),
):
    stmt = _product_query().where(Product.is_active == True)  # noqa: E712
    if category:
        from models import Category
        stmt = stmt.join(Category).where(Category.slug == category)
    if search:
        stmt = stmt.where(Product.name.ilike(f"%{search}%") | Product.name_hindi.ilike(f"%{search}%"))
    if min_price is not None:
        stmt = stmt.where(Product.price >= min_price)
    if max_price is not None:
        stmt = stmt.where(Product.price <= max_price)
    if packaging_type:
        stmt = stmt.where(Product.packaging_type == packaging_type)
    result = await db.execute(stmt)
    return result.scalars().all()


@router.get("/featured", response_model=list[ProductOut])
async def featured_products(db: AsyncSession = Depends(get_db)):
    result = await db.execute(_product_query().where(Product.is_featured == True, Product.is_active == True))  # noqa: E712
    return result.scalars().all()


@router.get("/trending", response_model=list[ProductOut])
async def trending_products(db: AsyncSession = Depends(get_db)):
    result = await db.execute(_product_query().where(Product.is_trending == True, Product.is_active == True))  # noqa: E712
    return result.scalars().all()


@router.get("/best-sellers", response_model=list[ProductOut])
async def best_sellers(db: AsyncSession = Depends(get_db)):
    result = await db.execute(_product_query().where(Product.is_best_seller == True, Product.is_active == True))  # noqa: E712
    return result.scalars().all()


@router.get("/fresh-arrivals", response_model=list[ProductOut])
async def fresh_arrivals(db: AsyncSession = Depends(get_db)):
    result = await db.execute(_product_query().where(Product.is_fresh_arrival == True, Product.is_active == True))  # noqa: E712
    return result.scalars().all()


@router.get("/recommended", response_model=list[ProductOut])
async def recommended_products(db: AsyncSession = Depends(get_db)):
    result = await db.execute(_product_query().where(Product.is_recommended == True, Product.is_active == True))  # noqa: E712
    return result.scalars().all()


@router.get("/{product_id}", response_model=ProductOut)
async def get_product(product_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(_product_query().where(Product.id == product_id))
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@router.post("", response_model=ProductOut, status_code=201)
async def create_product(
    payload: ProductCreate,
    db: AsyncSession = Depends(get_db),
    _admin: User = Depends(get_current_admin),
):
    product = Product(**payload.model_dump())
    db.add(product)
    await db.commit()
    await db.refresh(product)
    result = await db.execute(_product_query().where(Product.id == product.id))
    return result.scalar_one()


@router.put("/{product_id}", response_model=ProductOut)
async def update_product(
    product_id: int,
    payload: ProductUpdate,
    db: AsyncSession = Depends(get_db),
    _admin: User = Depends(get_current_admin),
):
    result = await db.execute(select(Product).where(Product.id == product_id))
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(product, field, value)
    await db.commit()
    result = await db.execute(_product_query().where(Product.id == product_id))
    return result.scalar_one()


@router.delete("/{product_id}", status_code=204)
async def delete_product(
    product_id: int,
    db: AsyncSession = Depends(get_db),
    _admin: User = Depends(get_current_admin),
):
    result = await db.execute(select(Product).where(Product.id == product_id))
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    await db.delete(product)
    await db.commit()

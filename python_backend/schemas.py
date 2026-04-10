from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, field_validator


# ── Auth ──────────────────────────────────────────────────────────────────────

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    full_name: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None


class UserOut(BaseModel):
    id: int
    email: str
    full_name: str
    phone: Optional[str] = None
    address: Optional[str] = None
    is_admin: bool
    created_at: datetime

    model_config = {"from_attributes": True}


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


# ── Category ──────────────────────────────────────────────────────────────────

class CategoryOut(BaseModel):
    id: int
    name: str
    name_hindi: str
    slug: str
    icon_emoji: str
    sort_order: int

    model_config = {"from_attributes": True}


# ── Product ───────────────────────────────────────────────────────────────────

class ProductCreate(BaseModel):
    name: str
    name_hindi: str
    brand: str = "Yadav Dairy"
    category_id: int
    subcategory: Optional[str] = None
    packaging_type: str
    price: float
    mrp: float
    discount_percent: float = 0.0
    description: Optional[str] = None
    description_hindi: Optional[str] = None
    unit: str
    weight_volume: str
    rating: float = 4.0
    review_count: int = 0
    stock: int = 100
    is_active: bool = True
    is_featured: bool = False
    is_trending: bool = False
    is_best_seller: bool = False
    is_fresh_arrival: bool = False
    is_recommended: bool = False


class ProductUpdate(ProductCreate):
    pass


class ProductOut(BaseModel):
    id: int
    name: str
    name_hindi: str
    brand: str
    category_id: int
    subcategory: Optional[str] = None
    packaging_type: str
    price: float
    mrp: float
    discount_percent: float
    description: Optional[str] = None
    description_hindi: Optional[str] = None
    unit: str
    weight_volume: str
    rating: float
    review_count: int
    stock: int
    is_active: bool
    is_featured: bool
    is_trending: bool
    is_best_seller: bool
    is_fresh_arrival: bool
    is_recommended: bool
    created_at: datetime
    category: Optional[CategoryOut] = None

    model_config = {"from_attributes": True}


# ── Cart ──────────────────────────────────────────────────────────────────────

class CartAdd(BaseModel):
    product_id: int
    quantity: int = 1

    @field_validator("quantity")
    @classmethod
    def qty_positive(cls, v: int) -> int:
        if v < 1:
            raise ValueError("quantity must be at least 1")
        return v


class CartUpdate(BaseModel):
    quantity: int

    @field_validator("quantity")
    @classmethod
    def qty_positive(cls, v: int) -> int:
        if v < 1:
            raise ValueError("quantity must be at least 1")
        return v


class CartItemOut(BaseModel):
    id: int
    user_id: int
    product_id: int
    quantity: int
    created_at: datetime
    product: Optional[ProductOut] = None

    model_config = {"from_attributes": True}


# ── Order ─────────────────────────────────────────────────────────────────────

class OrderPlace(BaseModel):
    delivery_address: str
    payment_method: str = "cod"


class OrderItemOut(BaseModel):
    id: int
    order_id: int
    product_id: int
    quantity: int
    unit_price: float
    product: Optional[ProductOut] = None

    model_config = {"from_attributes": True}


class OrderOut(BaseModel):
    id: int
    user_id: int
    status: str
    total_amount: float
    delivery_address: str
    payment_method: str
    payment_status: str
    created_at: datetime
    items: list[OrderItemOut] = []

    model_config = {"from_attributes": True}


class OrderStatusUpdate(BaseModel):
    status: str


# ── Review ────────────────────────────────────────────────────────────────────

class ReviewCreate(BaseModel):
    rating: int
    comment: Optional[str] = None

    @field_validator("rating")
    @classmethod
    def rating_range(cls, v: int) -> int:
        if not 1 <= v <= 5:
            raise ValueError("rating must be between 1 and 5")
        return v


class ReviewOut(BaseModel):
    id: int
    user_id: int
    product_id: int
    rating: int
    comment: Optional[str] = None
    created_at: datetime
    user: Optional[UserOut] = None

    model_config = {"from_attributes": True}


# ── Admin Stats ───────────────────────────────────────────────────────────────

class AdminStats(BaseModel):
    total_users: int
    total_products: int
    total_orders: int
    total_revenue: float

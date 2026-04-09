import type {
  Category as BackendCategory,
  Order as BackendOrder,
  OrderItem as BackendOrderItem,
  Product as BackendProduct,
  Subcategory as BackendSubcategory,
  OrderStatus,
  PaymentMethod,
} from "../backend.d";

export type { OrderStatus, PaymentMethod };

// Augmented Product type with brand field (added to backend; use optional until bindgen runs)
export type Product = BackendProduct & { brand?: string };
export type Category = BackendCategory;
export type Subcategory = BackendSubcategory;
export type Order = BackendOrder;
export type OrderItem = BackendOrderItem;

// Frontend-only cart types
export interface CartItem {
  productId: bigint;
  productName: string;
  productNameHi: string;
  price: bigint;
  imageUrl: string;
  quantity: number;
  packagingType: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: bigint) => void;
  updateQuantity: (productId: bigint, quantity: number) => void;
  clearCart: () => void;
  cartTotal: bigint;
  cartCount: number;
}

export type ProductId = bigint;
export type CategoryId = bigint;
export type SubcategoryId = bigint;
export type OrderId = bigint;
export type Timestamp = bigint;

import type {
  Category as BackendCategory,
  Order as BackendOrder,
  OrderItem as BackendOrderItem,
  Product as BackendProduct,
  Subcategory as BackendSubcategory,
} from "../backend.d";
import { OrderStatus, PaymentMethod } from "../backend.d";

export { OrderStatus, PaymentMethod };

export type Product = BackendProduct;
export type Category = BackendCategory;
export type Subcategory = BackendSubcategory;
export type Order = BackendOrder;
export type OrderItem = BackendOrderItem;

// Frontend-only cart types
export interface CartItem {
  productId: bigint;
  name: string;
  nameHindi: string;
  price: bigint;
  imageUrl: string;
  quantity: number;
  packagingType: string;
  stock: bigint;
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

// User profile type (local cache)
export interface LocalUserProfile {
  displayName: string;
  email: string;
  phone: string;
  address: string;
}

// Review type (local)
export interface LocalReview {
  id: string;
  productId: string;
  reviewerPrincipal: string;
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: number;
}

// Contact message type (local form)
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: ProductId;
    categoryId: CategoryId;
    nameEn: string;
    nameHi: string;
    inStock: boolean;
    packagingType: string;
    originalPrice: bigint;
    createdAt: Timestamp;
    fatContent: string;
    description: string;
    stockCount: bigint;
    imageUrl: string;
    isFeatured: boolean;
    subcategoryId: SubcategoryId;
    brand: string;
    rating: number;
    price: bigint;
    reviewCount: bigint;
    isTrending: boolean;
}
export type SubcategoryId = bigint;
export type Timestamp = bigint;
export interface CreateCategoryArgs {
    nameHi: string;
    sortOrder: bigint;
    name: string;
    description: string;
    iconEmoji: string;
}
export interface Category {
    id: CategoryId;
    nameHi: string;
    sortOrder: bigint;
    name: string;
    description: string;
    iconEmoji: string;
}
export interface OrderItem {
    productId: ProductId;
    productName: string;
    quantity: bigint;
    price: bigint;
}
export interface Order {
    id: OrderId;
    customerName: string;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    customerPhone: string;
    city: string;
    createdAt: Timestamp;
    totalAmount: bigint;
    address: string;
    items: Array<OrderItem>;
    pincode: string;
}
export interface UpdateProductArgs {
    id: ProductId;
    categoryId: CategoryId;
    nameEn: string;
    nameHi: string;
    inStock: boolean;
    packagingType: string;
    originalPrice: bigint;
    fatContent: string;
    description: string;
    stockCount: bigint;
    imageUrl: string;
    isFeatured: boolean;
    subcategoryId: SubcategoryId;
    brand: string;
    price: bigint;
    isTrending: boolean;
}
export interface CreateSubcategoryArgs {
    categoryId: CategoryId;
    nameHi: string;
    name: string;
}
export interface Subcategory {
    id: SubcategoryId;
    categoryId: CategoryId;
    nameHi: string;
    name: string;
}
export type CategoryId = bigint;
export type ProductId = bigint;
export interface UpdateCategoryArgs {
    id: CategoryId;
    nameHi: string;
    sortOrder: bigint;
    name: string;
    description: string;
    iconEmoji: string;
}
export interface CreateProductArgs {
    categoryId: CategoryId;
    nameEn: string;
    nameHi: string;
    inStock: boolean;
    packagingType: string;
    originalPrice: bigint;
    fatContent: string;
    description: string;
    stockCount: bigint;
    imageUrl: string;
    isFeatured: boolean;
    subcategoryId: SubcategoryId;
    brand: string;
    price: bigint;
    isTrending: boolean;
}
export interface PlaceOrderArgs {
    customerName: string;
    paymentMethod: PaymentMethod;
    customerPhone: string;
    city: string;
    totalAmount: bigint;
    address: string;
    items: Array<OrderItem>;
    pincode: string;
}
export type OrderId = bigint;
export enum OrderStatus {
    shipped = "shipped",
    cancelled = "cancelled",
    pending = "pending",
    delivered = "delivered",
    confirmed = "confirmed",
    processing = "processing"
}
export enum PaymentMethod {
    upi = "upi",
    cashOnDelivery = "cashOnDelivery",
    card = "card",
    netBanking = "netBanking"
}
export interface backendInterface {
    createCategory(args: CreateCategoryArgs): Promise<Category>;
    createProduct(args: CreateProductArgs): Promise<Product>;
    createSubcategory(args: CreateSubcategoryArgs): Promise<Subcategory>;
    deleteCategory(id: CategoryId): Promise<boolean>;
    deleteProduct(id: ProductId): Promise<boolean>;
    deleteSubcategory(id: SubcategoryId): Promise<boolean>;
    filterProducts(categoryId: CategoryId | null, maxPrice: bigint | null, packagingType: string | null): Promise<Array<Product>>;
    getAdmin(): Promise<Principal | null>;
    getCategory(id: CategoryId): Promise<Category | null>;
    getOrder(id: OrderId): Promise<Order | null>;
    getProduct(id: ProductId): Promise<Product | null>;
    listCategories(): Promise<Array<Category>>;
    listFeaturedProducts(): Promise<Array<Product>>;
    listOrders(): Promise<Array<Order>>;
    listProducts(): Promise<Array<Product>>;
    listProductsByCategory(categoryId: CategoryId): Promise<Array<Product>>;
    listSubcategories(): Promise<Array<Subcategory>>;
    listSubcategoriesByCategory(categoryId: CategoryId): Promise<Array<Subcategory>>;
    listTrendingProducts(): Promise<Array<Product>>;
    placeOrder(args: PlaceOrderArgs): Promise<Order>;
    searchProducts(term: string): Promise<Array<Product>>;
    setAdmin(): Promise<void>;
    updateCategory(args: UpdateCategoryArgs): Promise<Category | null>;
    updateOrderStatus(id: OrderId, status: OrderStatus): Promise<Order | null>;
    updateProduct(args: UpdateProductArgs): Promise<Product | null>;
}

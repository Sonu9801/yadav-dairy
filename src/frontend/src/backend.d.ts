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
    inStock: boolean;
    nameHindi: string;
    packagingType: string;
    originalPrice: bigint;
    subcategory: string;
    name: string;
    createdAt: Timestamp;
    description: string;
    isFreshArrival: boolean;
    stock: bigint;
    imageUrl: string;
    isFeatured: boolean;
    quantity: string;
    category: string;
    brand: string;
    rating: number;
    price: bigint;
    reviewCount: bigint;
    isBestSeller: boolean;
    isTrending: boolean;
}
export interface UserProfile {
    principal: Principal;
    displayName: string;
    createdAt: Timestamp;
    email: string;
    updatedAt: Timestamp;
    address: string;
    phone: string;
}
export type Timestamp = bigint;
export interface PlaceOrderArgs {
    paymentMethod: PaymentMethod;
    deliveryFee: bigint;
    totalAmount: bigint;
    shippingAddress: string;
    items: Array<OrderItem>;
}
export type OrderId = bigint;
export interface CreateProductArgs {
    inStock: boolean;
    nameHindi: string;
    packagingType: string;
    originalPrice: bigint;
    subcategory: string;
    name: string;
    description: string;
    isFreshArrival: boolean;
    stock: bigint;
    imageUrl: string;
    isFeatured: boolean;
    quantity: string;
    category: string;
    brand: string;
    price: bigint;
    isBestSeller: boolean;
    isTrending: boolean;
}
export interface WishlistItem {
    productId: ProductId;
    addedAt: Timestamp;
}
export interface OrderItem {
    productId: ProductId;
    productName: string;
    quantity: bigint;
    price: bigint;
}
export interface CreateCategoryArgs {
    nameHindi: string;
    sortOrder: bigint;
    icon: string;
    name: string;
    colorClass: string;
}
export type ContactMessageId = bigint;
export interface Category {
    id: CategoryId;
    nameHindi: string;
    sortOrder: bigint;
    icon: string;
    name: string;
    colorClass: string;
}
export interface Order {
    id: OrderId;
    status: OrderStatus;
    paymentMethod: PaymentMethod;
    deliveryFee: bigint;
    userId: UserId;
    createdAt: Timestamp;
    totalAmount: bigint;
    shippingAddress: string;
    items: Array<OrderItem>;
}
export interface UpdateProfileArgs {
    displayName: string;
    email: string;
    address: string;
    phone: string;
}
export interface UpdateProductArgs {
    id: ProductId;
    inStock: boolean;
    nameHindi: string;
    packagingType: string;
    originalPrice: bigint;
    subcategory: string;
    name: string;
    description: string;
    isFreshArrival: boolean;
    stock: bigint;
    imageUrl: string;
    isFeatured: boolean;
    quantity: string;
    category: string;
    brand: string;
    price: bigint;
    isBestSeller: boolean;
    isTrending: boolean;
}
export type UserId = Principal;
export interface ContactMessage {
    id: ContactMessageId;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
}
export interface CreateSubcategoryArgs {
    categoryId: CategoryId;
    nameHindi: string;
    name: string;
}
export interface Subcategory {
    id: SubcategoryId;
    categoryId: CategoryId;
    nameHindi: string;
    name: string;
}
export type CategoryId = bigint;
export type ReviewId = bigint;
export interface UpdateCategoryArgs {
    id: CategoryId;
    nameHindi: string;
    sortOrder: bigint;
    icon: string;
    name: string;
    colorClass: string;
}
export type ProductId = bigint;
export interface SubmitReviewArgs {
    productId: ProductId;
    reviewerName: string;
    comment: string;
    rating: bigint;
}
export interface Review {
    id: ReviewId;
    createdAt: Timestamp;
    productId: ProductId;
    reviewerName: string;
    comment: string;
    reviewerPrincipal: Principal;
    rating: bigint;
}
export type SubcategoryId = bigint;
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
    addContact(name: string, email: string, message: string): Promise<ContactMessage>;
    addReview(args: SubmitReviewArgs): Promise<Review>;
    addToWishlist(productId: ProductId): Promise<boolean>;
    createCategory(args: CreateCategoryArgs): Promise<Category>;
    createProduct(args: CreateProductArgs): Promise<Product>;
    createSubcategory(args: CreateSubcategoryArgs): Promise<Subcategory>;
    deleteCategory(id: CategoryId): Promise<boolean>;
    deleteProduct(id: ProductId): Promise<boolean>;
    deleteReview(reviewId: ReviewId, productId: ProductId): Promise<boolean>;
    deleteSubcategory(id: SubcategoryId): Promise<boolean>;
    deleteUserProfile(): Promise<boolean>;
    filterProducts(category: string | null, maxPrice: bigint | null, packagingType: string | null): Promise<Array<Product>>;
    getAdminPrincipal(): Promise<Principal | null>;
    getCategory(id: CategoryId): Promise<Category | null>;
    getOrder(id: OrderId): Promise<Order | null>;
    getProduct(id: ProductId): Promise<Product | null>;
    getProductReviews(productId: ProductId): Promise<Array<Review>>;
    getUserProfile(): Promise<UserProfile | null>;
    getWishlist(): Promise<Array<WishlistItem>>;
    listAllReviews(): Promise<Array<Review>>;
    listBestSellers(): Promise<Array<Product>>;
    listCategories(): Promise<Array<Category>>;
    listContacts(): Promise<Array<ContactMessage>>;
    listFeaturedProducts(): Promise<Array<Product>>;
    listFreshArrivals(): Promise<Array<Product>>;
    listOrders(): Promise<Array<Order>>;
    listProducts(): Promise<Array<Product>>;
    listProductsByCategory(category: string): Promise<Array<Product>>;
    listSubcategories(): Promise<Array<Subcategory>>;
    listSubcategoriesByCategory(categoryId: CategoryId): Promise<Array<Subcategory>>;
    listTrendingProducts(): Promise<Array<Product>>;
    placeOrder(args: PlaceOrderArgs): Promise<Order>;
    removeFromWishlist(productId: ProductId): Promise<boolean>;
    searchProducts(term: string): Promise<Array<Product>>;
    setAdminPrincipal(): Promise<void>;
    updateCategory(args: UpdateCategoryArgs): Promise<Category | null>;
    updateOrderStatus(id: OrderId, status: OrderStatus): Promise<Order | null>;
    updateProduct(args: UpdateProductArgs): Promise<Product | null>;
    updateUserProfile(args: UpdateProfileArgs): Promise<UserProfile>;
}

import ProductPackageSVG from "@/components/products/ProductPackageSVG";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import {
  useAddReview,
  useCategories,
  useProduct,
  useProductReviews,
  useProducts,
  useProductsByCategory,
} from "@/hooks/use-backend";
import { useCart } from "@/hooks/use-cart";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import { useWishlist } from "@/hooks/use-wishlist";
import { calculateDiscount, formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Droplets,
  Heart,
  Info,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Star,
  Tag,
  XCircle,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function DetailSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      <Skeleton className="h-4 w-24" />
      <div className="flex flex-col md:flex-row gap-8">
        <Skeleton className="w-full md:w-80 aspect-square rounded-2xl flex-shrink-0" />
        <div className="flex-1 space-y-4">
          <div className="flex gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-px w-full" />
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
          </div>
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
}

// ─── Star Selector (interactive, for review form) ─────────────────────────────

function StarSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <fieldset className="flex gap-1 border-0 p-0 m-0" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          className="transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          data-ocid={`star-selector-${star}`}
        >
          <Star
            className="w-7 h-7"
            fill={(hovered || value) >= star ? "#f59e0b" : "none"}
            stroke={(hovered || value) >= star ? "#f59e0b" : "currentColor"}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </fieldset>
  );
}

// ─── Display Stars (read-only) ─────────────────────────────────────────────────

function DisplayStars({
  rating,
  size = "sm",
}: { rating: number; size?: "sm" | "md" }) {
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={sz}
          fill={
            rating >= s ? "#f59e0b" : rating >= s - 0.5 ? "#f59e0b" : "none"
          }
          stroke="#f59e0b"
          strokeWidth={1.5}
          opacity={rating >= s - 0.5 ? 1 : 0.3}
        />
      ))}
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────

interface ReviewCardProps {
  reviewerName: string;
  rating: bigint;
  comment: string;
  createdAt: bigint;
}

function ReviewCard({
  reviewerName,
  rating,
  comment,
  createdAt,
}: ReviewCardProps) {
  const date = new Date(Number(createdAt) / 1_000_000).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );
  const initials = reviewerName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="bg-card border border-border rounded-xl p-4 space-y-2"
      data-ocid="review-card"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-primary">
            {initials || "?"}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-sm truncate">{reviewerName}</p>
            <time className="text-xs text-muted-foreground flex-shrink-0">
              {date}
            </time>
          </div>
          <DisplayStars rating={Number(rating)} size="sm" />
        </div>
      </div>
      {comment && (
        <p className="text-sm text-muted-foreground leading-relaxed pl-12">
          {comment}
        </p>
      )}
    </div>
  );
}

// ─── Submit Review Form ───────────────────────────────────────────────────────

interface ReviewFormProps {
  productId: bigint;
  principal: string;
}

function ReviewForm({ productId, principal: _principal }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const submitReview = useAddReview();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a star rating");
      return;
    }
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    submitReview.mutate(
      {
        productId,
        reviewerName: name.trim(),
        rating: BigInt(rating),
        comment: comment.trim(),
      },
      {
        onSuccess: () => {
          toast.success("Review submitted! Thank you 🙏");
          setRating(0);
          setComment("");
          setName("");
        },
        onError: () => {
          toast.error("Failed to submit review. Please try again.");
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-xl p-5 space-y-4"
      data-ocid="review-form"
    >
      <h3 className="font-semibold text-foreground">Write a Review</h3>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="review-name"
        >
          Your Name
        </label>
        <input
          id="review-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          data-ocid="review-name-input"
        />
      </div>

      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground">Rating</p>
        <StarSelector value={rating} onChange={setRating} />
      </div>

      <div className="space-y-1">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="review-comment"
        >
          Comment{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <Textarea
          id="review-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this product..."
          className="resize-none h-24"
          data-ocid="review-comment-input"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={submitReview.isPending}
        data-ocid="review-submit-btn"
      >
        {submitReview.isPending ? "Submitting…" : "Submit Review"}
      </Button>
    </form>
  );
}

// ─── Related Product Mini Card ────────────────────────────────────────────────

function RelatedProductCard({ product }: { product: Product }) {
  const discount = calculateDiscount(product.price, product.originalPrice);
  return (
    <Link
      to="/products/$id"
      params={{ id: product.id.toString() }}
      className="flex-shrink-0 w-44 bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
      data-ocid="related-product-card"
    >
      <div className="relative bg-muted/20 flex items-center justify-center h-40 overflow-hidden">
        <ProductPackageSVG
          packagingKey={product.imageUrl}
          productName={product.name}
          size="md"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="p-2.5 space-y-0.5">
        <p className="text-xs font-semibold text-foreground line-clamp-1">
          {product.name}
        </p>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {product.nameHindi}
        </p>
        <div className="flex items-center gap-1.5 pt-0.5">
          <span className="text-sm font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {discount > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// ─── Recently Viewed Section ──────────────────────────────────────────────────

function RecentlyViewedSection({ currentId }: { currentId: string }) {
  const { recentlyViewedIds } = useRecentlyViewed();
  const { data: allProducts = [] } = useProducts();

  // Get up to 4 recently viewed products excluding current
  const recentProducts = recentlyViewedIds
    .filter((id) => id !== currentId)
    .slice(0, 4)
    .map((id) => allProducts.find((p) => p.id.toString() === id))
    .filter((p): p is Product => p !== undefined);

  if (recentProducts.length === 0) return null;

  return (
    <section
      aria-label="Recently viewed products"
      className="bg-muted/30 rounded-2xl p-5"
      data-ocid="recently-viewed-section"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-muted-foreground" />
        <h2 className="font-display text-lg font-bold text-foreground">
          Recently Viewed
        </h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
        {recentProducts.map((product) => (
          <div key={product.id.toString()} className="snap-start flex-shrink-0">
            <RelatedProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Main Product Body ────────────────────────────────────────────────────────

interface ProductBodyProps {
  product: Product;
}

function ProductBody({ product }: ProductBodyProps) {
  const [localQty, setLocalQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const justAddedTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const { data: categories = [] } = useCategories();
  const { data: reviews = [] } = useProductReviews(product.id);
  const { data: relatedProducts = [] } = useProductsByCategory(
    product.category,
  );
  const { isAuthenticated, principal } = useAuth();

  const addItem = useCart((s) => s.addItem);
  const cartItems = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);

  const addToWishlist = useWishlist((s) => s.addToWishlist);
  const removeFromWishlist = useWishlist((s) => s.removeFromWishlist);
  const isWishlisted = useWishlist((s) => s.isWishlisted);
  const wishlisted = isWishlisted(product.id.toString());

  const discount = calculateDiscount(product.price, product.originalPrice);
  // product.category and product.subcategory are string names — find by name
  const category = categories.find((c) => c.name === product.category);
  const cartItem = cartItems.find((i) => i.productId === product.id);
  const cartQty = cartItem?.quantity ?? 0;

  const filteredRelated = relatedProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 6);

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length
      : product.rating;
  const reviewCount =
    reviews.length > 0 ? reviews.length : Number(product.reviewCount);

  function handleAddToCart() {
    addItem(product);
    if (localQty > 1) {
      updateQuantity(product.id, cartQty + localQty);
    }
    toast.success(`${product.name} added to cart 🛒`, {
      action: {
        label: "Go to Cart",
        onClick: () => {
          window.location.href = "/cart";
        },
      },
    });
    setJustAdded(true);
    clearTimeout(justAddedTimeout.current);
    justAddedTimeout.current = setTimeout(() => setJustAdded(false), 5000);
  }

  function handleWishlistToggle() {
    const pid = product.id.toString();
    if (wishlisted) {
      removeFromWishlist(pid);
      toast.info("Removed from Wishlist");
    } else {
      addToWishlist(pid);
      toast.success("Added to Wishlist ❤️");
    }
  }

  function handleCartIncrement() {
    updateQuantity(product.id, cartQty + 1);
  }

  function handleCartDecrement() {
    if (cartQty <= 1) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, cartQty - 1);
    }
  }

  return (
    <div className="space-y-10">
      {/* Main product section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* ── Left: Package Visual ── */}
        <div className="w-full md:w-80 flex-shrink-0 space-y-3">
          <div className="relative rounded-2xl overflow-hidden bg-muted/20 border border-border aspect-square flex items-center justify-center">
            <ProductPackageSVG
              packagingKey={product.imageUrl}
              productName={product.name}
              size="lg"
              className="w-full h-full"
            />
            {discount > 0 && (
              <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow">
                {discount}% OFF
              </div>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/75 flex items-center justify-center">
                <span className="bg-card text-muted-foreground font-semibold px-4 py-2 rounded-full border border-border text-sm">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Stock pill — desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                product.inStock
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-destructive/10 text-destructive border border-destructive/20"
              }`}
              data-ocid="stock-status-desktop"
            >
              {product.inStock ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <XCircle className="w-3.5 h-3.5" />
              )}
              {product.inStock
                ? `In Stock (${Number(product.stock)} left)`
                : "Out of Stock"}
            </span>
          </div>
        </div>

        {/* ── Right: Info ── */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Breadcrumb badges */}
          <div className="flex flex-wrap items-center gap-2">
            {category && (
              <CategoryBadge emoji={category.icon} variant="outline">
                {category.name}
              </CategoryBadge>
            )}
            {product.subcategory && (
              <Badge variant="secondary" className="text-xs">
                {product.subcategory}
              </Badge>
            )}
            <Badge
              variant="secondary"
              className="text-xs capitalize"
              data-ocid="packaging-badge"
            >
              <Package className="w-3 h-3 mr-1" />
              {product.packagingType || "Pack"}
            </Badge>
            {product.quantity && (
              <Badge
                variant="secondary"
                className="text-xs"
                data-ocid="quantity-badge"
              >
                <Droplets className="w-3 h-3 mr-1" />
                {product.quantity}
              </Badge>
            )}
          </div>

          {/* Title + Wishlist */}
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mt-0.5 font-medium">
                {product.nameHindi}
              </p>
              <span className="inline-block text-sm text-primary font-semibold mt-1 tracking-wide">
                {product.brand || "Yadav Dairy"}
              </span>
            </div>
            <button
              type="button"
              aria-label={
                wishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              className="mt-1 flex-shrink-0 p-2 rounded-full hover:bg-muted transition-colors"
              onClick={handleWishlistToggle}
              data-ocid="wishlist-toggle-btn"
            >
              <Heart
                className="w-6 h-6 transition-colors"
                fill={wishlisted ? "#ef4444" : "none"}
                stroke={wishlisted ? "#ef4444" : "currentColor"}
              />
            </button>
          </div>

          {/* Rating summary */}
          <div className="flex items-center gap-2">
            <DisplayStars rating={avgRating} size="md" />
            <span className="text-sm font-semibold text-foreground">
              {avgRating.toFixed(1)}
            </span>
            <span className="text-sm text-muted-foreground">
              ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {discount > 0 && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <Badge className="bg-accent/15 text-accent border-accent/30 text-sm font-bold">
                  {discount}% off
                </Badge>
              </>
            )}
          </div>

          {/* Stock status — mobile */}
          <div className="md:hidden">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                product.inStock
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-destructive/10 text-destructive border border-destructive/20"
              }`}
              data-ocid="stock-status-mobile"
            >
              {product.inStock ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <XCircle className="w-3.5 h-3.5" />
              )}
              {product.inStock
                ? `In Stock (${Number(product.stock)} left)`
                : "Out of Stock"}
            </span>
          </div>

          <Separator />

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2 bg-muted/40 rounded-xl p-3">
              <Package className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Packaging</p>
                <p className="text-sm font-semibold capitalize">
                  {product.packagingType || "—"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-muted/40 rounded-xl p-3">
              <Droplets className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Quantity</p>
                <p className="text-sm font-semibold">
                  {product.quantity || "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="bg-muted/30 rounded-xl p-4 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm font-semibold text-foreground">
                  About this product
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Cart actions */}
          {cartQty > 0 ? (
            <div
              className="flex flex-col gap-3"
              data-ocid="cart-active-section"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-primary/10 rounded-xl px-4 py-2.5 border border-primary/20">
                  <button
                    type="button"
                    className="text-primary font-bold w-8 h-8 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors"
                    onClick={handleCartDecrement}
                    aria-label="Decrease quantity"
                    data-ocid="cart-decrement-btn"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-primary text-lg w-8 text-center">
                    {cartQty}
                  </span>
                  <button
                    type="button"
                    className="text-primary font-bold w-8 h-8 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors"
                    onClick={handleCartIncrement}
                    aria-label="Increase quantity"
                    data-ocid="cart-increment-btn"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Link to="/cart" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    data-ocid="go-to-cart-btn"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Go to Cart
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-3" data-ocid="cart-add-section">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2 bg-card">
                  <button
                    type="button"
                    className="text-foreground w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors disabled:opacity-40"
                    onClick={() => setLocalQty((q) => Math.max(1, q - 1))}
                    disabled={localQty <= 1}
                    aria-label="Decrease quantity"
                    data-ocid="local-qty-decrement"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-semibold text-sm w-6 text-center">
                    {localQty}
                  </span>
                  <button
                    type="button"
                    className="text-foreground w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors"
                    onClick={() => setLocalQty((q) => q + 1)}
                    aria-label="Increase quantity"
                    data-ocid="local-qty-increment"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <Button
                  className={`flex-1 h-12 text-base font-semibold gap-2 btn-accent transition-all ${
                    product.inStock ? "animate-pulse-once" : ""
                  }`}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  data-ocid="add-to-cart-btn"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>

              {/* "Go to Cart" appears after first add */}
              {justAdded && (
                <Link to="/cart">
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-primary/40 text-primary hover:bg-primary/5"
                    data-ocid="go-to-cart-after-add-btn"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Go to Cart →
                  </Button>
                </Link>
              )}
            </div>
          )}

          {/* Product tags */}
          <div className="flex flex-wrap gap-2">
            {product.isFeatured && (
              <Badge
                variant="secondary"
                className="gap-1 text-xs text-primary font-semibold"
              >
                <Star className="w-3 h-3 fill-current" /> Featured
              </Badge>
            )}
            {product.isTrending && (
              <Badge
                variant="secondary"
                className="gap-1 text-xs text-accent font-semibold"
              >
                🔥 Trending
              </Badge>
            )}
            {discount > 0 && (
              <Badge
                variant="secondary"
                className="gap-1 text-xs text-foreground font-semibold"
              >
                <Tag className="w-3 h-3" /> On Sale
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      {filteredRelated.length > 0 && (
        <section aria-label="Related products">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            More from this category
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
            {filteredRelated.map((p) => (
              <div key={p.id.toString()} className="snap-start">
                <RelatedProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}

      <Separator />

      {/* ── Reviews Section ── */}
      <section aria-label="Product reviews" className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-foreground">
            Reviews & Ratings
          </h2>
          <div className="flex items-center gap-2">
            <DisplayStars rating={avgRating} size="md" />
            <span className="text-sm font-semibold">
              {avgRating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              ({reviewCount} {reviewCount === 1 ? "review" : "reviews"})
            </span>
          </div>
        </div>

        {/* Submit review form — only when authenticated */}
        {isAuthenticated && principal && (
          <ReviewForm productId={product.id} principal={principal} />
        )}

        {!isAuthenticated && (
          <div
            className="bg-muted/40 border border-border rounded-xl p-4 text-center space-y-2"
            data-ocid="login-to-review"
          >
            <p className="text-sm text-muted-foreground">
              Login to leave a review for this product
            </p>
          </div>
        )}

        {/* Review list */}
        {reviews.length > 0 ? (
          <div className="space-y-3" data-ocid="reviews-list">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id.toString()}
                reviewerName={review.reviewerName}
                rating={review.rating}
                comment={review.comment}
                createdAt={review.createdAt}
              />
            ))}
          </div>
        ) : (
          <div
            className="bg-muted/30 rounded-xl p-6 text-center text-muted-foreground text-sm"
            data-ocid="reviews-empty-state"
          >
            No reviews yet. Be the first to review this product!
          </div>
        )}
      </section>

      {/* ── Recently Viewed ── */}
      <RecentlyViewedSection currentId={product.id.toString()} />
    </div>
  );
}

// ─── Page Entry Point ─────────────────────────────────────────────────────────

export default function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const productId = BigInt(id);

  const { data: product, isLoading } = useProduct(productId);
  const addRecentlyViewed = useRecentlyViewed((s) => s.addRecentlyViewed);

  const trackView = useCallback(() => {
    addRecentlyViewed(id);
  }, [id, addRecentlyViewed]);

  useEffect(() => {
    trackView();
  }, [trackView]);

  if (isLoading) return <DetailSkeleton />;

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="text-5xl mb-4">🔍</div>
        <h2 className="text-xl font-semibold mb-2">Product not found</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          This product may have been removed or doesn&apos;t exist.
        </p>
        <Link to="/products">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 pt-4 pb-14">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5"
          data-ocid="back-to-products-link"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
        <ProductBody product={product} />
      </div>
    </div>
  );
}

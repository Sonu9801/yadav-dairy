import ProductPackageSVG from "@/components/products/ProductPackageSVG";
import CategoryBadge from "@/components/ui/CategoryBadge";
import StarRating from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCategories,
  useProduct,
  useSubcategories,
} from "@/hooks/use-backend";
import { useCart } from "@/hooks/use-cart";
import { calculateDiscount, formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Droplets,
  Info,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Star,
  Tag,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function DetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <Skeleton className="h-4 w-24 mb-6" />
      <div className="flex flex-col md:flex-row gap-6">
        <Skeleton className="w-full md:w-80 aspect-square rounded-2xl flex-shrink-0" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-12 w-full mt-4" />
        </div>
      </div>
    </div>
  );
}

interface ProductBodyProps {
  product: Product;
}

function ProductBody({ product }: ProductBodyProps) {
  const [localQty, setLocalQty] = useState(1);
  const { data: categories = [] } = useCategories();
  const { data: subcategories = [] } = useSubcategories();

  const addItem = useCart((s) => s.addItem);
  const cartItems = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);

  const discount = calculateDiscount(product.price, product.originalPrice);
  const category = categories.find((c) => c.id === product.categoryId);
  const subcategory = subcategories.find((s) => s.id === product.subcategoryId);
  const cartItem = cartItems.find((i) => i.productId === product.id);
  const cartQty = cartItem?.quantity ?? 0;

  function handleAddToCart() {
    addItem(product);
    if (localQty > 1) {
      updateQuantity(product.id, cartQty + localQty);
    }
    toast.success(`${product.nameEn} added to cart`);
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
    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
      {/* Product image */}
      <div className="w-full md:w-80 flex-shrink-0">
        <div className="relative rounded-2xl overflow-hidden bg-muted/20 border border-border aspect-square flex items-center justify-center">
          <ProductPackageSVG
            packagingKey={product.imageUrl}
            productName={product.nameEn}
            size="lg"
            className="w-full h-full"
          />
          {discount > 0 && (
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow">
              {discount}% OFF
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
              <span className="bg-card text-muted-foreground font-semibold px-4 py-2 rounded-full border border-border text-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Quick info pills - desktop only */}
        <div className="hidden md:flex flex-wrap gap-2 mt-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full ${
              product.inStock
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-destructive/10 text-destructive border border-destructive/20"
            }`}
          >
            {product.inStock ? (
              <CheckCircle2 className="w-3 h-3" />
            ) : (
              <XCircle className="w-3 h-3" />
            )}
            {product.inStock
              ? `In Stock (${Number(product.stockCount)} left)`
              : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="flex-1 min-w-0">
        {/* Category badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {category && (
            <CategoryBadge emoji={category.iconEmoji} variant="outline">
              {category.name}
            </CategoryBadge>
          )}
          {subcategory && (
            <Badge variant="secondary" className="text-xs">
              {subcategory.name}
            </Badge>
          )}
        </div>

        {/* Names */}
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {product.nameEn}
        </h1>
        <p className="text-lg text-muted-foreground mt-1 font-medium">
          {product.nameHi}
        </p>
        <span className="inline-block text-sm text-primary font-semibold mt-1 tracking-wide">
          {product.brand || "Yadav Dairy"}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <StarRating rating={product.rating} size="md" showValue />
          <span className="text-sm text-muted-foreground">
            ({Number(product.reviewCount)}{" "}
            {Number(product.reviewCount) === 1 ? "review" : "reviews"})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mt-4">
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

        {/* Stock status - mobile */}
        <div className="md:hidden mt-3">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
              product.inStock
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-destructive/10 text-destructive border border-destructive/20"
            }`}
            data-ocid="stock-status"
          >
            {product.inStock ? (
              <CheckCircle2 className="w-3.5 h-3.5" />
            ) : (
              <XCircle className="w-3.5 h-3.5" />
            )}
            {product.inStock
              ? `In Stock (${Number(product.stockCount)} left)`
              : "Out of Stock"}
          </span>
        </div>

        <Separator className="my-4" />

        {/* Details grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
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
              <p className="text-xs text-muted-foreground">Fat Content</p>
              <p className="text-sm font-semibold">
                {product.fatContent || "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <div className="mb-5">
            <div className="flex items-center gap-1.5 mb-1.5">
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
            className="flex items-center gap-4"
            data-ocid="cart-quantity-controls"
          >
            <div className="flex items-center gap-3 bg-primary/10 rounded-xl px-4 py-2 border border-primary/20">
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
            <Link to="/cart">
              <Button variant="outline" className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                View Cart
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Local qty selector */}
            <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-2 bg-card">
              <button
                type="button"
                className="text-foreground w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors disabled:opacity-40"
                onClick={() => setLocalQty((q) => Math.max(1, q - 1))}
                disabled={localQty <= 1}
                aria-label="Decrease"
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
                aria-label="Increase"
                data-ocid="local-qty-increment"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <Button
              className="flex-1 btn-accent h-12 text-base font-semibold gap-2"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              data-ocid="add-to-cart-btn"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
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
  );
}

export default function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const productId = BigInt(id);

  const { data: product, isLoading } = useProduct(productId);

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
      <div className="max-w-4xl mx-auto px-4 pt-4 pb-10">
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

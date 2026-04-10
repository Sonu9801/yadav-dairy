import ProductPackageSVG from "@/components/products/ProductPackageSVG";
import StarRating from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { calculateDiscount, formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Plus } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "list";
}

export default function ProductCard({
  product,
  variant = "grid",
}: ProductCardProps) {
  const navigate = useNavigate();
  const addItem = useCart((s) => s.addItem);
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist();

  const productIdStr = product.id.toString();
  const wishlisted = isWishlisted(productIdStr);
  const discount = calculateDiscount(product.price, product.originalPrice);
  const cartItem = items.find((i) => i.productId === product.id);
  const qty = cartItem?.quantity ?? 0;

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart`, {
      action: {
        label: "Go to Cart",
        onClick: () => void navigate({ to: "/cart" }),
      },
    });
  }

  function handleIncrement(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, qty + 1);
  }

  function handleDecrement(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (qty <= 1) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, qty - 1);
    }
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (wishlisted) {
      removeFromWishlist(productIdStr);
      toast.info(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(productIdStr);
      toast.success(`${product.name} added to wishlist ❤️`);
    }
  }

  if (variant === "list") {
    return (
      <Link
        to="/products/$id"
        params={{ id: product.id.toString() }}
        className="flex items-center gap-3 bg-card rounded-xl p-3 shadow-card card-hover border border-border"
        data-ocid="product-list-card"
      >
        <div className="w-20 h-20 rounded-lg flex-shrink-0 bg-muted/30 overflow-hidden flex items-center justify-center">
          <ProductPackageSVG
            packagingKey={product.imageUrl}
            productName={product.name}
            size="sm"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm text-foreground truncate">
            {product.name}
          </div>
          <div className="text-muted-foreground text-xs">
            {product.nameHindi}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <StarRating rating={product.rating} size="sm" />
            <span className="text-muted-foreground text-xs">
              ({Number(product.reviewCount)})
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-foreground text-sm">
              {formatPrice(product.price)}
            </span>
            {discount > 0 && (
              <>
                <span className="text-muted-foreground line-through text-xs">
                  {formatPrice(product.originalPrice)}
                </span>
                <Badge
                  variant="secondary"
                  className="text-xs px-1 py-0 text-accent font-semibold"
                >
                  {discount}% off
                </Badge>
              </>
            )}
          </div>
        </div>
        {qty > 0 ? (
          <div
            className="flex items-center gap-1 flex-shrink-0"
            onClick={(e) => e.preventDefault()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7 rounded-full"
              onClick={handleDecrement}
              data-ocid="qty-decrement"
            >
              <span className="text-lg font-bold leading-none">-</span>
            </Button>
            <span className="font-bold text-sm w-5 text-center">{qty}</span>
            <Button
              size="icon"
              className="h-7 w-7 rounded-full bg-primary text-primary-foreground"
              onClick={handleIncrement}
              data-ocid="qty-increment"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        ) : (
          <Button
            size="sm"
            className="flex-shrink-0 btn-accent text-xs h-8 px-3"
            onClick={handleAdd}
            disabled={!product.inStock}
            data-ocid="add-to-cart-btn"
          >
            {product.inStock ? "ADD +" : "Out of stock"}
          </Button>
        )}
      </Link>
    );
  }

  return (
    <Link
      to="/products/$id"
      params={{ id: product.id.toString() }}
      className="flex flex-col bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border"
      data-ocid="product-grid-card"
    >
      <div className="relative bg-muted/20 flex items-center justify-center p-3 aspect-square">
        <ProductPackageSVG
          packagingKey={product.imageUrl}
          productName={product.name}
          size="md"
        />

        {/* Wishlist heart */}
        <button
          type="button"
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-card/80 backdrop-blur-sm shadow-subtle hover:scale-110 transition-smooth"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          data-ocid="wishlist-toggle"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
          />
        </button>

        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
            {discount}% OFF
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="bg-card text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full border border-border">
              Out of Stock
            </span>
          </div>
        )}
        {Number(product.stock) > 0 &&
          Number(product.stock) <= 5 &&
          product.inStock && (
            <div className="absolute bottom-2 left-2 bg-destructive/90 text-destructive-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
              Only {Number(product.stock)} left!
            </div>
          )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <div className="font-semibold text-sm text-foreground leading-snug line-clamp-1">
          {product.name}
        </div>
        <div className="text-muted-foreground text-xs mt-0.5">
          {product.nameHindi}
        </div>
        <p className="text-xs text-primary font-semibold mt-0.5">Yadav Dairy</p>
        <div className="text-muted-foreground text-xs mt-0.5">
          {product.quantity}
        </div>

        <div className="flex items-center gap-1 mt-1">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-muted-foreground text-xs">
            ({Number(product.reviewCount)})
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-bold text-foreground text-base">
            {formatPrice(product.price)}
          </span>
          {discount > 0 && (
            <span className="text-muted-foreground line-through text-xs">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-2">
          {qty > 0 ? (
            <div
              className="flex items-center justify-between bg-primary/10 rounded-lg px-2 py-1"
              onClick={(e) => e.preventDefault()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="text-primary font-bold text-lg w-7 h-7 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
                data-ocid="qty-decrement"
              >
                -
              </button>
              <span className="font-bold text-primary text-sm">{qty}</span>
              <button
                type="button"
                className="text-primary font-bold text-lg w-7 h-7 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors"
                onClick={handleIncrement}
                aria-label="Increase quantity"
                data-ocid="qty-increment"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="w-full bg-primary text-primary-foreground text-xs h-9 rounded-lg flex items-center justify-center gap-1 font-bold disabled:opacity-50 hover:opacity-90 transition-smooth shadow-subtle"
              onClick={handleAdd}
              disabled={!product.inStock}
              data-ocid="add-to-cart-btn"
            >
              ADD + <Plus className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

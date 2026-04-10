import ProductCard from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProducts } from "@/hooks/use-backend";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import type { Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Heart,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type SortOption = "recent" | "price-asc" | "price-desc";

const SORT_LABELS: Record<SortOption, string> = {
  recent: "Recently Added",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
};

function ProductCardSkeleton() {
  return (
    <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border animate-pulse">
      <Skeleton className="aspect-square w-full" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-8 w-full mt-2" />
      </div>
    </div>
  );
}

function EmptyWishlist() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-6 text-center"
      data-ocid="wishlist-empty"
    >
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
          <Heart
            className="w-16 h-16 text-accent/40 dark:text-accent/50"
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center">
          <Heart className="w-5 h-5 text-accent/60" />
        </div>
        <div className="absolute -bottom-2 -left-2 w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-accent/50" />
        </div>
      </div>

      <h2 className="text-xl font-display font-bold text-foreground mb-2">
        No saved items yet
      </h2>
      <p className="text-muted-foreground text-sm max-w-xs mb-8 leading-relaxed">
        Tap the heart icon on any product to save it here. Your wishlist is
        waiting!
      </p>

      <Button
        asChild
        className="btn-accent gap-2 px-6"
        data-ocid="explore-products-btn"
      >
        <Link to="/products">
          Browse Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}

// ── Move to cart button overlay ───────────────────────────────────────────────

function WishlistProductCard({
  product,
  onRemove,
}: { product: Product; onRemove: () => void }) {
  const navigate = useNavigate();
  const addItem = useCart((s) => s.addItem);

  function handleMoveToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    onRemove();
    toast.success(`${product.name} moved to cart`, {
      action: {
        label: "Go to Cart",
        onClick: () => void navigate({ to: "/cart" }),
      },
    });
  }

  return (
    <div className="relative group" data-ocid="wishlist-product-card">
      <ProductCard product={product} variant="grid" />

      {/* Overlay actions on hover */}
      <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity z-10">
        <div className="flex gap-1.5">
          <button
            type="button"
            className="flex-1 bg-primary text-primary-foreground text-xs py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 hover:opacity-90 transition-opacity shadow-md"
            onClick={handleMoveToCart}
            aria-label={`Move ${product.name} to cart`}
            data-ocid="move-to-cart-btn"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Move to Cart
          </button>
          <button
            type="button"
            className="w-8 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors shadow-md"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemove();
            }}
            aria-label={`Remove ${product.name} from wishlist`}
            data-ocid="wishlist-remove-btn"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { data: allProducts, isLoading } = useProducts();
  const addItem = useCart((s) => s.addItem);

  const [sort, setSort] = useState<SortOption>("recent");
  const [sortOpen, setSortOpen] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const wishlistedProducts: Product[] = useMemo(() => {
    if (!allProducts) return [];
    return allProducts.filter((p) => wishlistItems.includes(p.id.toString()));
  }, [allProducts, wishlistItems]);

  const sortedProducts = useMemo(() => {
    const items = [...wishlistedProducts];
    if (sort === "price-asc") {
      return items.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (sort === "price-desc") {
      return items.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return items.sort(
      (a, b) =>
        wishlistItems.indexOf(b.id.toString()) -
        wishlistItems.indexOf(a.id.toString()),
    );
  }, [wishlistedProducts, sort, wishlistItems]);

  const handleAddAllToCart = () => {
    for (const p of sortedProducts) {
      addItem(p);
    }
    toast.success(`${sortedProducts.length} items added to cart! 🛒`, {
      action: {
        label: "Go to Cart",
        onClick: () => {
          window.location.href = "/cart";
        },
      },
    });
  };

  const handleRemove = (productId: string, name: string) => {
    removeFromWishlist(productId);
    toast.info(`${name} removed from wishlist`, { icon: "💔" });
  };

  const handleClearWishlist = () => {
    clearWishlist();
    setConfirmClear(false);
    toast.info("Wishlist cleared");
  };

  const itemCount = wishlistItems.length;
  const isLoadingProducts = isLoading && itemCount > 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/15 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-accent fill-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-display font-bold text-foreground">
                  My Wishlist
                </h1>
                {itemCount > 0 && (
                  <Badge
                    className="bg-accent text-accent-foreground font-bold tabular-nums"
                    data-ocid="wishlist-count-badge"
                  >
                    {itemCount}
                  </Badge>
                )}
              </div>
              {itemCount > 0 && (
                <p className="text-sm text-muted-foreground mt-0.5">
                  {itemCount} saved item{itemCount !== 1 ? "s" : ""}
                </p>
              )}
            </div>
          </div>

          {/* Bulk action controls */}
          {itemCount > 0 && !isLoadingProducts && (
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                size="sm"
                className="btn-accent gap-1.5 text-sm"
                onClick={handleAddAllToCart}
                data-ocid="add-all-to-cart-btn"
              >
                <ShoppingCart className="w-4 h-4" />
                Add All to Cart
              </Button>

              {!confirmClear ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-1.5 text-sm border-destructive/40 text-destructive hover:bg-destructive/10"
                  onClick={() => setConfirmClear(true)}
                  data-ocid="clear-wishlist-btn"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </Button>
              ) : (
                <div className="flex items-center gap-1.5 bg-destructive/10 border border-destructive/30 rounded-lg px-2 py-1">
                  <span className="text-xs text-destructive font-medium">
                    Sure?
                  </span>
                  <button
                    type="button"
                    className="text-xs bg-destructive text-destructive-foreground rounded px-2 py-0.5 font-semibold hover:bg-destructive/90 transition-colors"
                    onClick={handleClearWishlist}
                    data-ocid="confirm-clear-wishlist"
                  >
                    Yes, clear
                  </button>
                  <button
                    type="button"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setConfirmClear(false)}
                    aria-label="Cancel"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sort bar */}
        {sortedProducts.length > 1 && !isLoadingProducts && (
          <div className="flex items-center gap-2 mb-5">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm font-medium text-foreground bg-card border border-border rounded-lg px-3 py-1.5 hover:bg-muted/50 transition-colors"
                onClick={() => setSortOpen((v) => !v)}
                data-ocid="wishlist-sort-btn"
              >
                {SORT_LABELS[sort]}
                <ChevronDown
                  className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${sortOpen ? "rotate-180" : ""}`}
                />
              </button>
              {sortOpen && (
                <div className="absolute left-0 top-full mt-1 z-20 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[180px]">
                  {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      className={`w-full text-left text-sm px-4 py-2.5 transition-colors hover:bg-muted/60 ${
                        sort === key
                          ? "text-accent font-semibold bg-accent/5"
                          : "text-foreground"
                      }`}
                      onClick={() => {
                        setSort(key);
                        setSortOpen(false);
                      }}
                      data-ocid={`sort-option-${key}`}
                    >
                      {SORT_LABELS[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Loading skeletons */}
        {isLoadingProducts && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {Array.from({ length: Math.min(itemCount, 10) }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoadingProducts && itemCount === 0 && <EmptyWishlist />}

        {/* Wishlist grid */}
        {!isLoadingProducts && sortedProducts.length > 0 && (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
            data-ocid="wishlist-grid"
          >
            {sortedProducts.map((product) => (
              <WishlistProductCard
                key={product.id.toString()}
                product={product}
                onRemove={() =>
                  handleRemove(product.id.toString(), product.name)
                }
              />
            ))}
          </div>
        )}

        {/* Items in wishlist but not found in DB */}
        {!isLoadingProducts &&
          itemCount > 0 &&
          sortedProducts.length === 0 &&
          allProducts &&
          allProducts.length > 0 && (
            <Card className="p-8 text-center space-y-3 mt-4">
              <Heart className="w-10 h-10 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground text-sm">
                Some saved products are no longer available.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => clearWishlist()}
                className="text-destructive border-destructive/30 hover:bg-destructive/10"
              >
                Clear Unavailable Items
              </Button>
            </Card>
          )}
      </div>
    </div>
  );
}

import { f as useProducts, v as useCart, r as reactExports, j as jsxRuntimeExports, h as Badge, B as Button, y as ShoppingCart, z as ue, S as Skeleton, L as Link, g as useNavigate } from "./index-S-wpKozw.js";
import { P as ProductCard } from "./ProductCard-jLj6EdkC.js";
import { C as Card } from "./card-BQ_B13ot.js";
import { u as useWishlist, H as Heart } from "./use-wishlist-BvEZIzWU.js";
import { T as Trash2 } from "./trash-2-DTt9HCne.js";
import { X } from "./x-Bb5ldv21.js";
import { C as ChevronDown } from "./chevron-down-B2AfH6Cz.js";
import { A as ArrowRight } from "./arrow-right-BJLk-6w2.js";
import "./plus-Crllhs1t.js";
const SORT_LABELS = {
  recent: "Recently Added",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low"
};
function ProductCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col bg-card rounded-xl overflow-hidden border border-border animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full mt-2" })
    ] })
  ] });
}
function EmptyWishlist() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-20 px-6 text-center",
      "data-ocid": "wishlist-empty",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-32 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Heart,
            {
              className: "w-16 h-16 text-accent/40 dark:text-accent/50",
              strokeWidth: 1.5
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-1 -right-1 w-10 h-10 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-accent/60" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -left-2 w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-3.5 h-3.5 text-accent/50" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground mb-2", children: "No saved items yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs mb-8 leading-relaxed", children: "Tap the heart icon on any product to save it here. Your wishlist is waiting!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            className: "btn-accent gap-2 px-6",
            "data-ocid": "explore-products-btn",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", children: [
              "Browse Products",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          }
        )
      ]
    }
  );
}
function WishlistProductCard({
  product,
  onRemove
}) {
  const navigate = useNavigate();
  const addItem = useCart((s) => s.addItem);
  function handleMoveToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    onRemove();
    ue.success(`${product.name} moved to cart`, {
      action: {
        label: "Go to Cart",
        onClick: () => void navigate({ to: "/cart" })
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", "data-ocid": "wishlist-product-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, variant: "grid" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "flex-1 bg-primary text-primary-foreground text-xs py-1.5 rounded-lg font-semibold flex items-center justify-center gap-1 hover:opacity-90 transition-opacity shadow-md",
          onClick: handleMoveToCart,
          "aria-label": `Move ${product.name} to cart`,
          "data-ocid": "move-to-cart-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5" }),
            "Move to Cart"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "w-8 bg-card/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors shadow-md",
          onClick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          },
          "aria-label": `Remove ${product.name} from wishlist`,
          "data-ocid": "wishlist-remove-btn",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
        }
      )
    ] }) })
  ] });
}
function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { data: allProducts, isLoading } = useProducts();
  const addItem = useCart((s) => s.addItem);
  const [sort, setSort] = reactExports.useState("recent");
  const [sortOpen, setSortOpen] = reactExports.useState(false);
  const [confirmClear, setConfirmClear] = reactExports.useState(false);
  const wishlistedProducts = reactExports.useMemo(() => {
    if (!allProducts) return [];
    return allProducts.filter((p) => wishlistItems.includes(p.id.toString()));
  }, [allProducts, wishlistItems]);
  const sortedProducts = reactExports.useMemo(() => {
    const items = [...wishlistedProducts];
    if (sort === "price-asc") {
      return items.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (sort === "price-desc") {
      return items.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return items.sort(
      (a, b) => wishlistItems.indexOf(b.id.toString()) - wishlistItems.indexOf(a.id.toString())
    );
  }, [wishlistedProducts, sort, wishlistItems]);
  const handleAddAllToCart = () => {
    for (const p of sortedProducts) {
      addItem(p);
    }
    ue.success(`${sortedProducts.length} items added to cart! 🛒`, {
      action: {
        label: "Go to Cart",
        onClick: () => {
          window.location.href = "/cart";
        }
      }
    });
  };
  const handleRemove = (productId, name) => {
    removeFromWishlist(productId);
    ue.info(`${name} removed from wishlist`, { icon: "💔" });
  };
  const handleClearWishlist = () => {
    clearWishlist();
    setConfirmClear(false);
    ue.info("Wishlist cleared");
  };
  const itemCount = wishlistItems.length;
  const isLoadingProducts = isLoading && itemCount > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-6 sm:py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent/15 dark:bg-accent/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5 text-accent fill-accent" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "My Wishlist" }),
            itemCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "bg-accent text-accent-foreground font-bold tabular-nums",
                "data-ocid": "wishlist-count-badge",
                children: itemCount
              }
            )
          ] }),
          itemCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
            itemCount,
            " saved item",
            itemCount !== 1 ? "s" : ""
          ] })
        ] })
      ] }),
      itemCount > 0 && !isLoadingProducts && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "btn-accent gap-1.5 text-sm",
            onClick: handleAddAllToCart,
            "data-ocid": "add-all-to-cart-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
              "Add All to Cart"
            ]
          }
        ),
        !confirmClear ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "gap-1.5 text-sm border-destructive/40 text-destructive hover:bg-destructive/10",
            onClick: () => setConfirmClear(true),
            "data-ocid": "clear-wishlist-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              "Clear All"
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-destructive/10 border border-destructive/30 rounded-lg px-2 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-destructive font-medium", children: "Sure?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-xs bg-destructive text-destructive-foreground rounded px-2 py-0.5 font-semibold hover:bg-destructive/90 transition-colors",
              onClick: handleClearWishlist,
              "data-ocid": "confirm-clear-wishlist",
              children: "Yes, clear"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-muted-foreground hover:text-foreground transition-colors",
              onClick: () => setConfirmClear(false),
              "aria-label": "Cancel",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] })
    ] }),
    sortedProducts.length > 1 && !isLoadingProducts && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Sort by:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-center gap-1.5 text-sm font-medium text-foreground bg-card border border-border rounded-lg px-3 py-1.5 hover:bg-muted/50 transition-colors",
            onClick: () => setSortOpen((v) => !v),
            "data-ocid": "wishlist-sort-btn",
            children: [
              SORT_LABELS[sort],
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `w-3.5 h-3.5 text-muted-foreground transition-transform ${sortOpen ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        sortOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-full mt-1 z-20 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[180px]", children: Object.keys(SORT_LABELS).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: `w-full text-left text-sm px-4 py-2.5 transition-colors hover:bg-muted/60 ${sort === key ? "text-accent font-semibold bg-accent/5" : "text-foreground"}`,
            onClick: () => {
              setSort(key);
              setSortOpen(false);
            },
            "data-ocid": `sort-option-${key}`,
            children: SORT_LABELS[key]
          },
          key
        )) })
      ] })
    ] }),
    isLoadingProducts && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4", children: Array.from({ length: Math.min(itemCount, 10) }).map((_, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardSkeleton, {}, i)
    )) }),
    !isLoadingProducts && itemCount === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyWishlist, {}),
    !isLoadingProducts && sortedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4",
        "data-ocid": "wishlist-grid",
        children: sortedProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          WishlistProductCard,
          {
            product,
            onRemove: () => handleRemove(product.id.toString(), product.name)
          },
          product.id.toString()
        ))
      }
    ),
    !isLoadingProducts && itemCount > 0 && sortedProducts.length === 0 && allProducts && allProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 text-center space-y-3 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-10 h-10 text-muted-foreground mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Some saved products are no longer available." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: () => clearWishlist(),
          className: "text-destructive border-destructive/30 hover:bg-destructive/10",
          children: "Clear Unavailable Items"
        }
      )
    ] })
  ] }) });
}
export {
  WishlistPage as default
};

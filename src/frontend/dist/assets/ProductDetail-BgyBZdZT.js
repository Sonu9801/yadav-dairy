import { c as createLucideIcon, o as useParams, p as useProduct, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, S as Skeleton, u as useCategories, q as useProductReviews, s as useProductsByCategory, t as useAuth, v as useCart, w as calculateDiscount, P as ProductPackageSVG, h as Badge, x as formatPrice, y as ShoppingCart, z as ue, A as useAddReview, f as useProducts } from "./index-S-wpKozw.js";
import { C as CategoryBadge } from "./CategoryBadge-DZnXsF2X.js";
import { S as Separator } from "./separator-DXTHNz6N.js";
import { T as Textarea } from "./textarea-BolPXiD1.js";
import { u as useRecentlyViewed, T as Tag } from "./use-recently-viewed-YVzd2B8O.js";
import { u as useWishlist, H as Heart, S as Star } from "./use-wishlist-BvEZIzWU.js";
import { A as ArrowLeft } from "./arrow-left-D6UEQz_D.js";
import { C as CircleCheck } from "./circle-check-Dh5gFe4T.js";
import { P as Package } from "./package-okqL4Ge3.js";
import { M as Minus } from "./minus-DnHEr9Fd.js";
import { P as Plus } from "./plus-Crllhs1t.js";
import { C as Clock } from "./clock-DMstXQcH.js";
import "./index-C15YK7Bm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode);
function DetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-6 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full md:w-80 aspect-square rounded-2xl flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-20 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-16 rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-px w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" })
      ] })
    ] })
  ] });
}
function StarSelector({
  value,
  onChange
}) {
  const [hovered, setHovered] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("fieldset", { className: "flex gap-1 border-0 p-0 m-0", "aria-label": "Star rating", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      "aria-label": `${star} star${star > 1 ? "s" : ""}`,
      className: "transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded",
      onMouseEnter: () => setHovered(star),
      onMouseLeave: () => setHovered(0),
      onClick: () => onChange(star),
      "data-ocid": `star-selector-${star}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          className: "w-7 h-7",
          fill: (hovered || value) >= star ? "#f59e0b" : "none",
          stroke: (hovered || value) >= star ? "#f59e0b" : "currentColor",
          strokeWidth: 1.5
        }
      )
    },
    star
  )) });
}
function DisplayStars({
  rating,
  size = "sm"
}) {
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: sz,
      fill: rating >= s ? "#f59e0b" : rating >= s - 0.5 ? "#f59e0b" : "none",
      stroke: "#f59e0b",
      strokeWidth: 1.5,
      opacity: rating >= s - 0.5 ? 1 : 0.3
    },
    s
  )) });
}
function ReviewCard({
  reviewerName,
  rating,
  comment,
  createdAt
}) {
  const date = new Date(Number(createdAt) / 1e6).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );
  const initials = reviewerName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl p-4 space-y-2",
      "data-ocid": "review-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: initials || "?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm truncate", children: reviewerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("time", { className: "text-xs text-muted-foreground flex-shrink-0", children: date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayStars, { rating: Number(rating), size: "sm" })
          ] })
        ] }),
        comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pl-12", children: comment })
      ]
    }
  );
}
function ReviewForm({ productId, principal: _principal }) {
  const [rating, setRating] = reactExports.useState(0);
  const [comment, setComment] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  const submitReview = useAddReview();
  function handleSubmit(e) {
    e.preventDefault();
    if (rating === 0) {
      ue.error("Please select a star rating");
      return;
    }
    if (!name.trim()) {
      ue.error("Please enter your name");
      return;
    }
    submitReview.mutate(
      {
        productId,
        reviewerName: name.trim(),
        rating: BigInt(rating),
        comment: comment.trim()
      },
      {
        onSuccess: () => {
          ue.success("Review submitted! Thank you 🙏");
          setRating(0);
          setComment("");
          setName("");
        },
        onError: () => {
          ue.error("Failed to submit review. Please try again.");
        }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "bg-card border border-border rounded-xl p-5 space-y-4",
      "data-ocid": "review-form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Write a Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              className: "text-sm font-medium text-foreground",
              htmlFor: "review-name",
              children: "Your Name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "review-name",
              type: "text",
              value: name,
              onChange: (e) => setName(e.target.value),
              placeholder: "Enter your name",
              className: "w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring",
              "data-ocid": "review-name-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarSelector, { value: rating, onChange: setRating })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: "text-sm font-medium text-foreground",
              htmlFor: "review-comment",
              children: [
                "Comment",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "review-comment",
              value: comment,
              onChange: (e) => setComment(e.target.value),
              placeholder: "Share your experience with this product...",
              className: "resize-none h-24",
              "data-ocid": "review-comment-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            className: "w-full",
            disabled: submitReview.isPending,
            "data-ocid": "review-submit-btn",
            children: submitReview.isPending ? "Submitting…" : "Submit Review"
          }
        )
      ]
    }
  );
}
function RelatedProductCard({ product }) {
  const discount = calculateDiscount(product.price, product.originalPrice);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products/$id",
      params: { id: product.id.toString() },
      className: "flex-shrink-0 w-44 bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group",
      "data-ocid": "related-product-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-muted/20 flex items-center justify-center h-40 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductPackageSVG,
            {
              packagingKey: product.imageUrl,
              productName: product.name,
              size: "md",
              className: "group-hover:scale-105 transition-transform duration-300"
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full", children: [
            discount,
            "% OFF"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground line-clamp-1", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: product.nameHindi }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 pt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: formatPrice(product.price) }),
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground line-through", children: formatPrice(product.originalPrice) })
          ] })
        ] })
      ]
    }
  );
}
function RecentlyViewedSection({ currentId }) {
  const { recentlyViewedIds } = useRecentlyViewed();
  const { data: allProducts = [] } = useProducts();
  const recentProducts = recentlyViewedIds.filter((id) => id !== currentId).slice(0, 4).map((id) => allProducts.find((p) => p.id.toString() === id)).filter((p) => p !== void 0);
  if (recentProducts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "aria-label": "Recently viewed products",
      className: "bg-muted/30 rounded-2xl p-5",
      "data-ocid": "recently-viewed-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold text-foreground", children: "Recently Viewed" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide", children: recentProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-start flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedProductCard, { product }) }, product.id.toString())) })
      ]
    }
  );
}
function ProductBody({ product }) {
  const [localQty, setLocalQty] = reactExports.useState(1);
  const [justAdded, setJustAdded] = reactExports.useState(false);
  const justAddedTimeout = reactExports.useRef(
    void 0
  );
  const { data: categories = [] } = useCategories();
  const { data: reviews = [] } = useProductReviews(product.id);
  const { data: relatedProducts = [] } = useProductsByCategory(
    product.category
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
  const category = categories.find((c) => c.name === product.category);
  const cartItem = cartItems.find((i) => i.productId === product.id);
  const cartQty = (cartItem == null ? void 0 : cartItem.quantity) ?? 0;
  const filteredRelated = relatedProducts.filter((p) => p.id !== product.id).slice(0, 6);
  const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + Number(r.rating), 0) / reviews.length : product.rating;
  const reviewCount = reviews.length > 0 ? reviews.length : Number(product.reviewCount);
  function handleAddToCart() {
    addItem(product);
    if (localQty > 1) {
      updateQuantity(product.id, cartQty + localQty);
    }
    ue.success(`${product.name} added to cart 🛒`, {
      action: {
        label: "Go to Cart",
        onClick: () => {
          window.location.href = "/cart";
        }
      }
    });
    setJustAdded(true);
    clearTimeout(justAddedTimeout.current);
    justAddedTimeout.current = setTimeout(() => setJustAdded(false), 5e3);
  }
  function handleWishlistToggle() {
    const pid = product.id.toString();
    if (wishlisted) {
      removeFromWishlist(pid);
      ue.info("Removed from Wishlist");
    } else {
      addToWishlist(pid);
      ue.success("Added to Wishlist ❤️");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 md:gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-80 flex-shrink-0 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-muted/20 border border-border aspect-square flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductPackageSVG,
            {
              packagingKey: product.imageUrl,
              productName: product.name,
              size: "lg",
              className: "w-full h-full"
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow", children: [
            discount,
            "% OFF"
          ] }),
          !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/75 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card text-muted-foreground font-semibold px-4 py-2 rounded-full border border-border text-sm", children: "Out of Stock" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${product.inStock ? "bg-primary/10 text-primary border border-primary/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`,
            "data-ocid": "stock-status-desktop",
            children: [
              product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
              product.inStock ? `In Stock (${Number(product.stock)} left)` : "Out of Stock"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          category && /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { emoji: category.icon, variant: "outline", children: category.name }),
          product.subcategory && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: product.subcategory }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "text-xs capitalize",
              "data-ocid": "packaging-badge",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-3 h-3 mr-1" }),
                product.packagingType || "Pack"
              ]
            }
          ),
          product.quantity && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "text-xs",
              "data-ocid": "quantity-badge",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-3 h-3 mr-1" }),
                product.quantity
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground leading-tight", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-0.5 font-medium", children: product.nameHindi }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm text-primary font-semibold mt-1 tracking-wide", children: product.brand || "Yadav Dairy" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": wishlisted ? "Remove from wishlist" : "Add to wishlist",
              className: "mt-1 flex-shrink-0 p-2 rounded-full hover:bg-muted transition-colors",
              onClick: handleWishlistToggle,
              "data-ocid": "wishlist-toggle-btn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  className: "w-6 h-6 transition-colors",
                  fill: wishlisted ? "#ef4444" : "none",
                  stroke: wishlisted ? "#ef4444" : "currentColor"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayStars, { rating: avgRating, size: "md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: avgRating.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "(",
            reviewCount,
            " ",
            reviewCount === 1 ? "review" : "reviews",
            ")"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-foreground", children: formatPrice(product.price) }),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg text-muted-foreground line-through", children: formatPrice(product.originalPrice) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-sm font-bold", children: [
              discount,
              "% off"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${product.inStock ? "bg-primary/10 text-primary border border-primary/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`,
            "data-ocid": "stock-status-mobile",
            children: [
              product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
              product.inStock ? `In Stock (${Number(product.stock)} left)` : "Out of Stock"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-muted/40 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Packaging" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold capitalize", children: product.packagingType || "—" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-muted/40 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Quantity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: product.quantity || "—" })
            ] })
          ] })
        ] }),
        product.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-4 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "About this product" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: product.description })
        ] }),
        cartQty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-col gap-3",
            "data-ocid": "cart-active-section",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-primary/10 rounded-xl px-4 py-2.5 border border-primary/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-primary font-bold w-8 h-8 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors",
                    onClick: handleCartDecrement,
                    "aria-label": "Decrease quantity",
                    "data-ocid": "cart-decrement-btn",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-lg w-8 text-center", children: cartQty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-primary font-bold w-8 h-8 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors",
                    onClick: handleCartIncrement,
                    "aria-label": "Increase quantity",
                    "data-ocid": "cart-increment-btn",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "w-full gap-2",
                  "data-ocid": "go-to-cart-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                    "Go to Cart"
                  ]
                }
              ) })
            ] })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", "data-ocid": "cart-add-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border border-border rounded-xl px-3 py-2 bg-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-foreground w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors disabled:opacity-40",
                  onClick: () => setLocalQty((q) => Math.max(1, q - 1)),
                  disabled: localQty <= 1,
                  "aria-label": "Decrease quantity",
                  "data-ocid": "local-qty-decrement",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm w-6 text-center", children: localQty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-foreground w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors",
                  onClick: () => setLocalQty((q) => q + 1),
                  "aria-label": "Increase quantity",
                  "data-ocid": "local-qty-increment",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: `flex-1 h-12 text-base font-semibold gap-2 btn-accent transition-all ${product.inStock ? "animate-pulse-once" : ""}`,
                onClick: handleAddToCart,
                disabled: !product.inStock,
                "data-ocid": "add-to-cart-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
                  product.inStock ? "Add to Cart" : "Out of Stock"
                ]
              }
            )
          ] }),
          justAdded && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "w-full gap-2 border-primary/40 text-primary hover:bg-primary/5",
              "data-ocid": "go-to-cart-after-add-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                "Go to Cart →"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          product.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "gap-1 text-xs text-primary font-semibold",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }),
                " Featured"
              ]
            }
          ),
          product.isTrending && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "gap-1 text-xs text-accent font-semibold",
              children: "🔥 Trending"
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "secondary",
              className: "gap-1 text-xs text-foreground font-semibold",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
                " On Sale"
              ]
            }
          )
        ] })
      ] })
    ] }),
    filteredRelated.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "Related products", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground mb-4", children: "More from this category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide", children: filteredRelated.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedProductCard, { product: p }) }, p.id.toString())) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "Product reviews", className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Reviews & Ratings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DisplayStars, { rating: avgRating, size: "md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: avgRating.toFixed(1) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "(",
            reviewCount,
            " ",
            reviewCount === 1 ? "review" : "reviews",
            ")"
          ] })
        ] })
      ] }),
      isAuthenticated && principal && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewForm, { productId: product.id, principal }),
      !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-muted/40 border border-border rounded-xl p-4 text-center space-y-2",
          "data-ocid": "login-to-review",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Login to leave a review for this product" })
        }
      ),
      reviews.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "reviews-list", children: reviews.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReviewCard,
        {
          reviewerName: review.reviewerName,
          rating: review.rating,
          comment: review.comment,
          createdAt: review.createdAt
        },
        review.id.toString()
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-muted/30 rounded-xl p-6 text-center text-muted-foreground text-sm",
          "data-ocid": "reviews-empty-state",
          children: "No reviews yet. Be the first to review this product!"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RecentlyViewedSection, { currentId: product.id.toString() })
  ] });
}
function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const productId = BigInt(id);
  const { data: product, isLoading } = useProduct(productId);
  const addRecentlyViewed = useRecentlyViewed((s) => s.addRecentlyViewed);
  const trackView = reactExports.useCallback(() => {
    addRecentlyViewed(id);
  }, [id, addRecentlyViewed]);
  reactExports.useEffect(() => {
    trackView();
  }, [trackView]);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(DetailSkeleton, {});
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] text-center px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Product not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "This product may have been removed or doesn't exist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
        " Back to Products"
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 pt-4 pb-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/products",
        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5",
        "data-ocid": "back-to-products-link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          "Back to Products"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductBody, { product })
  ] }) });
}
export {
  ProductDetail as default
};

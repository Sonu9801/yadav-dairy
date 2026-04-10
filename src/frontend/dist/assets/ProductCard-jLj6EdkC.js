import { c as createLucideIcon, j as jsxRuntimeExports, E as cn, g as useNavigate, v as useCart, w as calculateDiscount, L as Link, P as ProductPackageSVG, x as formatPrice, h as Badge, B as Button, z as ue } from "./index-S-wpKozw.js";
import { S as Star, u as useWishlist, H as Heart } from "./use-wishlist-BvEZIzWU.js";
import { P as Plus } from "./plus-Crllhs1t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
      key: "2ksp49"
    }
  ]
];
const StarHalf = createLucideIcon("star-half", __iconNode);
function StarRating({
  rating,
  size = "md",
  showValue = false
}) {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clampedRating);
  const hasHalf = clampedRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const sizeClass = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }[size];
  const textClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }[size];
  const stars = [
    ...Array.from({ length: fullStars }, (_, i) => ({
      type: "full",
      key: `full-${i}`
    })),
    ...hasHalf ? [{ type: "half", key: "half" }] : [],
    ...Array.from({ length: emptyStars }, (_, i) => ({
      type: "empty",
      key: `empty-${i}`
    }))
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `Rating: ${clampedRating.toFixed(1)} out of 5`,
      children: [
        stars.map((star) => {
          if (star.type === "full") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: cn(sizeClass, "fill-yellow-400 text-yellow-400")
              },
              star.key
            );
          }
          if (star.type === "half") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              StarHalf,
              {
                className: cn(sizeClass, "fill-yellow-400 text-yellow-400")
              },
              star.key
            );
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: cn(sizeClass, "text-muted-foreground fill-none")
            },
            star.key
          );
        }),
        showValue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(textClass, "ml-1 font-medium text-foreground"), children: clampedRating.toFixed(1) })
      ]
    }
  );
}
function ProductCard({
  product,
  variant = "grid"
}) {
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
  const qty = (cartItem == null ? void 0 : cartItem.quantity) ?? 0;
  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    ue.success(`${product.name} added to cart`, {
      action: {
        label: "Go to Cart",
        onClick: () => void navigate({ to: "/cart" })
      }
    });
  }
  function handleIncrement(e) {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, qty + 1);
  }
  function handleDecrement(e) {
    e.preventDefault();
    e.stopPropagation();
    if (qty <= 1) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, qty - 1);
    }
  }
  function handleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();
    if (wishlisted) {
      removeFromWishlist(productIdStr);
      ue.info(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(productIdStr);
      ue.success(`${product.name} added to wishlist ❤️`);
    }
  }
  if (variant === "list") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/products/$id",
        params: { id: product.id.toString() },
        className: "flex items-center gap-3 bg-card rounded-xl p-3 shadow-card card-hover border border-border",
        "data-ocid": "product-list-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-lg flex-shrink-0 bg-muted/30 overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductPackageSVG,
            {
              packagingKey: product.imageUrl,
              productName: product.name,
              size: "sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground truncate", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: product.nameHindi }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating, size: "sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                "(",
                Number(product.reviewCount),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-sm", children: formatPrice(product.price) }),
              discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-through text-xs", children: formatPrice(product.originalPrice) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-xs px-1 py-0 text-accent font-semibold",
                    children: [
                      discount,
                      "% off"
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          qty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1 flex-shrink-0",
              onClick: (e) => e.preventDefault(),
              onKeyDown: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "icon",
                    variant: "outline",
                    className: "h-7 w-7 rounded-full",
                    onClick: handleDecrement,
                    "data-ocid": "qty-decrement",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold leading-none", children: "-" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm w-5 text-center", children: qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "icon",
                    className: "h-7 w-7 rounded-full bg-primary text-primary-foreground",
                    onClick: handleIncrement,
                    "data-ocid": "qty-increment",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "flex-shrink-0 btn-accent text-xs h-8 px-3",
              onClick: handleAdd,
              disabled: !product.inStock,
              "data-ocid": "add-to-cart-btn",
              children: product.inStock ? "ADD +" : "Out of stock"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products/$id",
      params: { id: product.id.toString() },
      className: "flex flex-col bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border",
      "data-ocid": "product-grid-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-muted/20 flex items-center justify-center p-3 aspect-square", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductPackageSVG,
            {
              packagingKey: product.imageUrl,
              productName: product.name,
              size: "md"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleWishlist,
              className: "absolute top-2 right-2 p-1.5 rounded-full bg-card/80 backdrop-blur-sm shadow-subtle hover:scale-110 transition-smooth",
              "aria-label": wishlisted ? "Remove from wishlist" : "Add to wishlist",
              "data-ocid": "wishlist-toggle",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  className: `w-4 h-4 transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"}`
                }
              )
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full", children: [
            discount,
            "% OFF"
          ] }),
          !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/60 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full border border-border", children: "Out of Stock" }) }),
          Number(product.stock) > 0 && Number(product.stock) <= 5 && product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-2 bg-destructive/90 text-destructive-foreground text-xs font-semibold px-2 py-0.5 rounded-full", children: [
            "Only ",
            Number(product.stock),
            " left!"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground leading-snug line-clamp-1", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-0.5", children: product.nameHindi }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold mt-0.5", children: "Yadav Dairy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-0.5", children: product.quantity }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating, size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
              "(",
              Number(product.reviewCount),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-base", children: formatPrice(product.price) }),
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-through text-xs", children: formatPrice(product.originalPrice) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-2", children: qty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between bg-primary/10 rounded-lg px-2 py-1",
              onClick: (e) => e.preventDefault(),
              onKeyDown: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-primary font-bold text-lg w-7 h-7 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors",
                    onClick: handleDecrement,
                    "aria-label": "Decrease quantity",
                    "data-ocid": "qty-decrement",
                    children: "-"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-primary font-bold text-lg w-7 h-7 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors",
                    onClick: handleIncrement,
                    "aria-label": "Increase quantity",
                    "data-ocid": "qty-increment",
                    children: "+"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "w-full bg-primary text-primary-foreground text-xs h-9 rounded-lg flex items-center justify-center gap-1 font-bold disabled:opacity-50 hover:opacity-90 transition-smooth shadow-subtle",
              onClick: handleAdd,
              disabled: !product.inStock,
              "data-ocid": "add-to-cart-btn",
              children: [
                "ADD + ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P
};

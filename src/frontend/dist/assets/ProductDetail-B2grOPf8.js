import { c as createLucideIcon, q as useParams, s as useProduct, j as jsxRuntimeExports, L as Link, S as Skeleton, r as reactExports, u as useCategories, t as useSubcategories, m as useCart, n as calculateDiscount, B as Badge, o as formatPrice, p as ShoppingCart } from "./index-Bpk1okSM.js";
import { P as ProductPackageSVG } from "./ProductPackageSVG-Dc0Xoa7T.js";
import { C as CategoryBadge } from "./CategoryBadge-DMWNyRiX.js";
import { a as StarRating, S as Star } from "./StarRating-B9pe--Sx.js";
import { B as Button } from "./button-DQ9l_krO.js";
import { S as Separator } from "./separator-Ch6g5gGG.js";
import { u as ue } from "./index-CATVIhQS.js";
import { A as ArrowLeft } from "./arrow-left-C8g3r8BW.js";
import { C as CircleCheck } from "./circle-check-B-AqQP6l.js";
import { P as Package } from "./package-B1wa1saF.js";
import { M as Minus } from "./minus-oyosO7I9.js";
import { P as Plus } from "./plus-dLW1Sukh.js";
import { T as Tag } from "./tag-tt2x-esV.js";
import "./index-IEHbvEcb.js";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24 mb-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full md:w-80 aspect-square rounded-2xl flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-5/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full mt-4" })
      ] })
    ] })
  ] });
}
function ProductBody({ product }) {
  const [localQty, setLocalQty] = reactExports.useState(1);
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
  const cartQty = (cartItem == null ? void 0 : cartItem.quantity) ?? 0;
  function handleAddToCart() {
    addItem(product);
    if (localQty > 1) {
      updateQuantity(product.id, cartQty + localQty);
    }
    ue.success(`${product.nameEn} added to cart`);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 md:gap-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-80 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden bg-muted/20 border border-border aspect-square flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductPackageSVG,
          {
            packagingKey: product.imageUrl,
            productName: product.nameEn,
            size: "lg",
            className: "w-full h-full"
          }
        ),
        discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full shadow", children: [
          discount,
          "% OFF"
        ] }),
        !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/70 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card text-muted-foreground font-semibold px-4 py-2 rounded-full border border-border text-sm", children: "Out of Stock" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex flex-wrap gap-2 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: `inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full ${product.inStock ? "bg-primary/10 text-primary border border-primary/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`,
          children: [
            product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3 h-3" }),
            product.inStock ? `In Stock (${Number(product.stockCount)} left)` : "Out of Stock"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [
        category && /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { emoji: category.iconEmoji, variant: "outline", children: category.name }),
        subcategory && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: subcategory.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground leading-tight", children: product.nameEn }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mt-1 font-medium", children: product.nameHi }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm text-primary font-semibold mt-1 tracking-wide", children: product.brand || "Yadav Dairy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: product.rating, size: "md", showValue: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
          "(",
          Number(product.reviewCount),
          " ",
          Number(product.reviewCount) === 1 ? "review" : "reviews",
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-foreground", children: formatPrice(product.price) }),
        discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg text-muted-foreground line-through", children: formatPrice(product.originalPrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-sm font-bold", children: [
            discount,
            "% off"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: `inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${product.inStock ? "bg-primary/10 text-primary border border-primary/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`,
          "data-ocid": "stock-status",
          children: [
            product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
            product.inStock ? `In Stock (${Number(product.stockCount)} left)` : "Out of Stock"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Fat Content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: product.fatContent || "—" })
          ] })
        ] })
      ] }),
      product.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "About this product" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: product.description })
      ] }),
      cartQty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-4",
          "data-ocid": "cart-quantity-controls",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-primary/10 rounded-xl px-4 py-2 border border-primary/20", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
              "View Cart"
            ] }) })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border border-border rounded-xl px-3 py-2 bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-foreground w-6 h-6 flex items-center justify-center hover:bg-muted rounded-full transition-colors disabled:opacity-40",
              onClick: () => setLocalQty((q) => Math.max(1, q - 1)),
              disabled: localQty <= 1,
              "aria-label": "Decrease",
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
              "aria-label": "Increase",
              "data-ocid": "local-qty-increment",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 btn-accent h-12 text-base font-semibold gap-2",
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
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
  ] });
}
function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const productId = BigInt(id);
  const { data: product, isLoading } = useProduct(productId);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 pt-4 pb-10", children: [
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

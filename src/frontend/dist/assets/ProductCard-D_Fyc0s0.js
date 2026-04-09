import { m as useCart, n as calculateDiscount, j as jsxRuntimeExports, L as Link, o as formatPrice, B as Badge, p as ShoppingCart } from "./index-Bpk1okSM.js";
import { P as ProductPackageSVG } from "./ProductPackageSVG-Dc0Xoa7T.js";
import { a as StarRating } from "./StarRating-B9pe--Sx.js";
import { B as Button } from "./button-DQ9l_krO.js";
import { u as ue } from "./index-CATVIhQS.js";
import { P as Plus } from "./plus-dLW1Sukh.js";
function ProductCard({
  product,
  variant = "grid"
}) {
  const addItem = useCart((s) => s.addItem);
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const discount = calculateDiscount(product.price, product.originalPrice);
  const cartItem = items.find((i) => i.productId === product.id);
  const qty = (cartItem == null ? void 0 : cartItem.quantity) ?? 0;
  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    ue.success(`${product.nameEn} added to cart`);
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
              productName: product.nameEn,
              size: "sm"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground truncate", children: product.nameEn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: product.nameHi }),
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
              children: product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3 h-3 mr-1" }),
                " Add"
              ] }) : "Out of stock"
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-muted/20 flex items-center justify-center aspect-square", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductPackageSVG,
            {
              packagingKey: product.imageUrl,
              productName: product.nameEn,
              size: "md",
              className: "w-full h-full"
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full", children: [
            discount,
            "% OFF"
          ] }),
          !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/60 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card text-muted-foreground text-xs font-semibold px-3 py-1 rounded-full border border-border", children: "Out of Stock" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground leading-snug line-clamp-1", children: product.nameEn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-0.5", children: product.nameHi }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold mt-0.5", children: product.brand ?? "Yadav Dairy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-0.5", children: product.packagingType }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-2", children: qty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { className: "flex items-center justify-between bg-primary/10 rounded-lg px-2 py-1 border-0 p-0 m-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-primary font-bold text-lg w-7 h-7 flex items-center justify-center hover:bg-primary/20 rounded-full transition-colors",
                onClick: handleDecrement,
                onKeyUp: (e) => e.key === "Enter" && handleDecrement(e),
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
                onKeyUp: (e) => e.key === "Enter" && handleIncrement(e),
                "aria-label": "Increase quantity",
                "data-ocid": "qty-increment",
                children: "+"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "w-full btn-accent text-xs h-8 rounded-lg flex items-center justify-center gap-1 font-semibold disabled:opacity-50",
              onClick: handleAdd,
              onKeyUp: (e) => e.key === "Enter" && handleAdd(e),
              disabled: !product.inStock,
              "data-ocid": "add-to-cart-btn",
              children: [
                "ADD TO CART ",
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

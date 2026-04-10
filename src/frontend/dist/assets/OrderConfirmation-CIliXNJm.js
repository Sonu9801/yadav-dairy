import { c as createLucideIcon, o as useParams, H as useOrder, v as useCart, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, h as Badge, x as formatPrice } from "./index-S-wpKozw.js";
import { S as Separator } from "./separator-DXTHNz6N.js";
import { L as LoaderCircle, C as CreditCard } from "./loader-circle-BMO7pV_-.js";
import { m as motion } from "./proxy-WXI-p9_O.js";
import { C as CircleCheck } from "./circle-check-Dh5gFe4T.js";
import { C as CalendarDays } from "./calendar-days-uPH49ddg.js";
import { P as Package } from "./package-okqL4Ge3.js";
import { M as MapPin } from "./map-pin-DlyRXPYB.js";
import { A as ArrowRight } from "./arrow-right-BJLk-6w2.js";
import "./index-C15YK7Bm.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode);
const paymentLabel = {
  cashOnDelivery: "💵 Cash on Delivery",
  upi: "📱 UPI",
  card: "💳 Credit / Debit Card",
  netBanking: "🏦 Net Banking"
};
function getEstimatedDelivery() {
  const today = /* @__PURE__ */ new Date();
  let added = 0;
  const d = new Date(today);
  while (added < 4) {
    d.setDate(d.getDate() + 1);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) added++;
  }
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}
function OrderConfirmation() {
  const params = useParams({ from: "/order-confirmation/$id" });
  const orderId = params.id ? BigInt(params.id) : void 0;
  const { data: order, isLoading } = useOrder(orderId);
  const { clearCart } = useCart();
  const cleared = reactExports.useRef(false);
  const estimatedDate = getEstimatedDelivery();
  reactExports.useEffect(() => {
    if (!cleared.current) {
      clearCart();
      cleared.current = true;
    }
  }, [clearCart]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-primary mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading your order..." })
    ] }) });
  }
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Order not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-accent", children: "Continue Shopping" }) })
    ] });
  }
  const paymentMethod = Object.keys(order.paymentMethod)[0] ?? "cashOnDelivery";
  const paymentDisplay = paymentLabel[paymentMethod] ?? paymentMethod;
  const subtotal = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    BigInt(0)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-screen bg-background",
      "data-ocid": "order-confirmation-page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { type: "spring", stiffness: 260, damping: 20 },
            className: "text-center mb-8",
            "data-ocid": "order-success-header",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-24 h-24 mx-auto mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0.6, opacity: 0 },
                    animate: { scale: 1.4, opacity: 0 },
                    transition: {
                      duration: 1.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeOut",
                      delay: 0.3
                    },
                    className: "absolute inset-0 rounded-full bg-primary/20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: {
                      delay: 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 18
                    },
                    className: "w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { pathLength: 0 },
                        animate: { pathLength: 1 },
                        transition: { delay: 0.3, duration: 0.6 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CircleCheck,
                          {
                            className: "w-12 h-12 text-primary",
                            strokeWidth: 2
                          }
                        )
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.h1,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.25 },
                  className: "font-display text-3xl font-bold text-foreground mb-1",
                  children: "Order Placed! 🎉"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.35 },
                  className: "text-muted-foreground text-sm",
                  children: "Thank you! Your fresh Yadav Dairy products are on their way."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.45 },
                  className: "inline-flex items-center gap-2 bg-muted rounded-xl px-4 py-2 mt-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Order ID" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "secondary",
                        className: "font-mono text-xs",
                        "data-ocid": "order-id-badge",
                        children: [
                          "#YD-",
                          order.id.toString().padStart(6, "0")
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.45 },
            className: "bg-accent/8 border border-accent/20 rounded-2xl p-4 flex items-center gap-3 mb-4",
            "data-ocid": "order-delivery-estimate",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium", children: "Estimated Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: estimatedDate })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-primary/10 text-primary hover:bg-primary/10 border-0 text-xs", children: "3–5 Days" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5 },
            className: "bg-card rounded-2xl border border-border p-5 shadow-sm mb-4",
            "data-ocid": "order-items-summary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-sm", children: [
                  order.items.length,
                  " ",
                  order.items.length === 1 ? "Item" : "Items",
                  " ",
                  "Ordered"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: order.items.map((item, i) => {
                var _a;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between text-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0", children: Number(item.quantity) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground font-medium", children: item.productName })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent ml-3 flex-shrink-0", children: formatPrice(item.price * item.quantity) })
                    ]
                  },
                  `${((_a = item.productId) == null ? void 0 : _a.toString()) ?? i}-${item.productName}`
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(subtotal) })
                ] }),
                order.totalAmount > subtotal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Delivery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(order.totalAmount - subtotal) })
                ] }),
                order.totalAmount <= subtotal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Delivery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "FREE" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-base", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Paid" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: formatPrice(order.totalAmount) })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.55 },
            className: "bg-card rounded-2xl border border-border p-5 shadow-sm mb-4",
            "data-ocid": "order-address-summary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm", children: "Delivery Address" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm space-y-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.shippingAddress }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.6 },
            className: "bg-card rounded-2xl border border-border p-5 shadow-sm mb-6",
            "data-ocid": "order-payment-summary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4 text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sm", children: "Payment" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: paymentDisplay })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/10 text-xs border-0", children: "✓ Confirmed" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.7 },
            className: "space-y-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full h-12 text-base font-semibold btn-accent rounded-xl gap-2 group",
                  "data-ocid": "order-continue-shopping-btn",
                  children: [
                    "Continue Shopping",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/profile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "w-full h-12 text-base font-semibold rounded-xl gap-2",
                  "data-ocid": "order-view-orders-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4" }),
                    "View My Orders"
                  ]
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
}
export {
  OrderConfirmation as default
};

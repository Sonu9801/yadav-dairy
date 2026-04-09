import { q as useParams, x as useOrder, m as useCart, r as reactExports, j as jsxRuntimeExports, L as Link, B as Badge, o as formatPrice } from "./index-Bpk1okSM.js";
import { B as Button } from "./button-DQ9l_krO.js";
import { S as Separator } from "./separator-Ch6g5gGG.js";
import { L as LoaderCircle, M as MapPin, C as CreditCard } from "./map-pin-CeY-bVut.js";
import { m as motion } from "./proxy-Z9YAIUas.js";
import { C as CircleCheck } from "./circle-check-B-AqQP6l.js";
import { P as Package } from "./package-B1wa1saF.js";
import { A as ArrowRight } from "./arrow-right-CHq-WD6J.js";
import "./index-IEHbvEcb.js";
const paymentLabel = {
  cashOnDelivery: "Cash on Delivery",
  upi: "UPI",
  card: "Credit / Debit Card",
  netBanking: "Net Banking"
};
function OrderConfirmation() {
  const params = useParams({ from: "/order-confirmation/$id" });
  const orderId = params.id ? BigInt(params.id) : void 0;
  const { data: order, isLoading } = useOrder(orderId);
  const { clearCart } = useCart();
  const cleared = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!cleared.current) {
      clearCart();
      cleared.current = true;
    }
  }, [clearCart]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60vh] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-8 h-8 animate-spin text-primary" }) });
  }
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Order not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-accent", children: "Continue Shopping" }) })
    ] });
  }
  const paymentMethod = Object.keys(order.paymentMethod)[0] ?? "cashOnDelivery";
  const paymentDisplay = paymentLabel[paymentMethod] ?? paymentMethod;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { type: "spring", stiffness: 260, damping: 20 },
        className: "text-center mb-8",
        "data-ocid": "order-success-header",
        children: [
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
              className: "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-primary", strokeWidth: 2 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.25 },
              className: "font-display text-2xl font-bold text-foreground mb-1",
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
              children: "Thank you! Your fresh dairy products are on their way."
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
                      "#",
                      order.id.toString()
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
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0", children: Number(item.quantity) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-foreground", children: item.productName })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(order.totalAmount) })
            ] }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: order.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.customerPhone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.address }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              order.city,
              " — ",
              order.pincode
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
        transition: { delay: 0.6 },
        className: "bg-card rounded-2xl border border-border p-5 shadow-sm mb-8",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/10 text-xs border-0", children: "Confirmed" })
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
              className: "w-full h-12 text-base font-semibold btn-accent rounded-xl gap-2",
              "data-ocid": "order-continue-shopping-btn",
              children: [
                "Continue Shopping",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              className: "w-full text-sm text-muted-foreground",
              children: "Back to Home"
            }
          ) })
        ]
      }
    )
  ] }) });
}
export {
  OrderConfirmation as default
};

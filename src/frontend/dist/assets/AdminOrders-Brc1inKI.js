import { c as createLucideIcon, g as useActor, C as useQueryClient, y as useOrders, r as reactExports, D as useMutation, j as jsxRuntimeExports, S as Skeleton, z as formatRelativeTime, o as formatPrice, B as Badge, l as createActor } from "./index-Bpk1okSM.js";
import { u as ue } from "./index-CATVIhQS.js";
import { O as OrderStatus } from "./backend.d-yYFOhPBR.js";
import { A as AdminLayout, S as ShoppingBag } from "./AdminLayout-sSyTcQEw.js";
import { B as Button } from "./button-DQ9l_krO.js";
import "./chevron-right-DKfyF6tD.js";
import "./user-qpcW7YQj.js";
import "./package-B1wa1saF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode);
const STATUS_OPTIONS = [
  OrderStatus.pending,
  OrderStatus.confirmed,
  OrderStatus.processing,
  OrderStatus.shipped,
  OrderStatus.delivered,
  OrderStatus.cancelled
];
const STATUS_COLORS = {
  [OrderStatus.pending]: "bg-muted text-muted-foreground border-border",
  [OrderStatus.confirmed]: "bg-primary/10 text-primary border-primary/20",
  [OrderStatus.processing]: "bg-accent/10 text-accent-foreground border-accent/20",
  [OrderStatus.shipped]: "bg-secondary text-secondary-foreground border-border",
  [OrderStatus.delivered]: "bg-primary/10 text-primary border-primary/20",
  [OrderStatus.cancelled]: "bg-destructive/10 text-destructive border-destructive/20"
};
const PAYMENT_LABELS = {
  cashOnDelivery: "Cash on Delivery",
  upi: "UPI",
  card: "Card",
  netBanking: "Net Banking"
};
function AdminOrders() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const { data: orders, isLoading } = useOrders();
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const [expandedOrderId, setExpandedOrderId] = reactExports.useState(null);
  const filteredOrders = orders ? filterStatus === "all" ? [...orders].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)) : orders.filter((o) => o.status === filterStatus).sort((a, b) => Number(b.createdAt) - Number(a.createdAt)) : [];
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateOrderStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      ue.success("Order status updated");
    },
    onError: (e) => ue.error(`Failed: ${e.message}`)
  });
  function toggleExpand(orderId) {
    setExpandedOrderId((prev) => prev === orderId ? null : orderId);
  }
  const statusCounts = orders ? STATUS_OPTIONS.reduce(
    (acc, s) => {
      acc[s] = orders.filter((o) => o.status === s).length;
      return acc;
    },
    {}
  ) : {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AdminLayout,
    {
      title: "Orders",
      subtitle: `${(orders == null ? void 0 : orders.length) ?? 0} total orders`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 overflow-x-auto pb-1 mb-5 no-scrollbar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "filter-all-orders",
              variant: filterStatus === "all" ? "default" : "outline",
              size: "sm",
              onClick: () => setFilterStatus("all"),
              className: "shrink-0",
              children: [
                "All (",
                (orders == null ? void 0 : orders.length) ?? 0,
                ")"
              ]
            }
          ),
          STATUS_OPTIONS.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": `filter-${status}-orders`,
              variant: filterStatus === status ? "default" : "outline",
              size: "sm",
              onClick: () => setFilterStatus(status),
              className: "shrink-0 capitalize",
              children: [
                status,
                " (",
                statusCounts[status] ?? 0,
                ")"
              ]
            },
            status
          ))
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }, i)) }) : filteredOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "orders-empty-state",
            className: "bg-card border border-border rounded-xl p-12 text-center text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "No orders found" }),
              filterStatus !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-1", children: [
                "No ",
                filterStatus,
                " orders"
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredOrders.map((order) => {
          const orderId = order.id.toString();
          const isExpanded = expandedOrderId === orderId;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "order-row",
              className: "bg-card border border-border rounded-xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "order-expand-btn",
                      onClick: () => toggleExpand(orderId),
                      className: "w-7 h-7 rounded-md flex items-center justify-center hover:bg-muted transition-colors shrink-0",
                      "aria-label": isExpanded ? "Collapse order" : "Expand order",
                      children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: order.customerName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground hidden sm:block", children: order.customerPhone }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground hidden md:block", children: order.city })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "#",
                        orderId.slice(-6),
                        " ·",
                        " ",
                        formatRelativeTime(order.createdAt)
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground hidden sm:inline", children: [
                        "·",
                        " ",
                        PAYMENT_LABELS[Object.keys(order.paymentMethod)[0] ?? ""] ?? Object.keys(order.paymentMethod)[0]
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "· ",
                        order.items.length,
                        " item",
                        order.items.length !== 1 ? "s" : ""
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm shrink-0 hidden sm:block", children: formatPrice(order.totalAmount) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      "data-ocid": "order-status-select",
                      value: order.status,
                      onChange: (e) => updateStatusMutation.mutate({
                        id: order.id,
                        status: e.target.value
                      }),
                      className: `text-xs font-medium px-2 py-1 rounded-full border capitalize cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${STATUS_COLORS[order.status] ?? "bg-muted text-muted-foreground border-border"}`,
                      children: STATUS_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "option",
                        {
                          value: s,
                          className: "bg-background text-foreground",
                          children: s.charAt(0).toUpperCase() + s.slice(1)
                        },
                        s
                      ))
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:hidden px-4 pb-2 flex justify-between items-center border-t border-border pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: PAYMENT_LABELS[Object.keys(order.paymentMethod)[0] ?? ""] ?? Object.keys(order.paymentMethod)[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm", children: formatPrice(order.totalAmount) })
                ] }),
                isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-muted/20 px-4 py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1", children: "Customer Details" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground", children: order.customerName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: order.customerPhone }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1 text-xs", children: [
                        order.address,
                        ", ",
                        order.city,
                        " — ",
                        order.pincode
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1", children: "Payment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: PAYMENT_LABELS[Object.keys(order.paymentMethod)[0] ?? ""] ?? Object.keys(order.paymentMethod)[0] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2", children: "Order Items" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": "order-item-row",
                      className: "flex items-center justify-between gap-3 bg-background rounded-lg px-3 py-2 border border-border",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: item.productName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                            "Qty: ",
                            item.quantity.toString(),
                            " ×",
                            " ",
                            formatPrice(item.price)
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground shrink-0", children: formatPrice(
                          BigInt(
                            Number(item.price) * Number(item.quantity)
                          )
                        ) })
                      ]
                    },
                    `${item.productId}-${idx}`
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mt-3 pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Total: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-base", children: formatPrice(order.totalAmount) })
                  ] }) })
                ] })
              ]
            },
            orderId
          );
        }) })
      ]
    }
  );
}
export {
  AdminOrders as default
};

import { c as createLucideIcon, h as useProducts, u as useCategories, y as useOrders, o as formatPrice, j as jsxRuntimeExports, L as Link, S as Skeleton, z as formatRelativeTime } from "./index-Bpk1okSM.js";
import { O as OrderStatus } from "./backend.d-yYFOhPBR.js";
import { L as Layers, S as ShoppingBag, A as AdminLayout } from "./AdminLayout-sSyTcQEw.js";
import { P as Package } from "./package-B1wa1saF.js";
import "./button-DQ9l_krO.js";
import "./chevron-right-DKfyF6tD.js";
import "./user-qpcW7YQj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const STATUS_COLORS = {
  [OrderStatus.pending]: "bg-muted text-muted-foreground",
  [OrderStatus.confirmed]: "bg-primary/10 text-primary",
  [OrderStatus.processing]: "bg-accent/10 text-accent-foreground",
  [OrderStatus.shipped]: "bg-secondary text-secondary-foreground",
  [OrderStatus.delivered]: "bg-primary/10 text-primary",
  [OrderStatus.cancelled]: "bg-destructive/10 text-destructive"
};
function Admin() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: orders, isLoading: ordersLoading } = useOrders();
  const totalRevenue = orders ? orders.reduce((sum, o) => sum + Number(o.totalAmount), 0) : 0;
  const recentOrders = orders ? [...orders].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)).slice(0, 5) : [];
  const stats = [
    {
      label: "Total Products",
      value: (products == null ? void 0 : products.length) ?? 0,
      icon: Package,
      color: "text-primary",
      bg: "bg-primary/10",
      loading: productsLoading,
      link: "/admin/products"
    },
    {
      label: "Categories",
      value: (categories == null ? void 0 : categories.length) ?? 0,
      icon: Layers,
      color: "text-accent",
      bg: "bg-accent/10",
      loading: categoriesLoading,
      link: "/admin/categories"
    },
    {
      label: "Total Orders",
      value: (orders == null ? void 0 : orders.length) ?? 0,
      icon: ShoppingBag,
      color: "text-chart-3",
      bg: "bg-chart-3/10",
      loading: ordersLoading,
      link: "/admin/orders"
    },
    {
      label: "Revenue",
      value: formatPrice(BigInt(Math.round(totalRevenue))),
      icon: TrendingUp,
      color: "text-chart-4",
      bg: "bg-chart-4/10",
      loading: ordersLoading,
      link: "/admin/orders"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AdminLayout,
    {
      title: "Dashboard",
      subtitle: "Welcome to the Yadav Dairy admin panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: stats.map(({ label, value, icon: Icon, color, bg, loading, link }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: link,
            "data-ocid": `stat-card-${label.toLowerCase().replace(/\s+/g, "-")}`,
            className: "bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-smooth group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${color}` })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: label }),
                loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-16 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: String(value) })
              ] })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "Recent Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/admin/orders",
                className: "text-sm text-primary hover:underline",
                children: "View all"
              }
            )
          ] }),
          ordersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full" }, i)) }) : recentOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "orders-empty-state",
              className: "p-12 text-center text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-10 h-10 mx-auto mb-3 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No orders yet" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "recent-order-row",
              className: "px-5 py-3 flex items-center justify-between gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: order.customerName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    formatRelativeTime(order.createdAt),
                    " · ",
                    order.city
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[order.status] ?? "bg-muted text-muted-foreground"}`,
                      children: order.status
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: formatPrice(order.totalAmount) })
                ] })
              ]
            },
            order.id.toString()
          )) })
        ] })
      ]
    }
  );
}
export {
  Admin as default
};

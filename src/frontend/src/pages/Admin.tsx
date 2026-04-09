import { Link } from "@tanstack/react-router";
import { Layers, Package, ShoppingBag, TrendingUp } from "lucide-react";
import { OrderStatus } from "../backend.d";
import AdminLayout from "../components/admin/AdminLayout";
import { Skeleton } from "../components/ui/skeleton";
import { useCategories, useOrders, useProducts } from "../hooks/use-backend";
import { formatPrice, formatRelativeTime } from "../lib/utils";

const STATUS_COLORS: Record<string, string> = {
  [OrderStatus.pending]: "bg-muted text-muted-foreground",
  [OrderStatus.confirmed]: "bg-primary/10 text-primary",
  [OrderStatus.processing]: "bg-accent/10 text-accent-foreground",
  [OrderStatus.shipped]: "bg-secondary text-secondary-foreground",
  [OrderStatus.delivered]: "bg-primary/10 text-primary",
  [OrderStatus.cancelled]: "bg-destructive/10 text-destructive",
};

export default function Admin() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: orders, isLoading: ordersLoading } = useOrders();

  const totalRevenue = orders
    ? orders.reduce((sum, o) => sum + Number(o.totalAmount), 0)
    : 0;

  const recentOrders = orders
    ? [...orders]
        .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
        .slice(0, 5)
    : [];

  const stats = [
    {
      label: "Total Products",
      value: products?.length ?? 0,
      icon: Package,
      color: "text-primary",
      bg: "bg-primary/10",
      loading: productsLoading,
      link: "/admin/products",
    },
    {
      label: "Categories",
      value: categories?.length ?? 0,
      icon: Layers,
      color: "text-accent",
      bg: "bg-accent/10",
      loading: categoriesLoading,
      link: "/admin/categories",
    },
    {
      label: "Total Orders",
      value: orders?.length ?? 0,
      icon: ShoppingBag,
      color: "text-chart-3",
      bg: "bg-chart-3/10",
      loading: ordersLoading,
      link: "/admin/orders",
    },
    {
      label: "Revenue",
      value: formatPrice(BigInt(Math.round(totalRevenue))),
      icon: TrendingUp,
      color: "text-chart-4",
      bg: "bg-chart-4/10",
      loading: ordersLoading,
      link: "/admin/orders",
    },
  ];

  return (
    <AdminLayout
      title="Dashboard"
      subtitle="Welcome to the Yadav Dairy admin panel"
    >
      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon, color, bg, loading, link }) => (
          <Link
            key={label}
            to={link}
            data-ocid={`stat-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-smooth group"
          >
            <div
              className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}
            >
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground truncate">{label}</p>
              {loading ? (
                <Skeleton className="h-6 w-16 mt-1" />
              ) : (
                <p className="text-xl font-display font-bold text-foreground">
                  {String(value)}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h2 className="font-display font-semibold text-foreground">
            Recent Orders
          </h2>
          <Link
            to="/admin/orders"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>

        {ordersLoading ? (
          <div className="p-5 space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-14 w-full" />
            ))}
          </div>
        ) : recentOrders.length === 0 ? (
          <div
            data-ocid="orders-empty-state"
            className="p-12 text-center text-muted-foreground"
          >
            <ShoppingBag className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>No orders yet</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {recentOrders.map((order) => (
              <div
                key={order.id.toString()}
                data-ocid="recent-order-row"
                className="px-5 py-3 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {order.customerName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatRelativeTime(order.createdAt)} · {order.city}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${STATUS_COLORS[order.status] ?? "bg-muted text-muted-foreground"}`}
                  >
                    {order.status}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {formatPrice(order.totalAmount)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

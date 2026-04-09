import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronDown, ChevronUp, Filter, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { type Order, OrderStatus } from "../backend.d";
import AdminLayout from "../components/admin/AdminLayout";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import { useOrders } from "../hooks/use-backend";
import { formatPrice, formatRelativeTime } from "../lib/utils";

const STATUS_OPTIONS = [
  OrderStatus.pending,
  OrderStatus.confirmed,
  OrderStatus.processing,
  OrderStatus.shipped,
  OrderStatus.delivered,
  OrderStatus.cancelled,
];

const STATUS_COLORS: Record<string, string> = {
  [OrderStatus.pending]: "bg-muted text-muted-foreground border-border",
  [OrderStatus.confirmed]: "bg-primary/10 text-primary border-primary/20",
  [OrderStatus.processing]:
    "bg-accent/10 text-accent-foreground border-accent/20",
  [OrderStatus.shipped]: "bg-secondary text-secondary-foreground border-border",
  [OrderStatus.delivered]: "bg-primary/10 text-primary border-primary/20",
  [OrderStatus.cancelled]:
    "bg-destructive/10 text-destructive border-destructive/20",
};

const PAYMENT_LABELS: Record<string, string> = {
  cashOnDelivery: "Cash on Delivery",
  upi: "UPI",
  card: "Card",
  netBanking: "Net Banking",
};

export default function AdminOrders() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  const { data: orders, isLoading } = useOrders();

  const [filterStatus, setFilterStatus] = useState<OrderStatus | "all">("all");
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const filteredOrders = orders
    ? filterStatus === "all"
      ? [...orders].sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
      : orders
          .filter((o) => o.status === filterStatus)
          .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
    : [];

  const updateStatusMutation = useMutation<
    Order | null,
    Error,
    { id: bigint; status: OrderStatus }
  >({
    mutationFn: async ({ id, status }) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.updateOrderStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Order status updated");
    },
    onError: (e) => toast.error(`Failed: ${e.message}`),
  });

  function toggleExpand(orderId: string) {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  }

  const statusCounts = orders
    ? STATUS_OPTIONS.reduce(
        (acc, s) => {
          acc[s] = orders.filter((o) => o.status === s).length;
          return acc;
        },
        {} as Record<string, number>,
      )
    : {};

  return (
    <AdminLayout
      title="Orders"
      subtitle={`${orders?.length ?? 0} total orders`}
    >
      {/* Filter tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-5 no-scrollbar">
        <Button
          data-ocid="filter-all-orders"
          variant={filterStatus === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilterStatus("all")}
          className="shrink-0"
        >
          All ({orders?.length ?? 0})
        </Button>
        {STATUS_OPTIONS.map((status) => (
          <Button
            key={status}
            data-ocid={`filter-${status}-orders`}
            variant={filterStatus === status ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterStatus(status)}
            className="shrink-0 capitalize"
          >
            {status} ({statusCounts[status] ?? 0})
          </Button>
        ))}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full" />
          ))}
        </div>
      ) : filteredOrders.length === 0 ? (
        <div
          data-ocid="orders-empty-state"
          className="bg-card border border-border rounded-xl p-12 text-center text-muted-foreground"
        >
          <ShoppingBag className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">No orders found</p>
          {filterStatus !== "all" && (
            <p className="text-sm mt-1">No {filterStatus} orders</p>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredOrders.map((order) => {
            const orderId = order.id.toString();
            const isExpanded = expandedOrderId === orderId;

            return (
              <div
                key={orderId}
                data-ocid="order-row"
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                {/* Order header row */}
                <div className="px-4 py-3 flex items-center gap-3">
                  {/* Expand toggle */}
                  <button
                    type="button"
                    data-ocid="order-expand-btn"
                    onClick={() => toggleExpand(orderId)}
                    className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-muted transition-colors shrink-0"
                    aria-label={isExpanded ? "Collapse order" : "Expand order"}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>

                  {/* Order info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                      <p className="font-medium text-foreground text-sm">
                        {order.customerName}
                      </p>
                      <p className="text-xs text-muted-foreground hidden sm:block">
                        {order.customerPhone}
                      </p>
                      <p className="text-xs text-muted-foreground hidden md:block">
                        {order.city}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <span className="text-xs text-muted-foreground">
                        #{orderId.slice(-6)} ·{" "}
                        {formatRelativeTime(order.createdAt)}
                      </span>
                      <span className="text-xs text-muted-foreground hidden sm:inline">
                        ·{" "}
                        {PAYMENT_LABELS[
                          Object.keys(order.paymentMethod)[0] ?? ""
                        ] ?? Object.keys(order.paymentMethod)[0]}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        · {order.items.length} item
                        {order.items.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <p className="font-semibold text-foreground text-sm shrink-0 hidden sm:block">
                    {formatPrice(order.totalAmount)}
                  </p>

                  {/* Status dropdown */}
                  <div className="shrink-0">
                    <select
                      data-ocid="order-status-select"
                      value={order.status}
                      onChange={(e) =>
                        updateStatusMutation.mutate({
                          id: order.id,
                          status: e.target.value as OrderStatus,
                        })
                      }
                      className={`text-xs font-medium px-2 py-1 rounded-full border capitalize cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${STATUS_COLORS[order.status] ?? "bg-muted text-muted-foreground border-border"}`}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option
                          key={s}
                          value={s}
                          className="bg-background text-foreground"
                        >
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mobile: amount */}
                <div className="sm:hidden px-4 pb-2 flex justify-between items-center border-t border-border pt-2">
                  <span className="text-xs text-muted-foreground">
                    {PAYMENT_LABELS[
                      Object.keys(order.paymentMethod)[0] ?? ""
                    ] ?? Object.keys(order.paymentMethod)[0]}
                  </span>
                  <span className="font-semibold text-sm">
                    {formatPrice(order.totalAmount)}
                  </span>
                </div>

                {/* Expanded order details */}
                {isExpanded && (
                  <div className="border-t border-border bg-muted/20 px-4 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                          Customer Details
                        </p>
                        <p className="text-foreground">{order.customerName}</p>
                        <p className="text-muted-foreground">
                          {order.customerPhone}
                        </p>
                        <p className="text-muted-foreground mt-1 text-xs">
                          {order.address}, {order.city} — {order.pincode}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                          Payment
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {PAYMENT_LABELS[
                            Object.keys(order.paymentMethod)[0] ?? ""
                          ] ?? Object.keys(order.paymentMethod)[0]}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Order Items
                    </p>
                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div
                          key={`${item.productId}-${idx}`}
                          data-ocid="order-item-row"
                          className="flex items-center justify-between gap-3 bg-background rounded-lg px-3 py-2 border border-border"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {item.productName}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity.toString()} ×{" "}
                              {formatPrice(item.price)}
                            </p>
                          </div>
                          <p className="text-sm font-semibold text-foreground shrink-0">
                            {formatPrice(
                              BigInt(
                                Number(item.price) * Number(item.quantity),
                              ),
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-3 pt-3 border-t border-border">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Total: </span>
                        <span className="font-bold text-foreground text-base">
                          {formatPrice(order.totalAmount)}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </AdminLayout>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Loader2,
  MapPin,
  Package,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useOrder } from "../hooks/use-backend";
import { useCart } from "../hooks/use-cart";
import { formatPrice } from "../lib/utils";

const paymentLabel: Record<string, string> = {
  cashOnDelivery: "Cash on Delivery",
  upi: "UPI",
  card: "Credit / Debit Card",
  netBanking: "Net Banking",
};

export default function OrderConfirmation() {
  const params = useParams({ from: "/order-confirmation/$id" });
  const orderId = params.id ? BigInt(params.id) : undefined;
  const { data: order, isLoading } = useOrder(orderId);
  const { clearCart } = useCart();
  const cleared = useRef(false);

  useEffect(() => {
    if (!cleared.current) {
      clearCart();
      cleared.current = true;
    }
  }, [clearCart]);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <p className="text-muted-foreground mb-4">Order not found.</p>
        <Link to="/products">
          <Button className="btn-accent">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  const paymentMethod = Object.keys(order.paymentMethod)[0] ?? "cashOnDelivery";
  const paymentDisplay = paymentLabel[paymentMethod] ?? paymentMethod;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-10">
        {/* Success Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-center mb-8"
          data-ocid="order-success-header"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle2 className="w-10 h-10 text-primary" strokeWidth={2} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-display text-2xl font-bold text-foreground mb-1"
          >
            Order Placed! 🎉
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-muted-foreground text-sm"
          >
            Thank you! Your fresh dairy products are on their way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="inline-flex items-center gap-2 bg-muted rounded-xl px-4 py-2 mt-4"
          >
            <span className="text-xs text-muted-foreground">Order ID</span>
            <Badge
              variant="secondary"
              className="font-mono text-xs"
              data-ocid="order-id-badge"
            >
              #{order.id.toString()}
            </Badge>
          </motion.div>
        </motion.div>

        {/* Order Items */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-2xl border border-border p-5 shadow-sm mb-4"
          data-ocid="order-items-summary"
        >
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-4 h-4 text-primary" />
            <h2 className="font-display font-bold text-sm">
              {order.items.length} {order.items.length === 1 ? "Item" : "Items"}{" "}
              Ordered
            </h2>
          </div>
          <div className="space-y-3">
            {order.items.map((item, i) => (
              <div
                key={`${item.productId?.toString() ?? i}-${item.productName}`}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {Number(item.quantity)}
                  </span>
                  <span className="truncate text-foreground">
                    {item.productName}
                  </span>
                </div>
                <span className="font-semibold text-accent ml-3 flex-shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(order.totalAmount)}</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Total Paid</span>
              <span className="text-accent">
                {formatPrice(order.totalAmount)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Delivery Address */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-card rounded-2xl border border-border p-5 shadow-sm mb-4"
          data-ocid="order-address-summary"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-primary" />
            <h2 className="font-display font-bold text-sm">Delivery Address</h2>
          </div>
          <div className="text-sm space-y-0.5">
            <p className="font-semibold text-foreground">
              {order.customerName}
            </p>
            <p className="text-muted-foreground">{order.customerPhone}</p>
            <p className="text-muted-foreground">{order.address}</p>
            <p className="text-muted-foreground">
              {order.city} — {order.pincode}
            </p>
          </div>
        </motion.div>

        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-2xl border border-border p-5 shadow-sm mb-8"
          data-ocid="order-payment-summary"
        >
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-4 h-4 text-accent" />
            <h2 className="font-display font-bold text-sm">Payment</h2>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Method</span>
            <Badge variant="outline" className="text-xs">
              {paymentDisplay}
            </Badge>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 text-xs border-0">
              Confirmed
            </Badge>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3"
        >
          <Link to="/products">
            <Button
              className="w-full h-12 text-base font-semibold btn-accent rounded-xl gap-2"
              data-ocid="order-continue-shopping-btn"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="ghost"
              className="w-full text-sm text-muted-foreground"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

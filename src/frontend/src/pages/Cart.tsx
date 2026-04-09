import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ProductPackageSVG from "../components/products/ProductPackageSVG";
import { useCart } from "../hooks/use-cart";
import { formatPrice } from "../lib/utils";

export default function Cart() {
  const { items, updateQuantity, removeItem, cartTotal } = useCart();

  const deliveryFee =
    items.length > 0 && cartTotal < BigInt(500) ? BigInt(40) : BigInt(0);
  const grandTotal = cartTotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div
        className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center"
        data-ocid="cart-empty-state"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <ShoppingCart
              className="w-10 h-10 text-muted-foreground"
              strokeWidth={1.5}
            />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xs">
            Looks like you haven't added any dairy products yet. Explore our
            fresh collection!
          </p>
        </motion.div>
        <Link to="/products">
          <Button
            className="btn-accent gap-2 h-12 px-8 text-base"
            data-ocid="cart-explore-btn"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 lg:max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-2xl font-bold text-foreground">
            Your Cart
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3">
            <AnimatePresence initial={false}>
              {items.map((item, index) => (
                <motion.div
                  key={item.productId.toString()}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="bg-card rounded-2xl border border-border p-4 flex gap-4 shadow-sm"
                  data-ocid={`cart-item-${item.productId}`}
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-xl bg-muted flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <ProductPackageSVG
                      packagingKey={item.imageUrl}
                      productName={item.productName}
                      size="sm"
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight truncate">
                      {item.productName}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.productNameHi}
                    </p>
                    {item.packagingType && (
                      <Badge variant="secondary" className="mt-1 text-xs gap-1">
                        <Package className="w-3 h-3" />
                        {item.packagingType}
                      </Badge>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-accent text-base">
                        {formatPrice(item.price * BigInt(item.quantity))}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {formatPrice(item.price)} each
                      </span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-col items-end justify-between flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      aria-label={`Remove ${item.productName}`}
                      data-ocid={`cart-remove-${item.productId}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-muted rounded-xl p-1">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-lg bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth shadow-sm"
                        aria-label="Decrease quantity"
                        data-ocid={`cart-qty-minus-${item.productId}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <motion.span
                        key={item.quantity}
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        className="w-6 text-center font-bold text-sm"
                      >
                        {item.quantity}
                      </motion.span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-smooth shadow-sm"
                        aria-label="Increase quantity"
                        data-ocid={`cart-qty-plus-${item.productId}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 lg:mt-0"
          >
            <div
              className="bg-card rounded-2xl border border-border p-5 shadow-sm sticky top-24"
              data-ocid="cart-summary"
            >
              <h2 className="font-display font-bold text-lg mb-4">
                Order Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span
                    className={
                      deliveryFee === BigInt(0)
                        ? "text-primary font-medium"
                        : "font-medium"
                    }
                  >
                    {deliveryFee === BigInt(0)
                      ? "FREE"
                      : formatPrice(deliveryFee)}
                  </span>
                </div>
                {deliveryFee > BigInt(0) && (
                  <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2">
                    Add {formatPrice(BigInt(500) - cartTotal)} more for free
                    delivery
                  </p>
                )}
                <Separator />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span className="text-accent">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button
                  className="w-full mt-5 h-12 text-base font-semibold btn-accent gap-2 rounded-xl"
                  data-ocid="cart-checkout-btn"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/products">
                <Button
                  variant="ghost"
                  className="w-full mt-2 text-sm text-muted-foreground"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

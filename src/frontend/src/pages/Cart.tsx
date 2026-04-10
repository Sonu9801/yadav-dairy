import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Lock,
  Minus,
  Package,
  Plus,
  ShoppingBag,
  Trash2,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import ProductPackageSVG from "../components/products/ProductPackageSVG";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../hooks/use-cart";
import { formatPrice } from "../lib/utils";

function CartSkeleton() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 lg:max-w-5xl">
      <Skeleton className="h-7 w-32 mb-2 rounded-xl" />
      <Skeleton className="h-4 w-20 mb-6 rounded-lg" />
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2 space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-border p-4 flex gap-4"
            >
              <Skeleton className="w-20 h-20 rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4 rounded" />
                <Skeleton className="h-3 w-1/2 rounded" />
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-24 rounded" />
              </div>
              <div className="flex flex-col items-end gap-3">
                <Skeleton className="w-6 h-6 rounded" />
                <Skeleton className="w-24 h-8 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-0">
          <Skeleton className="h-52 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

function LoginPrompt({ onLogin }: { onLogin: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mt-4 bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center"
      data-ocid="cart-login-prompt"
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
        <Lock className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>
      <p className="font-semibold text-foreground text-sm mb-1">
        Login to Checkout
      </p>
      <p className="text-muted-foreground text-xs mb-4">
        Sign in with Internet Identity to securely place your order.
      </p>
      <Button
        onClick={onLogin}
        className="w-full h-11 text-sm font-semibold btn-accent gap-2 rounded-xl"
        data-ocid="cart-login-btn"
      >
        <User className="w-4 h-4" />
        Login to Continue
      </Button>
    </motion.div>
  );
}

export default function Cart() {
  const { items, updateQuantity, removeItem, cartTotal } = useCart();
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [hydrated, setHydrated] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Zustand persist hydration — show skeleton until store is ready
  useEffect(() => {
    const timer = setTimeout(() => setHydrated(true), 320);
    return () => clearTimeout(timer);
  }, []);

  const deliveryFee =
    items.length > 0 && cartTotal < BigInt(500) ? BigInt(40) : BigInt(0);
  const grandTotal = cartTotal + deliveryFee;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      setShowLoginPrompt(true);
      return;
    }
    navigate({ to: "/checkout" });
  };

  if (!hydrated) {
    return <CartSkeleton />;
  }

  if (items.length === 0) {
    return (
      <div
        className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center"
        data-ocid="cart-empty-state"
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-28 h-28 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5 shadow-inner">
            <ShoppingBag className="w-12 h-12 text-accent" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xs text-sm leading-relaxed">
            Looks like you haven't added any dairy products yet.
            <br />
            Explore our fresh collection!
          </p>
        </motion.div>
        <Link to="/products">
          <Button
            className="btn-accent gap-2 h-12 px-8 text-base"
            data-ocid="cart-explore-btn"
          >
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link to="/" className="mt-3">
          <Button variant="ghost" className="text-sm text-muted-foreground">
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-ocid="cart-page">
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
            {items.length} {items.length === 1 ? "item" : "items"} in your bag
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
                      productName={item.name}
                      size="sm"
                      className="w-16 h-16"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight truncate">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.nameHindi}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                      Yadav Dairy
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
                      className="text-muted-foreground hover:text-destructive transition-colors p-1 rounded-lg hover:bg-destructive/10"
                      aria-label={`Remove ${item.name}`}
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
                        data-ocid={`cart-qty-${item.productId}`}
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

            {/* Continue Shopping */}
            <div className="pt-2">
              <Link to="/products">
                <Button
                  variant="ghost"
                  className="text-sm text-muted-foreground gap-1.5 pl-0 hover:text-foreground"
                  data-ocid="cart-continue-link"
                >
                  ← Continue Shopping
                </Button>
              </Link>
            </div>
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
                  <span className="text-muted-foreground">
                    Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
                  </span>
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
                      ? "FREE 🎉"
                      : formatPrice(deliveryFee)}
                  </span>
                </div>
                {deliveryFee > BigInt(0) && (
                  <div className="bg-accent/8 border border-accent/20 rounded-xl px-3 py-2 text-xs text-accent font-medium">
                    Add {formatPrice(BigInt(500) - cartTotal)} more for free
                    delivery
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span className="text-accent">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full mt-5 h-12 text-base font-semibold btn-accent gap-2 rounded-xl group"
                data-ocid="cart-checkout-btn"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <AnimatePresence>
                {showLoginPrompt && !isAuthenticated && (
                  <LoginPrompt onLogin={login} />
                )}
              </AnimatePresence>

              <p className="text-center text-xs text-muted-foreground mt-3">
                🔒 Secure checkout. Free returns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

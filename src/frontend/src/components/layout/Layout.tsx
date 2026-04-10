import { useCart } from "@/hooks/use-cart";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const cartCount = useCart((s) => s.cartCount);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />

      {/* Floating cart button — mobile only */}
      {cartCount > 0 && (
        <Link
          to="/cart"
          className="fixed bottom-6 right-4 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevated animate-slide-up"
          aria-label={`Cart, ${cartCount} items`}
          data-ocid="floating-cart-btn"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full flex items-center justify-center">
            {cartCount > 9 ? "9+" : cartCount}
          </span>
        </Link>
      )}
    </div>
  );
}

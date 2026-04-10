import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchProducts } from "@/hooks/use-backend";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  LogIn,
  Mail,
  Milk,
  Moon,
  Phone,
  Search,
  Settings,
  ShoppingCart,
  Sun,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import ProductPackageSVG from "../products/ProductPackageSVG";

function SearchDropdown({
  term,
  onSelect,
}: {
  term: string;
  onSelect: () => void;
}) {
  const { data: results, isLoading } = useSearchProducts(term);
  if (!term.trim() || term.length < 2) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-elevated z-50 max-h-72 overflow-y-auto animate-slide-up">
      {isLoading && (
        <div className="p-3 text-muted-foreground text-sm">Searching...</div>
      )}
      {!isLoading && results?.length === 0 && (
        <div className="p-3 text-muted-foreground text-sm">
          No results found
        </div>
      )}
      {results?.map((p: Product) => (
        <Link
          key={p.id.toString()}
          to="/products/$id"
          params={{ id: p.id.toString() }}
          onClick={onSelect}
          className="flex items-center gap-3 px-3 py-2 hover:bg-muted transition-colors"
          data-ocid="search-result-item"
        >
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <ProductPackageSVG
              packagingKey={p.imageUrl}
              productName={p.name}
              size="sm"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium truncate">{p.name}</div>
            <div className="text-muted-foreground text-xs">
              {formatPrice(p.price)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const cartCount = useCart((s) => s.cartCount);
  const searchRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { isAuthenticated, login, clear, principal } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate({ to: "/products" });
      setShowSearch(false);
    }
  };

  const shortPrincipal = principal ? `${principal.slice(0, 6)}…` : "User";

  return (
    <header
      className={`sticky top-0 z-40 bg-card border-b border-border transition-smooth ${scrolled ? "shadow-elevated" : "shadow-card"}`}
      data-ocid="main-header"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Support bar — desktop only */}
        <div className="hidden md:flex items-center justify-end gap-4 py-1 text-xs text-muted-foreground border-b border-border/50">
          <a
            href="tel:+919801234567"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Phone className="w-3 h-3" />
            +91-9801234567
          </a>
          <a
            href="mailto:support@yadavdairy.com"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <Mail className="w-3 h-3" />
            support@yadavdairy.com
          </a>
        </div>

        {/* Top row: logo + actions */}
        <div className="flex items-center justify-between h-14 gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            data-ocid="header-logo"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Milk className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-base text-foreground leading-none">
                Yadav
              </div>
              <div className="font-display font-bold text-base text-primary leading-none">
                Dairy
              </div>
            </div>
            <span className="font-display font-bold text-base text-foreground sm:hidden">
              Yadav Dairy
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              data-ocid="dark-mode-toggle"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-muted-foreground" />
              )}
            </button>

            {/* Auth section */}
            {isAuthenticated ? (
              <div className="flex items-center gap-1">
                <Link
                  to="/profile"
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors max-w-[100px]"
                  data-ocid="user-profile-link"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium truncate hidden sm:block text-foreground">
                    {shortPrincipal}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={clear}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors px-1 hidden sm:block"
                  data-ocid="logout-btn"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={login}
                className="flex items-center gap-1.5 text-xs h-8"
                data-ocid="login-btn"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            )}

            <Link
              to="/admin"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Admin panel"
              data-ocid="admin-link"
            >
              <Settings className="w-4 h-4 text-muted-foreground" />
            </Link>

            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={`Cart, ${cartCount} items`}
              data-ocid="cart-icon"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs font-bold"
                  data-ocid="cart-badge"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>

        {/* Search row */}
        <div className="pb-3" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSearch(true);
              }}
              onFocus={() => setShowSearch(true)}
              placeholder="Search for fresh dairy, milk, paneer..."
              className="pl-9 pr-4 bg-muted border-0 rounded-full text-sm h-9"
              data-ocid="search-input"
            />
            {showSearch && searchTerm.length >= 2 && (
              <SearchDropdown
                term={searchTerm}
                onSelect={() => {
                  setSearchTerm("");
                  setShowSearch(false);
                }}
              />
            )}
          </form>
        </div>
      </div>
    </header>
  );
}

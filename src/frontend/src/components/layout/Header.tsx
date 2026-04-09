import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useSearchProducts } from "@/hooks/use-backend";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import { Milk, Search, Settings, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-elevated z-50 max-h-72 overflow-y-auto">
      {isLoading && <div className="p-3 text-subtle text-sm">Searching...</div>}
      {!isLoading && results?.length === 0 && (
        <div className="p-3 text-subtle text-sm">No results found</div>
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
          <img
            src={p.imageUrl}
            alt={p.nameEn}
            className="w-10 h-10 object-cover rounded"
          />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium truncate">{p.nameEn}</div>
            <div className="text-subtle text-xs">{formatPrice(p.price)}</div>
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

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate({ to: "/products" });
      setShowSearch(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-40 bg-card border-b border-border shadow-card"
      data-ocid="main-header"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Top row: logo + cart */}
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            className="flex items-center gap-2 flex-shrink-0"
            data-ocid="header-logo"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Milk className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base text-foreground leading-none">
                Yadav
              </div>
              <div className="font-display font-bold text-base text-primary leading-none">
                Dairy
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/admin"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Admin panel"
              data-ocid="admin-link"
            >
              <Settings className="w-5 h-5 text-muted-foreground" />
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
              placeholder="Search milk, paneer, and more..."
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

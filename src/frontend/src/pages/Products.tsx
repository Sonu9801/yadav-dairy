import ProductCard from "@/components/products/ProductCard";
import ProductPackageSVG from "@/components/products/ProductPackageSVG";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCategories,
  useFilterProducts,
  useProducts,
  useSearchProducts,
  useSubcategories,
} from "@/hooks/use-backend";
import { useSearch } from "@tanstack/react-router";
import {
  ChevronDown,
  Grid3X3,
  LayoutList,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Product } from "../types";

// ─── Constants ──────────────────────────────────────────────────────────────

const PACKAGING_TYPES = [
  "pouch",
  "bottle",
  "tetra-pack",
  "tub",
  "jar",
  "can",
  "box",
  "block",
];
const PRICE_MARKS = [100, 250, 500, 1000, 2000];
const SORT_OPTIONS = [
  { label: "Popular", value: "popular" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Rating: High to Low", value: "rating_desc" },
  { label: "Newest First", value: "newest" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

const PAGE_SIZE = 24;

// ─── Skeleton ────────────────────────────────────────────────────────────────

function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {Array.from({ length: count }, (_, i) => `sk${i}`).map((key) => (
        <div
          key={key}
          className="bg-card rounded-xl overflow-hidden border border-border"
        >
          <Skeleton className="aspect-square w-full" />
          <div className="p-3 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-8 w-full mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: count }, (_, i) => `sk${i}`).map((key) => (
        <div
          key={key}
          className="bg-card rounded-xl border border-border flex items-center gap-3 p-3"
        >
          <Skeleton className="w-20 h-20 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-1/4" />
          </div>
          <Skeleton className="w-20 h-8 rounded-lg flex-shrink-0" />
        </div>
      ))}
    </div>
  );
}

// ─── Autocomplete dropdown ────────────────────────────────────────────────────

interface SearchDropdownProps {
  results: Product[];
  isVisible: boolean;
  onSelect: (product: Product) => void;
  searchTerm: string;
}

function SearchDropdown({
  results,
  isVisible,
  onSelect,
  searchTerm,
}: SearchDropdownProps) {
  if (!isVisible || results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-xl shadow-lg z-50 overflow-hidden animate-slide-up">
      <div className="max-h-72 overflow-y-auto">
        {results.slice(0, 8).map((product) => (
          <button
            key={product.id.toString()}
            type="button"
            className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-muted/60 transition-colors text-left"
            onClick={() => onSelect(product)}
            data-ocid="search-autocomplete-item"
          >
            <div className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <ProductPackageSVG
                packagingKey={product.imageUrl}
                productName={product.name}
                size="sm"
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {highlightMatch(product.name, searchTerm)}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {product.nameHindi}
              </p>
            </div>
            <span className="text-sm font-semibold text-accent flex-shrink-0">
              ₹{Number(product.price)}
            </span>
          </button>
        ))}
      </div>
      {results.length > 8 && (
        <div className="px-3 py-2 border-t border-border bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            +{results.length - 8} more results
          </p>
        </div>
      )}
    </div>
  );
}

function highlightMatch(text: string, term: string): React.ReactNode {
  if (!term.trim()) return text;
  const idx = text.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-accent/30 text-foreground rounded-sm">
        {text.slice(idx, idx + term.length)}
      </mark>
      {text.slice(idx + term.length)}
    </>
  );
}

// ─── Filter panel ─────────────────────────────────────────────────────────────

interface FilterState {
  minPrice: number;
  maxPrice: number;
  packagingTypes: string[];
  dairyTypes: string[];
}

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (f: FilterState) => void;
  subcategoryOptions: string[];
  onClose?: () => void;
}

function FilterPanel({
  filters,
  onFiltersChange,
  subcategoryOptions,
  onClose,
}: FilterPanelProps) {
  const [local, setLocal] = useState<FilterState>(filters);

  // Sync local state when external filters reset
  useEffect(() => {
    setLocal(filters);
  }, [filters]);

  function togglePackaging(type: string) {
    setLocal((prev) => ({
      ...prev,
      packagingTypes: prev.packagingTypes.includes(type)
        ? prev.packagingTypes.filter((t) => t !== type)
        : [...prev.packagingTypes, type],
    }));
  }

  function toggleDairy(type: string) {
    setLocal((prev) => ({
      ...prev,
      dairyTypes: prev.dairyTypes.includes(type)
        ? prev.dairyTypes.filter((t) => t !== type)
        : [...prev.dairyTypes, type],
    }));
  }

  function applyFilters() {
    onFiltersChange(local);
    onClose?.();
  }

  function resetFilters() {
    const reset: FilterState = {
      minPrice: 0,
      maxPrice: 2000,
      packagingTypes: [],
      dairyTypes: [],
    };
    setLocal(reset);
    onFiltersChange(reset);
  }

  const hasChanges = JSON.stringify(local) !== JSON.stringify(filters);

  const activeCount =
    local.packagingTypes.length +
    local.dairyTypes.length +
    (local.maxPrice < 2000 || local.minPrice > 0 ? 1 : 0);

  return (
    <div className="flex flex-col h-full" data-ocid="filter-panel">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-accent" />
          <h3 className="font-display font-semibold text-foreground">
            Filters
          </h3>
          {activeCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <button
              type="button"
              className="text-xs text-muted-foreground hover:text-destructive transition-colors"
              onClick={resetFilters}
              data-ocid="reset-filters-btn"
            >
              Reset all
            </button>
          )}
          {onClose && (
            <button
              type="button"
              className="p-1 hover:bg-muted rounded-lg transition-colors"
              onClick={onClose}
              aria-label="Close filters"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Price Range */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Price Range
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground font-medium">
                ₹{local.minPrice}
              </span>
              <span className="text-foreground font-medium">
                ₹{local.maxPrice}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={2000}
              step={50}
              value={local.maxPrice}
              onChange={(e) =>
                setLocal((p) => ({ ...p, maxPrice: Number(e.target.value) }))
              }
              className="w-full h-2 accent-accent rounded-full cursor-pointer"
              aria-label="Max price"
              data-ocid="price-range-slider"
            />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {PRICE_MARKS.map((mark) => (
                <button
                  key={mark}
                  type="button"
                  onClick={() => setLocal((p) => ({ ...p, maxPrice: mark }))}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-smooth border ${
                    local.maxPrice === mark
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                  }`}
                >
                  ≤ ₹{mark}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Packaging Type */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Packaging Type
          </p>
          <div className="space-y-2">
            {PACKAGING_TYPES.map((type) => {
              const checked = local.packagingTypes.includes(type);
              const inputId = `packaging-${type}`;
              return (
                <label
                  key={type}
                  htmlFor={inputId}
                  className="flex items-center gap-3 cursor-pointer group"
                  data-ocid="packaging-checkbox"
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    checked={checked}
                    onChange={() => togglePackaging(type)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-smooth flex-shrink-0 pointer-events-none ${
                      checked
                        ? "bg-accent border-accent"
                        : "border-border group-hover:border-accent/60"
                    }`}
                    aria-hidden="true"
                  >
                    {checked && (
                      <svg
                        className="w-2.5 h-2.5 text-accent-foreground"
                        fill="none"
                        viewBox="0 0 12 12"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-foreground capitalize">
                    {type}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Dairy Type (subcategory) */}
        {subcategoryOptions.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Dairy Type
            </p>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {subcategoryOptions.map((sub) => {
                const checked = local.dairyTypes.includes(sub);
                const inputId = `dairy-${sub.replace(/\s+/g, "-").toLowerCase()}`;
                return (
                  <label
                    key={sub}
                    htmlFor={inputId}
                    className="flex items-center gap-3 cursor-pointer group"
                    data-ocid="dairy-type-checkbox"
                  >
                    <input
                      id={inputId}
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleDairy(sub)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-smooth flex-shrink-0 pointer-events-none ${
                        checked
                          ? "bg-accent border-accent"
                          : "border-border group-hover:border-accent/60"
                      }`}
                      aria-hidden="true"
                    >
                      {checked && (
                        <svg
                          className="w-2.5 h-2.5 text-accent-foreground"
                          fill="none"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-foreground">{sub}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border">
        <Button
          className="w-full btn-accent"
          onClick={applyFilters}
          data-ocid="apply-filters-btn"
          disabled={!hasChanges}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

// ─── Sort dropdown ────────────────────────────────────────────────────────────

interface SortDropdownProps {
  value: SortValue;
  onChange: (v: SortValue) => void;
}

function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = SORT_OPTIONS.find((o) => o.value === value);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative" data-ocid="sort-dropdown">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-muted transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        data-ocid="sort-toggle-btn"
      >
        <span className="text-muted-foreground text-xs mr-0.5">Sort:</span>
        <span className="font-medium">{current?.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-52 bg-popover border border-border rounded-xl shadow-lg z-30 overflow-hidden animate-slide-up">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                opt.value === value
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              data-ocid="sort-option"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Mobile bottom sheet for filters ─────────────────────────────────────────

interface MobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function MobileFilterSheet({
  isOpen,
  onClose,
  children,
}: MobileFilterSheetProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      data-ocid="mobile-filter-sheet"
    >
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl animate-slide-up">
        {children}
      </div>
    </div>
  );
}

// ─── Sort & filter products ────────────────────────────────────────────────────

function sortProducts(products: Product[], sort: SortValue): Product[] {
  const arr = [...products];
  switch (sort) {
    case "price_asc":
      return arr.sort((a, b) => Number(a.price) - Number(b.price));
    case "price_desc":
      return arr.sort((a, b) => Number(b.price) - Number(a.price));
    case "rating_desc":
      return arr.sort((a, b) => Number(b.rating) - Number(a.rating));
    case "newest":
      return arr.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    default:
      return arr;
  }
}

// product.subcategory is a string name — compare directly
function applyFrontendFilters(
  products: Product[],
  filters: FilterState,
): Product[] {
  return products.filter((p) => {
    const price = Number(p.price);
    if (filters.minPrice > 0 && price < filters.minPrice) return false;
    if (filters.maxPrice < 2000 && price > filters.maxPrice) return false;
    if (
      filters.packagingTypes.length > 0 &&
      !filters.packagingTypes.includes(p.packagingType)
    )
      return false;
    if (
      filters.dairyTypes.length > 0 &&
      !filters.dairyTypes.includes(p.subcategory)
    )
      return false;
    return true;
  });
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function Products() {
  const { category: categoryFromSearch } = useSearch({ from: "/products" });

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Category
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromSearch ?? "",
  );

  // Filters
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 2000,
    packagingTypes: [],
    dairyTypes: [],
  });

  // Sort
  const [sortBy, setSortBy] = useState<SortValue>("popular");

  // View
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter panels
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Pagination
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Close search dropdown on outside click
  useEffect(() => {
    function close(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // Data
  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: subcategories = [] } = useSubcategories();

  const hasBackendFilters = !!selectedCategory;

  const { data: allProducts = [], isLoading: allLoading } = useProducts();
  const { data: filteredByCategory = [], isLoading: catFilterLoading } =
    useFilterProducts(selectedCategory || null, null, null);
  const { data: searchResults = [], isLoading: searchLoading } =
    useSearchProducts(debouncedSearch);

  // Unique subcategory names for dairy type filter (from backend subcategories list)
  const subcategoryOptions = useMemo(
    () => [...new Set(subcategories.map((s) => s.name))].sort(),
    [subcategories],
  );

  // Derive base product list
  const baseProducts: Product[] = useMemo(() => {
    if (debouncedSearch.trim().length > 1) return searchResults;
    if (hasBackendFilters) return filteredByCategory;
    return allProducts;
  }, [
    debouncedSearch,
    searchResults,
    hasBackendFilters,
    filteredByCategory,
    allProducts,
  ]);

  const isLoading =
    debouncedSearch.trim().length > 1
      ? searchLoading
      : hasBackendFilters
        ? catFilterLoading
        : allLoading;

  // Apply frontend filters + sort
  const displayProducts = useMemo(
    () => sortProducts(applyFrontendFilters(baseProducts, filters), sortBy),
    [baseProducts, filters, sortBy],
  );

  // Reset pagination when results change
  const displayCount = displayProducts.length;
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — reset on count change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [displayCount]);

  // Paginated slice
  const pagedProducts = displayProducts.slice(0, visibleCount);
  const hasMore = visibleCount < displayProducts.length;

  // Active filter count badge
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory) count++;
    if (filters.maxPrice < 2000 || filters.minPrice > 0) count++;
    count += filters.packagingTypes.length;
    count += filters.dairyTypes.length;
    return count;
  }, [selectedCategory, filters]);

  const clearAllFilters = useCallback(() => {
    setSelectedCategory("");
    setSearchTerm("");
    setDebouncedSearch("");
    setFilters({
      minPrice: 0,
      maxPrice: 2000,
      packagingTypes: [],
      dairyTypes: [],
    });
    setSortBy("popular");
  }, []);

  const selectedCategoryName = useMemo(
    () => categories.find((c) => c.id.toString() === selectedCategory)?.name,
    [categories, selectedCategory],
  );

  function handleSearchSelect(product: Product) {
    setSearchTerm(product.name);
    setDebouncedSearch(product.name);
    setShowDropdown(false);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── Sticky search header ── */}
      <div className="sticky top-0 z-20 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            {/* Search with autocomplete */}
            <div ref={searchRef} className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder="Search milk, paneer, ghee and more..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() =>
                  searchTerm.trim().length > 1 && setShowDropdown(true)
                }
                className="pl-9 pr-8 h-10 bg-background border-input rounded-full text-sm"
                data-ocid="products-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => {
                    setSearchTerm("");
                    setDebouncedSearch("");
                    setShowDropdown(false);
                  }}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <SearchDropdown
                results={searchResults}
                isVisible={showDropdown && debouncedSearch.trim().length > 1}
                onSelect={handleSearchSelect}
                searchTerm={debouncedSearch}
              />
            </div>

            {/* Filter toggle (mobile) */}
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full flex-shrink-0 relative lg:hidden"
              onClick={() => setShowMobileFilters(true)}
              aria-label="Open filters"
              data-ocid="mobile-filter-toggle-btn"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* ── Category pills ── */}
      {!catLoading && categories.length > 0 && (
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none -mx-1 px-1">
              <CategoryBadge
                variant={!selectedCategory ? "active" : "outline"}
                onClick={() => setSelectedCategory("")}
                data-ocid="category-all-pill"
              >
                All
              </CategoryBadge>
              {categories.map((cat) => (
                <CategoryBadge
                  key={cat.id.toString()}
                  emoji={cat.icon}
                  variant={
                    selectedCategory === cat.id.toString()
                      ? "active"
                      : "outline"
                  }
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === cat.id.toString()
                        ? ""
                        : cat.id.toString(),
                    )
                  }
                  data-ocid="category-pill"
                >
                  <span className="whitespace-nowrap">{cat.name}</span>
                </CategoryBadge>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex gap-6">
          {/* ── Desktop sidebar filter ── */}
          <aside className="hidden lg:flex flex-col w-64 flex-shrink-0">
            <div className="sticky top-[73px] bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <FilterPanel
                filters={filters}
                onFiltersChange={setFilters}
                subcategoryOptions={subcategoryOptions}
              />
            </div>
          </aside>

          {/* ── Main content ── */}
          <main className="flex-1 min-w-0">
            {/* Results bar */}
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap min-w-0">
                {isLoading ? (
                  <Skeleton className="h-4 w-32" />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Showing{" "}
                    <strong className="text-foreground">
                      {Math.min(visibleCount, displayProducts.length)}
                    </strong>
                    {" of "}
                    <strong className="text-foreground">
                      {displayProducts.length}
                    </strong>
                    {" products"}
                    {debouncedSearch.trim() && (
                      <span>
                        {" "}
                        for &ldquo;
                        <strong className="text-foreground">
                          {debouncedSearch}
                        </strong>
                        &rdquo;
                      </span>
                    )}
                    {selectedCategoryName && (
                      <span>
                        {" "}
                        in{" "}
                        <strong className="text-foreground">
                          {selectedCategoryName}
                        </strong>
                      </span>
                    )}
                  </p>
                )}

                {/* Active filter badges */}
                {activeFiltersCount > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {selectedCategoryName && (
                      <Badge
                        variant="secondary"
                        className="text-xs gap-1 flex items-center"
                      >
                        {selectedCategoryName}
                        <button
                          type="button"
                          onClick={() => setSelectedCategory("")}
                          className="hover:text-destructive ml-0.5"
                          aria-label="Remove category filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    {(filters.maxPrice < 2000 || filters.minPrice > 0) && (
                      <Badge
                        variant="secondary"
                        className="text-xs gap-1 flex items-center"
                      >
                        ≤ ₹{filters.maxPrice}
                        <button
                          type="button"
                          onClick={() =>
                            setFilters((f) => ({
                              ...f,
                              minPrice: 0,
                              maxPrice: 2000,
                            }))
                          }
                          className="hover:text-destructive ml-0.5"
                          aria-label="Remove price filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    )}
                    {filters.packagingTypes.map((pt) => (
                      <Badge
                        key={pt}
                        variant="secondary"
                        className="text-xs gap-1 flex items-center capitalize"
                      >
                        {pt}
                        <button
                          type="button"
                          onClick={() =>
                            setFilters((f) => ({
                              ...f,
                              packagingTypes: f.packagingTypes.filter(
                                (t) => t !== pt,
                              ),
                            }))
                          }
                          className="hover:text-destructive ml-0.5"
                          aria-label={`Remove ${pt} filter`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                    {filters.dairyTypes.map((dt) => (
                      <Badge
                        key={dt}
                        variant="secondary"
                        className="text-xs gap-1 flex items-center"
                      >
                        {dt}
                        <button
                          type="button"
                          onClick={() =>
                            setFilters((f) => ({
                              ...f,
                              dairyTypes: f.dairyTypes.filter((t) => t !== dt),
                            }))
                          }
                          className="hover:text-destructive ml-0.5"
                          aria-label={`Remove ${dt} filter`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-xs text-muted-foreground h-6 px-2"
                      data-ocid="clear-all-btn"
                    >
                      Clear all
                    </Button>
                  </div>
                )}
              </div>

              {/* Right controls */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <SortDropdown value={sortBy} onChange={setSortBy} />

                {/* Grid / List toggle */}
                <div className="flex items-center bg-muted rounded-lg p-0.5">
                  <button
                    type="button"
                    className={`p-1.5 rounded-md transition-colors ${
                      viewMode === "grid"
                        ? "bg-card shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                    data-ocid="grid-view-btn"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className={`p-1.5 rounded-md transition-colors ${
                      viewMode === "list"
                        ? "bg-card shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                    data-ocid="list-view-btn"
                  >
                    <LayoutList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product content */}
            {isLoading ? (
              viewMode === "grid" ? (
                <ProductGridSkeleton count={8} />
              ) : (
                <ProductListSkeleton count={6} />
              )
            ) : displayProducts.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center animate-fade-in"
                data-ocid="empty-state"
              >
                <div className="text-6xl mb-4">🥛</div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  No products found
                </h2>
                <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                  {debouncedSearch.trim()
                    ? `No results for "${debouncedSearch}". Try a different search term.`
                    : "No products match your current filters. Try adjusting or clearing them."}
                </p>
                <Button
                  onClick={clearAllFilters}
                  variant="outline"
                  className="gap-2"
                  data-ocid="clear-filters-btn"
                >
                  <X className="w-4 h-4" /> Clear Filters
                </Button>
              </div>
            ) : (
              <>
                {viewMode === "grid" ? (
                  <div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 animate-fade-in"
                    data-ocid="products-grid"
                  >
                    {pagedProducts.map((product) => (
                      <ProductCard
                        key={product.id.toString()}
                        product={product}
                        variant="grid"
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className="flex flex-col gap-3 animate-fade-in"
                    data-ocid="products-list"
                  >
                    {pagedProducts.map((product) => (
                      <ProductCard
                        key={product.id.toString()}
                        product={product}
                        variant="list"
                      />
                    ))}
                  </div>
                )}

                {/* Load More */}
                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <Button
                      variant="outline"
                      className="min-w-40 gap-2"
                      onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                      data-ocid="load-more-btn"
                    >
                      Load more
                      <span className="text-muted-foreground text-xs">
                        ({displayProducts.length - visibleCount} remaining)
                      </span>
                    </Button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* ── Mobile filter bottom sheet ── */}
      <MobileFilterSheet
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
      >
        <FilterPanel
          filters={filters}
          onFiltersChange={(f) => {
            setFilters(f);
            setShowMobileFilters(false);
          }}
          subcategoryOptions={subcategoryOptions}
          onClose={() => setShowMobileFilters(false)}
        />
      </MobileFilterSheet>
    </div>
  );
}

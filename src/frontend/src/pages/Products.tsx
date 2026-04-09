import ProductCard from "@/components/products/ProductCard";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCategories,
  useProducts,
  useSearchProducts,
} from "@/hooks/use-backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createActor } from "../backend";
import type { Product } from "../types";

const PACKAGING_OPTIONS = [
  { label: "All Types", value: "" },
  { label: "Pouch", value: "pouch" },
  { label: "Bottle", value: "bottle" },
  { label: "Tetra Pack", value: "tetra-pack" },
  { label: "Can", value: "can" },
  { label: "Tub", value: "tub" },
  { label: "Jar", value: "jar" },
];

const MAX_PRICE_MARKS = [0, 100, 250, 500, 1000, 2000];

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map((key) => (
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

function useFilteredProducts(
  searchTerm: string,
  categoryId: string,
  maxPrice: number,
  packagingType: string,
) {
  const { actor, isFetching } = useActor(createActor);
  const allProducts = useProducts();
  const searchResults = useSearchProducts(searchTerm);

  const filtered = useQuery<Product[]>({
    queryKey: ["products", "filter", categoryId, maxPrice, packagingType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.filterProducts(
        categoryId ? BigInt(categoryId) : null,
        maxPrice > 0 ? BigInt(maxPrice) : null,
        packagingType || null,
      );
    },
    enabled:
      !!actor &&
      !isFetching &&
      !searchTerm.trim() &&
      (!!categoryId || maxPrice > 0 || !!packagingType),
    staleTime: 30 * 1000,
  });

  const hasFilters = !!categoryId || maxPrice > 0 || !!packagingType;

  if (searchTerm.trim().length > 1) return searchResults;
  if (hasFilters) return filtered;
  return allProducts;
}

export default function Products() {
  const { category: categoryFromSearch } = useSearch({ from: "/products" });
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromSearch ?? "",
  );
  const [maxPrice, setMaxPrice] = useState(0);
  const [packagingType, setPackagingType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: products = [], isLoading: prodLoading } = useFilteredProducts(
    debouncedSearch,
    selectedCategory,
    maxPrice,
    packagingType,
  );

  const isLoading = catLoading || prodLoading;

  const activeFiltersCount = [
    selectedCategory,
    maxPrice > 0 ? "price" : "",
    packagingType,
  ].filter(Boolean).length;

  const clearAllFilters = useCallback(() => {
    setSelectedCategory("");
    setMaxPrice(0);
    setPackagingType("");
    setSearchTerm("");
    setDebouncedSearch("");
  }, []);

  const selectedCategoryName = useMemo(
    () => categories.find((c) => c.id.toString() === selectedCategory)?.name,
    [categories, selectedCategory],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Search header */}
      <div className="sticky top-0 z-20 bg-card border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search milk, paneer, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 h-10 bg-background border-input rounded-full text-sm"
                data-ocid="products-search-input"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    setSearchTerm("");
                    setDebouncedSearch("");
                  }}
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full flex-shrink-0 relative"
              onClick={() => setShowFilters((v) => !v)}
              aria-label="Toggle filters"
              data-ocid="filter-toggle-btn"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div
              className="mt-3 pb-3 border-t border-border pt-3 space-y-3"
              data-ocid="filter-panel"
            >
              {/* Packaging filter */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                  Packaging
                </p>
                <div className="flex flex-wrap gap-2">
                  {PACKAGING_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setPackagingType(opt.value)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-smooth border ${
                        packagingType === opt.value
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                      }`}
                      data-ocid="packaging-filter-btn"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max price filter */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Max Price
                  </p>
                  {maxPrice > 0 && (
                    <span className="text-xs font-bold text-primary">
                      Up to ₹{maxPrice}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setMaxPrice(0)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-smooth border ${
                      maxPrice === 0
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                    }`}
                    data-ocid="price-filter-btn"
                  >
                    Any Price
                  </button>
                  {MAX_PRICE_MARKS.filter((m) => m > 0).map((mark) => (
                    <button
                      key={mark}
                      type="button"
                      onClick={() => setMaxPrice(mark)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-smooth border ${
                        maxPrice === mark
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                      }`}
                      data-ocid="price-filter-btn"
                    >
                      ≤ ₹{mark}
                    </button>
                  ))}
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-destructive hover:text-destructive text-xs h-7"
                  data-ocid="clear-filters-btn"
                >
                  <X className="w-3 h-3 mr-1" /> Clear all filters
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Category pills */}
        {!catLoading && categories.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 mb-4">
            <CategoryBadge
              variant={!selectedCategory ? "active" : "outline"}
              onClick={() => setSelectedCategory("")}
            >
              All
            </CategoryBadge>
            {categories.map((cat) => (
              <CategoryBadge
                key={cat.id.toString()}
                emoji={cat.iconEmoji}
                variant={
                  selectedCategory === cat.id.toString() ? "active" : "outline"
                }
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.id.toString()
                      ? ""
                      : cat.id.toString(),
                  )
                }
              >
                <span className="whitespace-nowrap">{cat.name}</span>
              </CategoryBadge>
            ))}
          </div>
        )}

        {/* Results header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm text-muted-foreground">
              {isLoading ? (
                <Skeleton className="h-4 w-24 inline-block" />
              ) : (
                <span>
                  <strong className="text-foreground">{products.length}</strong>{" "}
                  {products.length === 1 ? "product" : "products"}
                  {debouncedSearch && (
                    <span>
                      {" "}
                      for &ldquo;<strong>{debouncedSearch}</strong>&rdquo;
                    </span>
                  )}
                  {selectedCategoryName && (
                    <span> in {selectedCategoryName}</span>
                  )}
                </span>
              )}
            </p>
            {activeFiltersCount > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                {selectedCategoryName && (
                  <Badge
                    variant="secondary"
                    className="text-xs flex items-center gap-1"
                  >
                    {selectedCategoryName}
                    <button
                      type="button"
                      onClick={() => setSelectedCategory("")}
                      className="ml-0.5 hover:text-destructive"
                      aria-label="Remove category filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {maxPrice > 0 && (
                  <Badge
                    variant="secondary"
                    className="text-xs flex items-center gap-1"
                  >
                    ≤ ₹{maxPrice}
                    <button
                      type="button"
                      onClick={() => setMaxPrice(0)}
                      className="ml-0.5 hover:text-destructive"
                      aria-label="Remove price filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {packagingType && (
                  <Badge
                    variant="secondary"
                    className="text-xs flex items-center gap-1"
                  >
                    {packagingType}
                    <button
                      type="button"
                      onClick={() => setPackagingType("")}
                      className="ml-0.5 hover:text-destructive"
                      aria-label="Remove packaging filter"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </div>

          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs text-muted-foreground shrink-0"
              data-ocid="clear-all-btn"
            >
              Clear all
            </Button>
          )}
        </div>

        {/* Products grid */}
        {isLoading ? (
          <ProductGridSkeleton />
        ) : products.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="empty-state"
          >
            <div className="text-5xl mb-4">🥛</div>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              No products found
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              {debouncedSearch
                ? `No results for "${debouncedSearch}". Try a different search term.`
                : "No products match the selected filters. Try adjusting your filters."}
            </p>
            <Button onClick={clearAllFilters} variant="outline" size="sm">
              <X className="w-4 h-4 mr-1" /> Clear filters
            </Button>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            data-ocid="products-grid"
          >
            {products.map((product) => (
              <ProductCard key={product.id.toString()} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

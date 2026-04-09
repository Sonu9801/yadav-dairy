import { c as createLucideIcon, e as useSearch, r as reactExports, u as useCategories, j as jsxRuntimeExports, f as Search, I as Input, S as Skeleton, B as Badge, g as useActor, h as useProducts, i as useSearchProducts, k as useQuery, l as createActor } from "./index-Bpk1okSM.js";
import { P as ProductCard } from "./ProductCard-D_Fyc0s0.js";
import { C as CategoryBadge } from "./CategoryBadge-DMWNyRiX.js";
import { B as Button } from "./button-DQ9l_krO.js";
import { X } from "./x-Bew9r-SF.js";
import "./ProductPackageSVG-Dc0Xoa7T.js";
import "./StarRating-B9pe--Sx.js";
import "./index-CATVIhQS.js";
import "./plus-dLW1Sukh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const PACKAGING_OPTIONS = [
  { label: "All Types", value: "" },
  { label: "Pouch", value: "pouch" },
  { label: "Bottle", value: "bottle" },
  { label: "Tetra Pack", value: "tetra-pack" },
  { label: "Can", value: "can" },
  { label: "Tub", value: "tub" },
  { label: "Jar", value: "jar" }
];
const MAX_PRICE_MARKS = [0, 100, 250, 500, 1e3, 2e3];
function ProductGridSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-xl overflow-hidden border border-border",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full mt-2" })
        ] })
      ]
    },
    key
  )) });
}
function useFilteredProducts(searchTerm, categoryId, maxPrice, packagingType) {
  const { actor, isFetching } = useActor(createActor);
  const allProducts = useProducts();
  const searchResults = useSearchProducts(searchTerm);
  const filtered = useQuery({
    queryKey: ["products", "filter", categoryId, maxPrice, packagingType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.filterProducts(
        categoryId ? BigInt(categoryId) : null,
        maxPrice > 0 ? BigInt(maxPrice) : null,
        packagingType || null
      );
    },
    enabled: !!actor && !isFetching && !searchTerm.trim() && (!!categoryId || maxPrice > 0 || !!packagingType),
    staleTime: 30 * 1e3
  });
  const hasFilters = !!categoryId || maxPrice > 0 || !!packagingType;
  if (searchTerm.trim().length > 1) return searchResults;
  if (hasFilters) return filtered;
  return allProducts;
}
function Products() {
  const { category: categoryFromSearch } = useSearch({ from: "/products" });
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState(
    categoryFromSearch ?? ""
  );
  const [maxPrice, setMaxPrice] = reactExports.useState(0);
  const [packagingType, setPackagingType] = reactExports.useState("");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: products = [], isLoading: prodLoading } = useFilteredProducts(
    debouncedSearch,
    selectedCategory,
    maxPrice,
    packagingType
  );
  const isLoading = catLoading || prodLoading;
  const activeFiltersCount = [
    selectedCategory,
    maxPrice > 0 ? "price" : "",
    packagingType
  ].filter(Boolean).length;
  const clearAllFilters = reactExports.useCallback(() => {
    setSelectedCategory("");
    setMaxPrice(0);
    setPackagingType("");
    setSearchTerm("");
    setDebouncedSearch("");
  }, []);
  const selectedCategoryName = reactExports.useMemo(
    () => {
      var _a;
      return (_a = categories.find((c) => c.id.toString() === selectedCategory)) == null ? void 0 : _a.name;
    },
    [categories, selectedCategory]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 bg-card border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "search",
              placeholder: "Search milk, paneer, and more...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "pl-9 pr-4 h-10 bg-background border-input rounded-full text-sm",
              "data-ocid": "products-search-input"
            }
          ),
          searchTerm && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
              onClick: () => {
                setSearchTerm("");
                setDebouncedSearch("");
              },
              "aria-label": "Clear search",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-10 w-10 rounded-full flex-shrink-0 relative",
            onClick: () => setShowFilters((v) => !v),
            "aria-label": "Toggle filters",
            "data-ocid": "filter-toggle-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
              activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center", children: activeFiltersCount })
            ]
          }
        )
      ] }),
      showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-3 pb-3 border-t border-border pt-3 space-y-3",
          "data-ocid": "filter-panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide", children: "Packaging" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: PACKAGING_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPackagingType(opt.value),
                  className: `px-3 py-1 rounded-full text-xs font-medium transition-smooth border ${packagingType === opt.value ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"}`,
                  "data-ocid": "packaging-filter-btn",
                  children: opt.label
                },
                opt.value
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Max Price" }),
                maxPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-primary", children: [
                  "Up to ₹",
                  maxPrice
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setMaxPrice(0),
                    className: `px-3 py-1 rounded-full text-xs font-medium transition-smooth border ${maxPrice === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"}`,
                    "data-ocid": "price-filter-btn",
                    children: "Any Price"
                  }
                ),
                MAX_PRICE_MARKS.filter((m) => m > 0).map((mark) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setMaxPrice(mark),
                    className: `px-3 py-1 rounded-full text-xs font-medium transition-smooth border ${maxPrice === mark ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"}`,
                    "data-ocid": "price-filter-btn",
                    children: [
                      "≤ ₹",
                      mark
                    ]
                  },
                  mark
                ))
              ] })
            ] }),
            activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: clearAllFilters,
                className: "text-destructive hover:text-destructive text-xs h-7",
                "data-ocid": "clear-filters-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3 mr-1" }),
                  " Clear all filters"
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-4", children: [
      !catLoading && categories.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CategoryBadge,
          {
            variant: !selectedCategory ? "active" : "outline",
            onClick: () => setSelectedCategory(""),
            children: "All"
          }
        ),
        categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CategoryBadge,
          {
            emoji: cat.iconEmoji,
            variant: selectedCategory === cat.id.toString() ? "active" : "outline",
            onClick: () => setSelectedCategory(
              selectedCategory === cat.id.toString() ? "" : cat.id.toString()
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: cat.name })
          },
          cat.id.toString()
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24 inline-block" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: products.length }),
            " ",
            products.length === 1 ? "product" : "products",
            debouncedSearch && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              " ",
              "for “",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: debouncedSearch }),
              "”"
            ] }),
            selectedCategoryName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              " in ",
              selectedCategoryName
            ] })
          ] }) }),
          activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
            selectedCategoryName && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs flex items-center gap-1",
                children: [
                  selectedCategoryName,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelectedCategory(""),
                      className: "ml-0.5 hover:text-destructive",
                      "aria-label": "Remove category filter",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                    }
                  )
                ]
              }
            ),
            maxPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs flex items-center gap-1",
                children: [
                  "≤ ₹",
                  maxPrice,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMaxPrice(0),
                      className: "ml-0.5 hover:text-destructive",
                      "aria-label": "Remove price filter",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                    }
                  )
                ]
              }
            ),
            packagingType && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-xs flex items-center gap-1",
                children: [
                  packagingType,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPackagingType(""),
                      className: "ml-0.5 hover:text-destructive",
                      "aria-label": "Remove packaging filter",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: clearAllFilters,
            className: "text-xs text-muted-foreground shrink-0",
            "data-ocid": "clear-all-btn",
            children: "Clear all"
          }
        )
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGridSkeleton, {}) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-20 text-center",
          "data-ocid": "empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🥛" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground mb-2", children: "No products found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 max-w-xs", children: debouncedSearch ? `No results for "${debouncedSearch}". Try a different search term.` : "No products match the selected filters. Try adjusting your filters." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: clearAllFilters, variant: "outline", size: "sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-1" }),
              " Clear filters"
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4",
          "data-ocid": "products-grid",
          children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id.toString()))
        }
      )
    ] })
  ] });
}
export {
  Products as default
};

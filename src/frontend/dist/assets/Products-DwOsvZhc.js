import { c as createLucideIcon, i as useSearch, r as reactExports, u as useCategories, k as useSubcategories, f as useProducts, l as useFilterProducts, m as useSearchProducts, j as jsxRuntimeExports, n as Search, I as Input, B as Button, S as Skeleton, h as Badge, P as ProductPackageSVG } from "./index-S-wpKozw.js";
import { P as ProductCard } from "./ProductCard-jLj6EdkC.js";
import { C as CategoryBadge } from "./CategoryBadge-DZnXsF2X.js";
import { X } from "./x-Bb5ldv21.js";
import { C as ChevronDown } from "./chevron-down-B2AfH6Cz.js";
import "./use-wishlist-BvEZIzWU.js";
import "./plus-Crllhs1t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
];
const LayoutList = createLucideIcon("layout-list", __iconNode$1);
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
const PACKAGING_TYPES = [
  "pouch",
  "bottle",
  "tetra-pack",
  "tub",
  "jar",
  "can",
  "box",
  "block"
];
const PRICE_MARKS = [100, 250, 500, 1e3, 2e3];
const SORT_OPTIONS = [
  { label: "Popular", value: "popular" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Rating: High to Low", value: "rating_desc" },
  { label: "Newest First", value: "newest" }
];
const PAGE_SIZE = 24;
function ProductGridSkeleton({ count = 8 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4", children: Array.from({ length: count }, (_, i) => `sk${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
function ProductListSkeleton({ count = 6 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: Array.from({ length: count }, (_, i) => `sk${i}`).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-xl border border-border flex items-center gap-3 p-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-20 rounded-lg flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-20 h-8 rounded-lg flex-shrink-0" })
      ]
    },
    key
  )) });
}
function SearchDropdown({
  results,
  isVisible,
  onSelect,
  searchTerm
}) {
  if (!isVisible || results.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-xl shadow-lg z-50 overflow-hidden animate-slide-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto", children: results.slice(0, 8).map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center gap-3 px-3 py-2.5 hover:bg-muted/60 transition-colors text-left",
        onClick: () => onSelect(product),
        "data-ocid": "search-autocomplete-item",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center flex-shrink-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ProductPackageSVG,
            {
              packagingKey: product.imageUrl,
              productName: product.name,
              size: "sm",
              className: "w-full h-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: highlightMatch(product.name, searchTerm) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: product.nameHindi })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-accent flex-shrink-0", children: [
            "₹",
            Number(product.price)
          ] })
        ]
      },
      product.id.toString()
    )) }),
    results.length > 8 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 border-t border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
      "+",
      results.length - 8,
      " more results"
    ] }) })
  ] });
}
function highlightMatch(text, term) {
  if (!term.trim()) return text;
  const idx = text.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return text;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    text.slice(0, idx),
    /* @__PURE__ */ jsxRuntimeExports.jsx("mark", { className: "bg-accent/30 text-foreground rounded-sm", children: text.slice(idx, idx + term.length) }),
    text.slice(idx + term.length)
  ] });
}
function FilterPanel({
  filters,
  onFiltersChange,
  subcategoryOptions,
  onClose
}) {
  const [local, setLocal] = reactExports.useState(filters);
  reactExports.useEffect(() => {
    setLocal(filters);
  }, [filters]);
  function togglePackaging(type) {
    setLocal((prev) => ({
      ...prev,
      packagingTypes: prev.packagingTypes.includes(type) ? prev.packagingTypes.filter((t) => t !== type) : [...prev.packagingTypes, type]
    }));
  }
  function toggleDairy(type) {
    setLocal((prev) => ({
      ...prev,
      dairyTypes: prev.dairyTypes.includes(type) ? prev.dairyTypes.filter((t) => t !== type) : [...prev.dairyTypes, type]
    }));
  }
  function applyFilters() {
    onFiltersChange(local);
    onClose == null ? void 0 : onClose();
  }
  function resetFilters() {
    const reset = {
      minPrice: 0,
      maxPrice: 2e3,
      packagingTypes: [],
      dairyTypes: []
    };
    setLocal(reset);
    onFiltersChange(reset);
  }
  const hasChanges = JSON.stringify(local) !== JSON.stringify(filters);
  const activeCount = local.packagingTypes.length + local.dairyTypes.length + (local.maxPrice < 2e3 || local.minPrice > 0 ? 1 : 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", "data-ocid": "filter-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Filters" }),
        activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: activeCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "text-xs text-muted-foreground hover:text-destructive transition-colors",
            onClick: resetFilters,
            "data-ocid": "reset-filters-btn",
            children: "Reset all"
          }
        ),
        onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "p-1 hover:bg-muted rounded-lg transition-colors",
            onClick: onClose,
            "aria-label": "Close filters",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Price Range" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
              "₹",
              local.minPrice
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
              "₹",
              local.maxPrice
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "range",
              min: 0,
              max: 2e3,
              step: 50,
              value: local.maxPrice,
              onChange: (e) => setLocal((p) => ({ ...p, maxPrice: Number(e.target.value) })),
              className: "w-full h-2 accent-accent rounded-full cursor-pointer",
              "aria-label": "Max price",
              "data-ocid": "price-range-slider"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2", children: PRICE_MARKS.map((mark) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setLocal((p) => ({ ...p, maxPrice: mark })),
              className: `px-2.5 py-1 rounded-full text-xs font-medium transition-smooth border ${local.maxPrice === mark ? "bg-accent text-accent-foreground border-accent" : "bg-secondary text-secondary-foreground border-border hover:bg-muted"}`,
              children: [
                "≤ ₹",
                mark
              ]
            },
            mark
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Packaging Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: PACKAGING_TYPES.map((type) => {
          const checked = local.packagingTypes.includes(type);
          const inputId = `packaging-${type}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: inputId,
              className: "flex items-center gap-3 cursor-pointer group",
              "data-ocid": "packaging-checkbox",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: inputId,
                    type: "checkbox",
                    checked,
                    onChange: () => togglePackaging(type),
                    className: "sr-only"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-4 h-4 rounded border-2 flex items-center justify-center transition-smooth flex-shrink-0 pointer-events-none ${checked ? "bg-accent border-accent" : "border-border group-hover:border-accent/60"}`,
                    "aria-hidden": "true",
                    children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-2.5 h-2.5 text-accent-foreground",
                        fill: "none",
                        viewBox: "0 0 12 12",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M2 6l3 3 5-5",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground capitalize", children: type })
              ]
            },
            type
          );
        }) })
      ] }),
      subcategoryOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Dairy Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto", children: subcategoryOptions.map((sub) => {
          const checked = local.dairyTypes.includes(sub);
          const inputId = `dairy-${sub.replace(/\s+/g, "-").toLowerCase()}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: inputId,
              className: "flex items-center gap-3 cursor-pointer group",
              "data-ocid": "dairy-type-checkbox",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: inputId,
                    type: "checkbox",
                    checked,
                    onChange: () => toggleDairy(sub),
                    className: "sr-only"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-4 h-4 rounded border-2 flex items-center justify-center transition-smooth flex-shrink-0 pointer-events-none ${checked ? "bg-accent border-accent" : "border-border group-hover:border-accent/60"}`,
                    "aria-hidden": "true",
                    children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "w-2.5 h-2.5 text-accent-foreground",
                        fill: "none",
                        viewBox: "0 0 12 12",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M2 6l3 3 5-5",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: sub })
              ]
            },
            sub
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full btn-accent",
        onClick: applyFilters,
        "data-ocid": "apply-filters-btn",
        disabled: !hasChanges,
        children: "Apply Filters"
      }
    ) })
  ] });
}
function SortDropdown({ value, onChange }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const current = SORT_OPTIONS.find((o) => o.value === value);
  reactExports.useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target))
        setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", "data-ocid": "sort-dropdown", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground hover:bg-muted transition-colors",
        onClick: () => setOpen((v) => !v),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "data-ocid": "sort-toggle-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs mr-0.5", children: "Sort:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: current == null ? void 0 : current.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-full mt-1 w-52 bg-popover border border-border rounded-xl shadow-lg z-30 overflow-hidden animate-slide-up", children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: `w-full px-4 py-2.5 text-left text-sm transition-colors ${opt.value === value ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted"}`,
        onClick: () => {
          onChange(opt.value);
          setOpen(false);
        },
        "data-ocid": "sort-option",
        children: opt.label
      },
      opt.value
    )) })
  ] });
}
function MobileFilterSheet({
  isOpen,
  onClose,
  children
}) {
  reactExports.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 lg:hidden",
      "data-ocid": "mobile-filter-sheet",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-foreground/40 backdrop-blur-sm",
            onClick: onClose,
            onKeyDown: (e) => e.key === "Escape" && onClose(),
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-card rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl animate-slide-up", children })
      ]
    }
  );
}
function sortProducts(products, sort) {
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
function applyFrontendFilters(products, filters) {
  return products.filter((p) => {
    const price = Number(p.price);
    if (filters.minPrice > 0 && price < filters.minPrice) return false;
    if (filters.maxPrice < 2e3 && price > filters.maxPrice) return false;
    if (filters.packagingTypes.length > 0 && !filters.packagingTypes.includes(p.packagingType))
      return false;
    if (filters.dairyTypes.length > 0 && !filters.dairyTypes.includes(p.subcategory))
      return false;
    return true;
  });
}
function Products() {
  const { category: categoryFromSearch } = useSearch({ from: "/products" });
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [debouncedSearch, setDebouncedSearch] = reactExports.useState("");
  const [showDropdown, setShowDropdown] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  const [selectedCategory, setSelectedCategory] = reactExports.useState(
    categoryFromSearch ?? ""
  );
  const [filters, setFilters] = reactExports.useState({
    minPrice: 0,
    maxPrice: 2e3,
    packagingTypes: [],
    dairyTypes: []
  });
  const [sortBy, setSortBy] = reactExports.useState("popular");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [showMobileFilters, setShowMobileFilters] = reactExports.useState(false);
  const [visibleCount, setVisibleCount] = reactExports.useState(PAGE_SIZE);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);
  reactExports.useEffect(() => {
    function close(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const { data: categories = [], isLoading: catLoading } = useCategories();
  const { data: subcategories = [] } = useSubcategories();
  const hasBackendFilters = !!selectedCategory;
  const { data: allProducts = [], isLoading: allLoading } = useProducts();
  const { data: filteredByCategory = [], isLoading: catFilterLoading } = useFilterProducts(selectedCategory || null, null, null);
  const { data: searchResults = [], isLoading: searchLoading } = useSearchProducts(debouncedSearch);
  const subcategoryOptions = reactExports.useMemo(
    () => [...new Set(subcategories.map((s) => s.name))].sort(),
    [subcategories]
  );
  const baseProducts = reactExports.useMemo(() => {
    if (debouncedSearch.trim().length > 1) return searchResults;
    if (hasBackendFilters) return filteredByCategory;
    return allProducts;
  }, [
    debouncedSearch,
    searchResults,
    hasBackendFilters,
    filteredByCategory,
    allProducts
  ]);
  const isLoading = debouncedSearch.trim().length > 1 ? searchLoading : hasBackendFilters ? catFilterLoading : allLoading;
  const displayProducts = reactExports.useMemo(
    () => sortProducts(applyFrontendFilters(baseProducts, filters), sortBy),
    [baseProducts, filters, sortBy]
  );
  const displayCount = displayProducts.length;
  reactExports.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [displayCount]);
  const pagedProducts = displayProducts.slice(0, visibleCount);
  const hasMore = visibleCount < displayProducts.length;
  const activeFiltersCount = reactExports.useMemo(() => {
    let count = 0;
    if (selectedCategory) count++;
    if (filters.maxPrice < 2e3 || filters.minPrice > 0) count++;
    count += filters.packagingTypes.length;
    count += filters.dairyTypes.length;
    return count;
  }, [selectedCategory, filters]);
  const clearAllFilters = reactExports.useCallback(() => {
    setSelectedCategory("");
    setSearchTerm("");
    setDebouncedSearch("");
    setFilters({
      minPrice: 0,
      maxPrice: 2e3,
      packagingTypes: [],
      dairyTypes: []
    });
    setSortBy("popular");
  }, []);
  const selectedCategoryName = reactExports.useMemo(
    () => {
      var _a;
      return (_a = categories.find((c) => c.id.toString() === selectedCategory)) == null ? void 0 : _a.name;
    },
    [categories, selectedCategory]
  );
  function handleSearchSelect(product) {
    setSearchTerm(product.name);
    setDebouncedSearch(product.name);
    setShowDropdown(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-20 bg-card border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: searchRef, className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "search",
            placeholder: "Search milk, paneer, ghee and more...",
            value: searchTerm,
            onChange: (e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            },
            onFocus: () => searchTerm.trim().length > 1 && setShowDropdown(true),
            className: "pl-9 pr-8 h-10 bg-background border-input rounded-full text-sm",
            "data-ocid": "products-search-input"
          }
        ),
        searchTerm && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
            onClick: () => {
              setSearchTerm("");
              setDebouncedSearch("");
              setShowDropdown(false);
            },
            "aria-label": "Clear search",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SearchDropdown,
          {
            results: searchResults,
            isVisible: showDropdown && debouncedSearch.trim().length > 1,
            onSelect: handleSearchSelect,
            searchTerm: debouncedSearch
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "icon",
          className: "h-10 w-10 rounded-full flex-shrink-0 relative lg:hidden",
          onClick: () => setShowMobileFilters(true),
          "aria-label": "Open filters",
          "data-ocid": "mobile-filter-toggle-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4" }),
            activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center", children: activeFiltersCount })
          ]
        }
      )
    ] }) }) }),
    !catLoading && categories.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 overflow-x-auto py-3 scrollbar-none -mx-1 px-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CategoryBadge,
        {
          variant: !selectedCategory ? "active" : "outline",
          onClick: () => setSelectedCategory(""),
          "data-ocid": "category-all-pill",
          children: "All"
        }
      ),
      categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CategoryBadge,
        {
          emoji: cat.icon,
          variant: selectedCategory === cat.id.toString() ? "active" : "outline",
          onClick: () => setSelectedCategory(
            selectedCategory === cat.id.toString() ? "" : cat.id.toString()
          ),
          "data-ocid": "category-pill",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: cat.name })
        },
        cat.id.toString()
      ))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:flex flex-col w-64 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-[73px] bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterPanel,
        {
          filters,
          onFiltersChange: setFilters,
          subcategoryOptions
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 mb-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap min-w-0", children: [
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Showing",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: Math.min(visibleCount, displayProducts.length) }),
              " of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: displayProducts.length }),
              " products",
              debouncedSearch.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                " ",
                "for “",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: debouncedSearch }),
                "”"
              ] }),
              selectedCategoryName && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                " ",
                "in",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: selectedCategoryName })
              ] })
            ] }),
            activeFiltersCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
              selectedCategoryName && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs gap-1 flex items-center",
                  children: [
                    selectedCategoryName,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setSelectedCategory(""),
                        className: "hover:text-destructive ml-0.5",
                        "aria-label": "Remove category filter",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                      }
                    )
                  ]
                }
              ),
              (filters.maxPrice < 2e3 || filters.minPrice > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs gap-1 flex items-center",
                  children: [
                    "≤ ₹",
                    filters.maxPrice,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setFilters((f) => ({
                          ...f,
                          minPrice: 0,
                          maxPrice: 2e3
                        })),
                        className: "hover:text-destructive ml-0.5",
                        "aria-label": "Remove price filter",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                      }
                    )
                  ]
                }
              ),
              filters.packagingTypes.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs gap-1 flex items-center capitalize",
                  children: [
                    pt,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setFilters((f) => ({
                          ...f,
                          packagingTypes: f.packagingTypes.filter(
                            (t) => t !== pt
                          )
                        })),
                        className: "hover:text-destructive ml-0.5",
                        "aria-label": `Remove ${pt} filter`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                      }
                    )
                  ]
                },
                pt
              )),
              filters.dairyTypes.map((dt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs gap-1 flex items-center",
                  children: [
                    dt,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setFilters((f) => ({
                          ...f,
                          dairyTypes: f.dairyTypes.filter((t) => t !== dt)
                        })),
                        className: "hover:text-destructive ml-0.5",
                        "aria-label": `Remove ${dt} filter`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                      }
                    )
                  ]
                },
                dt
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: clearAllFilters,
                  className: "text-xs text-muted-foreground h-6 px-2",
                  "data-ocid": "clear-all-btn",
                  children: "Clear all"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SortDropdown, { value: sortBy, onChange: setSortBy }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-muted rounded-lg p-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: `p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                  onClick: () => setViewMode("grid"),
                  "aria-label": "Grid view",
                  "data-ocid": "grid-view-btn",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "w-4 h-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: `p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                  onClick: () => setViewMode("list"),
                  "aria-label": "List view",
                  "data-ocid": "list-view-btn",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutList, { className: "w-4 h-4" })
                }
              )
            ] })
          ] })
        ] }),
        isLoading ? viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGridSkeleton, { count: 8 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProductListSkeleton, { count: 6 }) : displayProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-20 text-center animate-fade-in",
            "data-ocid": "empty-state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🥛" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-semibold text-foreground mb-2", children: "No products found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6 max-w-sm", children: debouncedSearch.trim() ? `No results for "${debouncedSearch}". Try a different search term.` : "No products match your current filters. Try adjusting or clearing them." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: clearAllFilters,
                  variant: "outline",
                  className: "gap-2",
                  "data-ocid": "clear-filters-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                    " Clear Filters"
                  ]
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 animate-fade-in",
              "data-ocid": "products-grid",
              children: pagedProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductCard,
                {
                  product,
                  variant: "grid"
                },
                product.id.toString()
              ))
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-col gap-3 animate-fade-in",
              "data-ocid": "products-list",
              children: pagedProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductCard,
                {
                  product,
                  variant: "list"
                },
                product.id.toString()
              ))
            }
          ),
          hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "min-w-40 gap-2",
              onClick: () => setVisibleCount((c) => c + PAGE_SIZE),
              "data-ocid": "load-more-btn",
              children: [
                "Load more",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                  "(",
                  displayProducts.length - visibleCount,
                  " remaining)"
                ] })
              ]
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MobileFilterSheet,
      {
        isOpen: showMobileFilters,
        onClose: () => setShowMobileFilters(false),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          FilterPanel,
          {
            filters,
            onFiltersChange: (f) => {
              setFilters(f);
              setShowMobileFilters(false);
            },
            subcategoryOptions,
            onClose: () => setShowMobileFilters(false)
          }
        )
      }
    )
  ] });
}
export {
  Products as default
};

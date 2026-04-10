import { c as createLucideIcon, r as reactExports, u as useCategories, a as useFeaturedProducts, b as useTrendingProducts, d as useBestSellerProducts, e as useFreshArrivals, f as useProducts, g as useNavigate, j as jsxRuntimeExports, B as Button, L as Link, S as Skeleton, h as Badge } from "./index-S-wpKozw.js";
import { P as ProductCard } from "./ProductCard-jLj6EdkC.js";
import { T as Tag, u as useRecentlyViewed } from "./use-recently-viewed-YVzd2B8O.js";
import { h as hasReducedMotionListener, i as initPrefersReducedMotion, p as prefersReducedMotion, m as motion } from "./proxy-WXI-p9_O.js";
import { A as ArrowRight } from "./arrow-right-BJLk-6w2.js";
import { S as Star } from "./use-wishlist-BvEZIzWU.js";
import { C as ChevronRight } from "./chevron-right-DcB2isNx.js";
import { S as ShieldCheck } from "./shield-check-C2LM8IbE.js";
import { C as Clock } from "./clock-DMstXQcH.js";
import "./plus-Crllhs1t.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = reactExports.useState(prefersReducedMotion.current);
  return shouldReduceMotion;
}
const CATEGORY_STYLES = {
  milk: {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    emoji: "🥛"
  },
  paneer: {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    emoji: "🫕"
  },
  butter: {
    bg: "bg-yellow-50 dark:bg-yellow-950/40",
    border: "border-yellow-200 dark:border-yellow-800",
    emoji: "🧈"
  },
  ghee: {
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-200 dark:border-orange-800",
    emoji: "🫙"
  },
  curd: {
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    emoji: "🥣"
  },
  dahi: {
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    emoji: "🥣"
  },
  cheese: {
    bg: "bg-yellow-50 dark:bg-yellow-950/40",
    border: "border-yellow-200 dark:border-yellow-800",
    emoji: "🧀"
  },
  ice: {
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200 dark:border-cyan-800",
    emoji: "🍧"
  },
  cream: {
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    emoji: "🍦"
  },
  yogurt: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-800",
    emoji: "🥛"
  },
  lassi: {
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-200 dark:border-teal-800",
    emoji: "🫗"
  },
  beverage: {
    bg: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-200 dark:border-green-800",
    emoji: "🥤"
  },
  dessert: {
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    emoji: "🍮"
  },
  sweet: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-800",
    emoji: "🍡"
  },
  plant: {
    bg: "bg-lime-50 dark:bg-lime-950/40",
    border: "border-lime-200 dark:border-lime-800",
    emoji: "🌿"
  }
};
function getCategoryStyle(name) {
  const lower = name.toLowerCase();
  for (const [key, style] of Object.entries(CATEGORY_STYLES)) {
    if (lower.includes(key)) return style;
  }
  return {
    bg: "bg-secondary",
    border: "border-border",
    emoji: "🛒"
  };
}
const CAT_HINDI = {
  Milk: "दूध",
  Paneer: "पनीर",
  Butter: "मक्खन",
  Ghee: "घी",
  Curd: "दही",
  Dahi: "दही",
  Cheese: "चीज़",
  "Ice Cream": "आइसक्रीम",
  Desserts: "मिठाइयाँ",
  Beverages: "पेय",
  Yogurt: "योगर्ट",
  Cream: "क्रीम",
  Lassi: "लस्सी",
  "Plant Based": "प्लांट बेस्ड",
  "Flavored Milk": "स्वादिष्ट दूध"
};
function getCategoryHindi(name) {
  return CAT_HINDI[name] ?? "";
}
function CategorySkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-hidden px-4", children: Array.from({ length: 7 }, (_, i) => `sk-cat-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 flex-shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-[72px] h-[72px] rounded-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-14" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-10" })
  ] }, k)) });
}
function HScrollProductSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-hidden px-4", children: Array.from({ length: 4 }, (_, i) => `sk-p-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 w-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-xl w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4 mt-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2 mt-1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full rounded-lg mt-2" })
  ] }, k)) });
}
function DairyIllustration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 180 180",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      className: "w-full h-full drop-shadow-lg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "20",
            y: "30",
            width: "44",
            height: "72",
            rx: "4",
            fill: "white",
            fillOpacity: "0.95"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "20",
            y: "30",
            width: "44",
            height: "16",
            rx: "4",
            fill: "white",
            fillOpacity: "0.85"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "20,46 42,38 64,46", fill: "white", fillOpacity: "0.7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "24",
            y: "56",
            width: "36",
            height: "10",
            rx: "2",
            fill: "oklch(0.52 0.16 215)",
            fillOpacity: "0.9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "42",
            y: "64",
            textAnchor: "middle",
            fontSize: "6",
            fill: "white",
            fontWeight: "bold",
            children: "Yadav Dairy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "42",
            y: "82",
            textAnchor: "middle",
            fontSize: "9",
            fill: "oklch(0.42 0.14 215)",
            fontWeight: "bold",
            children: "MILK"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "42",
            y: "93",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "oklch(0.52 0.16 215)",
            children: "दूध"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "42",
            y: "103",
            textAnchor: "middle",
            fontSize: "5",
            fill: "oklch(0.58 0.08 50)",
            children: "500 ml"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "90",
            y: "68",
            width: "70",
            height: "38",
            rx: "5",
            fill: "white",
            fillOpacity: "0.95"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "94",
            y: "72",
            width: "62",
            height: "12",
            rx: "3",
            fill: "oklch(0.62 0.22 25)",
            fillOpacity: "0.85"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "125",
            y: "81",
            textAnchor: "middle",
            fontSize: "7",
            fill: "white",
            fontWeight: "bold",
            children: "BUTTER"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "125",
            y: "93",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "oklch(0.45 0.14 215)",
            fontWeight: "bold",
            children: "Yadav Dairy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "125",
            y: "101",
            textAnchor: "middle",
            fontSize: "5",
            fill: "oklch(0.55 0.08 50)",
            children: "मक्खन · 500g"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "90",
            y: "115",
            width: "66",
            height: "42",
            rx: "5",
            fill: "white",
            fillOpacity: "0.9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "93",
            y: "118",
            width: "60",
            height: "10",
            rx: "3",
            fill: "oklch(0.55 0.12 50)",
            fillOpacity: "0.8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "123",
            y: "126",
            textAnchor: "middle",
            fontSize: "6.5",
            fill: "white",
            fontWeight: "bold",
            children: "PANEER"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "123",
            y: "138",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "oklch(0.45 0.14 215)",
            fontWeight: "bold",
            children: "Yadav Dairy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "123",
            y: "148",
            textAnchor: "middle",
            fontSize: "5",
            fill: "oklch(0.55 0.08 50)",
            children: "पनीर · 200g"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "40",
            cy: "130",
            rx: "24",
            ry: "9",
            fill: "white",
            fillOpacity: "0.75"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "16",
            y: "121",
            width: "48",
            height: "40",
            rx: "10",
            fill: "white",
            fillOpacity: "0.9"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: "40",
            cy: "161",
            rx: "24",
            ry: "8",
            fill: "white",
            fillOpacity: "0.65"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "20",
            y: "124",
            width: "40",
            height: "11",
            rx: "3",
            fill: "oklch(0.68 0.20 70)",
            fillOpacity: "0.85"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "40",
            y: "133",
            textAnchor: "middle",
            fontSize: "6.5",
            fill: "white",
            fontWeight: "bold",
            children: "GHEE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "40",
            y: "147",
            textAnchor: "middle",
            fontSize: "5.5",
            fill: "oklch(0.45 0.14 215)",
            fontWeight: "bold",
            children: "Yadav Dairy"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: "40",
            y: "156",
            textAnchor: "middle",
            fontSize: "5",
            fill: "oklch(0.55 0.08 50)",
            children: "घी · 1 Ltr"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "78", y: "45", fontSize: "16", fillOpacity: "0.55", fill: "white", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "158", y: "55", fontSize: "11", fillOpacity: "0.4", fill: "white", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "110", fontSize: "10", fillOpacity: "0.35", fill: "white", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "78", cy: "120", r: "3.5", fill: "white", fillOpacity: "0.35" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "162", cy: "140", r: "5", fill: "white", fillOpacity: "0.25" })
      ]
    }
  );
}
function CategoryCarousel({ categories }) {
  const navigate = useNavigate();
  const scrollRef = reactExports.useRef(null);
  const shouldReduce = useReducedMotion();
  const scroll = reactExports.useCallback((dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 220 : -220,
      behavior: "smooth"
    });
  }, []);
  const allCategories = [
    {
      id: "all",
      name: "All",
      nameHindi: "सभी",
      style: { bg: "bg-primary/10", border: "border-primary/30", emoji: "🛒" }
    },
    ...categories.map((c) => ({
      id: c.id.toString(),
      name: c.name,
      nameHindi: getCategoryHindi(c.name),
      style: getCategoryStyle(c.name)
    }))
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/carousel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Scroll categories left",
        onClick: () => scroll("left"),
        className: "hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors -ml-2 opacity-0 group-hover/carousel:opacity-100",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4 text-foreground" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": "Scroll categories right",
        onClick: () => scroll("right"),
        className: "hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors -mr-2 opacity-0 group-hover/carousel:opacity-100",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-foreground" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollRef,
        className: "flex gap-3 overflow-x-auto pb-1 px-4 sm:px-8 snap-x",
        style: { scrollbarWidth: "none" },
        children: allCategories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: shouldReduce ? 0 : i * 0.04, duration: 0.3 },
            whileTap: { scale: shouldReduce ? 1 : 0.92 },
            onClick: () => cat.id === "all" ? navigate({ to: "/products" }) : navigate({ to: "/products", search: { category: cat.id } }),
            className: "flex flex-col items-center gap-1.5 flex-shrink-0 snap-start group cursor-pointer min-w-[72px]",
            "data-ocid": `category-${cat.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-[72px] h-[72px] rounded-2xl ${cat.style.bg} border-2 ${cat.style.border} flex items-center justify-center text-3xl group-hover:border-primary group-hover:scale-105 transition-smooth shadow-sm`,
                  children: cat.style.emoji
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground text-center leading-tight max-w-[80px] line-clamp-1", children: cat.name }),
              cat.nameHindi && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground leading-tight text-center max-w-[80px]", children: cat.nameHindi })
            ]
          },
          cat.id
        ))
      }
    )
  ] });
}
function HScrollSection({
  title,
  titleHi,
  icon,
  products,
  isLoading,
  isError,
  sectionBg = "bg-background"
}) {
  const scrollRef = reactExports.useRef(null);
  const shouldReduce = useReducedMotion();
  const scroll = reactExports.useCallback((dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth"
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `py-5 ${sectionBg}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[1.1rem] font-display font-bold text-foreground flex items-center gap-2 leading-tight", children: [
          icon,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: titleHi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          className: "flex items-center gap-1 text-primary text-sm font-semibold hover:underline transition-colors flex-shrink-0",
          "data-ocid": "section-view-all",
          children: [
            "View All ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 text-sm text-muted-foreground", children: "Failed to load products." }),
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(HScrollProductSkeleton, {}),
    !isLoading && !isError && products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 text-sm text-muted-foreground", children: "No products available right now." }),
    !isLoading && !isError && products.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/hscroll", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": `Scroll ${title} left`,
          onClick: () => scroll("left"),
          className: "hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors opacity-0 group-hover/hscroll:opacity-100",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": `Scroll ${title} right`,
          onClick: () => scroll("right"),
          className: "hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors opacity-0 group-hover/hscroll:opacity-100",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: scrollRef,
          className: "flex gap-3 overflow-x-auto pb-2 px-4 snap-x snap-mandatory",
          style: { scrollbarWidth: "none" },
          children: products.slice(0, 12).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 16 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: {
                delay: shouldReduce ? 0 : i * 0.05,
                duration: 0.3
              },
              className: "flex-shrink-0 w-[160px] snap-start",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
            },
            product.id.toString()
          ))
        }
      )
    ] })
  ] });
}
function PromoBanner({
  gradient,
  badge,
  title,
  titleHi,
  sub,
  icon,
  cta,
  to
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative rounded-2xl overflow-hidden p-4 bg-gradient-to-br ${gradient} flex items-center justify-between gap-3`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0", children: icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[9px] bg-white/25 text-white border-0 font-bold mb-1 backdrop-blur-sm px-2 py-0", children: badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-base leading-tight", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-xs font-medium", children: titleHi }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs mt-0.5", children: sub })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs font-bold flex-shrink-0 backdrop-blur-sm",
            onClick: () => navigate({ to }),
            "data-ocid": `promo-cta-${badge.toLowerCase()}`,
            children: cta
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10" })
      ]
    }
  );
}
const FEATURES = [
  {
    icon: Leaf,
    title: "100% Pure & Natural",
    titleHi: "शुद्ध और प्राकृतिक",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/40"
  },
  {
    icon: Truck,
    title: "Fresh Daily Delivery",
    titleHi: "रोज़ ताज़ा डिलीवरी",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: ShieldCheck,
    title: "Trusted Since 2010",
    titleHi: "2010 से विश्वसनीय",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/40"
  },
  {
    icon: Tag,
    title: "Cash on Delivery",
    titleHi: "नकद भुगतान उपलब्ध",
    color: "text-accent",
    bg: "bg-accent/10"
  }
];
function FeaturesRow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-5 bg-card border-y border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-center text-lg font-display font-bold text-foreground mb-4 px-4", children: [
      "Why Yadav Dairy?",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-body text-muted-foreground font-normal mt-0.5", children: "हम क्यों चुनें?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex gap-3 overflow-x-auto pb-1 px-4 snap-x sm:grid sm:grid-cols-4 sm:overflow-visible",
        style: { scrollbarWidth: "none" },
        children: FEATURES.map((f, i) => {
          const Icon = f.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08, duration: 0.35 },
              className: "flex-shrink-0 w-44 sm:w-auto snap-start flex flex-col items-center text-center gap-2 bg-muted/40 rounded-2xl p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-6 h-6 ${f.color}` })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-snug", children: f.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: f.titleHi })
              ]
            },
            f.title
          );
        })
      }
    )
  ] });
}
function RecentlyViewedSection({ allProducts }) {
  const { recentlyViewedIds } = useRecentlyViewed();
  const scrollRef = reactExports.useRef(null);
  const recentProducts = reactExports.useMemo(() => {
    if (!recentlyViewedIds.length || !allProducts.length) return [];
    return recentlyViewedIds.map((id) => allProducts.find((p) => p.id.toString() === id)).filter((p) => !!p).slice(0, 8);
  }, [recentlyViewedIds, allProducts]);
  if (!recentProducts.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-5 bg-card border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between px-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[1.1rem] font-display font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }),
        "Recently Viewed"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "हाल ही में देखे गए" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollRef,
        className: "flex gap-3 overflow-x-auto pb-2 px-4 snap-x snap-mandatory",
        style: { scrollbarWidth: "none" },
        children: recentProducts.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 16 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06, duration: 0.3 },
            className: "flex-shrink-0 w-[160px] snap-start",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
          },
          product.id.toString()
        ))
      }
    )
  ] });
}
function HomePage() {
  const categories = useCategories();
  const featured = useFeaturedProducts();
  const trending = useTrendingProducts();
  const bestSellers = useBestSellerProducts();
  const freshArrivals = useFreshArrivals();
  const allProducts = useProducts();
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden mx-3 mt-3 mb-1 rounded-2xl min-h-[200px] sm:min-h-[240px] bg-gradient-to-br from-primary via-[oklch(0.52_0.18_220)] to-[oklch(0.48_0.2_200)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-dairy-banner.dim_800x400.jpg",
          alt: "",
          "aria-hidden": "true",
          className: "absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay",
          loading: "eager"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: shouldReduce ? {} : { opacity: 0, y: -10 },
          animate: shouldReduce ? {} : { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: 0.1 },
          className: "absolute top-3 right-[42%] sm:right-[38%] z-20",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg pulse-accent", children: "10% OFF" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: shouldReduce ? {} : { opacity: 0, y: 20 },
          animate: shouldReduce ? {} : { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "relative z-10 p-5 sm:p-8 max-w-[58%] sm:max-w-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5", children: "🐄 Yadav Dairy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-white font-display font-bold text-2xl sm:text-3xl leading-tight mb-1", children: [
              "Pure Yadav",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Dairy"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mb-1", children: "Farm-fresh dairy delivered to your door" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/65 text-xs mb-4", children: "आपके दरवाज़े तक ताज़ा डेयरी" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "btn-accent text-sm px-5 h-9 shadow-lg",
                onClick: () => navigate({ to: "/products" }),
                "data-ocid": "hero-shop-now-btn",
                children: [
                  "Shop Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: shouldReduce ? {} : { opacity: 0, x: 24 },
          animate: shouldReduce ? {} : { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "absolute right-0 top-0 bottom-0 w-[44%] sm:w-2/5 flex items-center justify-end pr-2 float-animation",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DairyIllustration, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 px-4 py-2 overflow-x-auto",
        style: { scrollbarWidth: "none" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5" }),
            "Free delivery above ₹299"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-accent" }),
            "Same-day dispatch before 10 AM"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-3.5 h-3.5" }),
            "100% Natural & Pure"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-4 bg-card border-y border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: "Shop by Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "श्रेणी के अनुसार खरीदें" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/products",
            className: "text-primary text-sm font-semibold flex items-center gap-1 hover:underline",
            "data-ocid": "categories-view-all",
            children: [
              "See all ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      categories.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CategorySkeleton, {}) : categories.isError ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground px-4", children: "Could not load categories." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryCarousel, { categories: categories.data ?? [] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HScrollSection,
      {
        title: "Trending Now",
        titleHi: "अभी सबसे ज़्यादा पसंद",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-accent" }),
        products: trending.data ?? [],
        isLoading: trending.isLoading,
        isError: trending.isError,
        sectionBg: "bg-background"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PromoBanner,
      {
        gradient: "from-[oklch(0.45_0.2_25)] via-[oklch(0.55_0.22_20)] to-[oklch(0.62_0.22_25)]",
        badge: "OFFER",
        title: "20% Off on all Paneer",
        titleHi: "सभी पनीर उत्पादों पर 20% छूट",
        sub: "Use code: PANEER20",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-5 h-5 text-white" }),
        cta: "Shop Paneer",
        to: "/products"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HScrollSection,
      {
        title: "Best Sellers",
        titleHi: "सबसे ज़्यादा बिकने वाले",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-yellow-500 fill-yellow-400" }),
        products: bestSellers.data ?? [],
        isLoading: bestSellers.isLoading,
        isError: bestSellers.isError,
        sectionBg: "bg-muted/30"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      PromoBanner,
      {
        gradient: "from-primary via-[oklch(0.52_0.18_220)] to-[oklch(0.58_0.14_200)]",
        badge: "FREE DELIVERY",
        title: "Free Delivery",
        titleHi: "₹500 से ऊपर मुफ़्त डिलीवरी",
        sub: "On orders above ₹500",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-white" }),
        cta: "Order Now",
        to: "/products"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HScrollSection,
      {
        title: "Fresh Arrivals",
        titleHi: "नई आवक",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-green-600 dark:text-green-400" }),
        products: freshArrivals.data ?? [],
        isLoading: freshArrivals.isLoading,
        isError: freshArrivals.isError,
        sectionBg: "bg-background"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HScrollSection,
      {
        title: "Recommended For You",
        titleHi: "आपके लिए अनुशंसित",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🥛" }),
        products: featured.data ?? [],
        isLoading: featured.isLoading,
        isError: featured.isError,
        sectionBg: "bg-muted/20"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesRow, {}),
    allProducts.isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-5 bg-card border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-44" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HScrollProductSkeleton, {})
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RecentlyViewedSection, { allProducts: allProducts.data ?? [] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
        className: "mx-4 my-4 rounded-2xl overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent p-5 flex items-center justify-between gap-3",
        "data-ocid": "mid-delivery-banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-base", children: "🚚 Same-Day Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs mt-0.5", children: "Order before 10 AM • आज ही पाएं" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "secondary",
              size: "sm",
              className: "text-primary font-bold text-xs flex-shrink-0",
              onClick: () => navigate({ to: "/products" }),
              "data-ocid": "delivery-cta-btn",
              children: "Order Now"
            }
          )
        ]
      }
    )
  ] });
}
export {
  HomePage as default
};

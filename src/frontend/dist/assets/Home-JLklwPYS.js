import { c as createLucideIcon, u as useCategories, a as useFeaturedProducts, b as useTrendingProducts, d as useNavigate, j as jsxRuntimeExports, L as Link, S as Skeleton, r as reactExports, B as Badge } from "./index-Bpk1okSM.js";
import { P as ProductCard } from "./ProductCard-D_Fyc0s0.js";
import { B as Button } from "./button-DQ9l_krO.js";
import { m as motion } from "./proxy-Z9YAIUas.js";
import { A as ArrowRight } from "./arrow-right-CHq-WD6J.js";
import { S as Star } from "./StarRating-B9pe--Sx.js";
import { C as ChevronRight } from "./chevron-right-DKfyF6tD.js";
import { T as Tag } from "./tag-tt2x-esV.js";
import "./ProductPackageSVG-Dc0Xoa7T.js";
import "./index-CATVIhQS.js";
import "./plus-dLW1Sukh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode);
const CATEGORY_ICONS = {
  milk: "🥛",
  paneer: "🍶",
  dahi: "🍶",
  cheese: "🧀",
  butter: "🧈",
  dessert: "🍨",
  ghee: "🫙",
  oil: "🫙",
  beverage: "🥤",
  plant: "🌿",
  sweet: "🍮",
  industrial: "🏭",
  yogurt: "🥣",
  cream: "🍦",
  lassi: "🥛"
};
function getCategoryIcon(name) {
  const lower = name.toLowerCase();
  for (const [key, emoji] of Object.entries(CATEGORY_ICONS)) {
    if (lower.includes(key)) return emoji;
  }
  return "🛒";
}
const PROMO_BANNERS = [
  {
    id: 1,
    title: "20% Off on Fresh Paneer",
    subtitle: "ताज़ा पनीर पर 20% छूट",
    badge: "LIMITED",
    from: "from-blue-600",
    via: "via-blue-500",
    to: "to-sky-400",
    emoji: "🧀",
    cta: "Shop Paneer",
    q: "paneer"
  },
  {
    id: 2,
    title: "Fresh Ghee Deals",
    subtitle: "शुद्ध देसी घी — सीधे डेयरी से",
    badge: "FRESH",
    from: "from-amber-500",
    via: "via-yellow-500",
    to: "to-orange-400",
    emoji: "🫙",
    cta: "Shop Ghee",
    q: "ghee"
  },
  {
    id: 3,
    title: "Buy 2 Get 1 Free Curd",
    subtitle: "दही — 2 खरीदें, 1 मुफ्त पाएं",
    badge: "HOT DEAL",
    from: "from-rose-500",
    via: "via-pink-500",
    to: "to-fuchsia-500",
    emoji: "🍶",
    cta: "Shop Curd",
    q: "curd"
  }
];
function CategorySkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-hidden px-4", children: ["c1", "c2", "c3", "c4", "c5", "c6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 flex-shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-16 h-16 rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-14" })
  ] }, k)) });
}
function ProductGridSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4", children: ["p1", "p2", "p3", "p4"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full rounded-lg" })
  ] }, k)) });
}
function CategoryCarousel({ categories }) {
  const navigate = useNavigate();
  const scrollRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: scrollRef,
      className: "flex gap-4 overflow-x-auto pb-2 px-4 snap-x snap-mandatory",
      style: { scrollbarWidth: "none" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            whileTap: { scale: 0.95 },
            onClick: () => navigate({ to: "/products" }),
            className: "flex flex-col items-center gap-2 flex-shrink-0 snap-start group cursor-pointer",
            "data-ocid": "category-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl group-hover:border-primary group-hover:bg-primary/20 transition-smooth shadow-sm", children: "🛒" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground whitespace-nowrap", children: "All" })
            ]
          }
        ),
        categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.06, duration: 0.3 },
            whileTap: { scale: 0.95 },
            onClick: () => navigate({ to: "/products", search: { category: String(cat.id) } }),
            className: "flex flex-col items-center gap-2 flex-shrink-0 snap-start group cursor-pointer",
            "data-ocid": `category-${cat.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-2xl group-hover:border-primary group-hover:bg-primary/10 transition-smooth shadow-sm", children: getCategoryIcon(cat.name) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground text-center leading-tight max-w-[72px]", children: cat.name })
            ]
          },
          cat.id.toString()
        ))
      ]
    }
  );
}
function ProductSection({
  title,
  titleHi,
  icon,
  products,
  isLoading,
  isError,
  linkLabel = "View All"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-display font-bold text-foreground flex items-center gap-2", children: [
          icon,
          " ",
          title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: titleHi })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          className: "flex items-center gap-1 text-primary text-sm font-semibold hover:underline",
          "data-ocid": "section-view-all",
          children: [
            linkLabel,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-muted-foreground text-sm", children: "Failed to load products. Please try again." }),
    isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGridSkeleton, {}),
    !isLoading && !isError && products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8 text-center text-muted-foreground text-sm", children: "No products available right now." }),
    !isLoading && !isError && products.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4", children: products.slice(0, 8).map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.07, duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
      },
      product.id.toString()
    )) })
  ] });
}
function PromoBanners() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-5 h-5 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Today's Offers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "आज के ऑफर" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: PROMO_BANNERS.map((banner, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: i === 0 ? -20 : i === 2 ? 20 : 0 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => navigate({ to: "/products" }),
            className: `relative w-full rounded-2xl p-4 bg-gradient-to-br ${banner.from} ${banner.via} ${banner.to} text-left overflow-hidden group card-hover shadow-elevated`,
            "data-ocid": `promo-banner-${banner.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs bg-white/20 text-white border-0 font-bold mb-2",
                  children: banner.badge
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-display font-bold text-base leading-tight", children: banner.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs mt-0.5", children: banner.subtitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-3 text-white text-sm font-semibold", children: [
                banner.cta,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 bottom-2 text-5xl opacity-20 group-hover:opacity-30 transition-opacity select-none", children: banner.emoji })
            ]
          }
        )
      },
      banner.id
    )) })
  ] });
}
function HomePage() {
  const categories = useCategories();
  const featured = useFeaturedProducts();
  const trending = useTrendingProducts();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden rounded-2xl mx-4 mt-4 mb-2 min-h-[180px] sm:min-h-[240px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/hero-dairy-banner.dim_800x400.jpg",
            alt: "Fresh dairy products from Yadav Dairy",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "relative z-10 p-5 sm:p-8 max-w-xs sm:max-w-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs font-semibold uppercase tracking-widest mb-1", children: "Yadav Dairy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-white font-display font-bold text-2xl sm:text-3xl leading-tight mb-1", children: [
              "Purely Delicious.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Daily Delight."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mb-4", children: "ताज़ा डेयरी — सीधे आपके दरवाज़े तक" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "btn-accent text-sm px-5 py-2 h-auto shadow-lg",
                onClick: () => navigate({ to: "/products" }),
                "data-ocid": "hero-cta-btn",
                children: [
                  "Explore Now ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 px-4 py-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-accent" }),
      "Free delivery on orders above ₹299"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-4 bg-card border-y border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: "Categories" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PromoBanners, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductSection,
      {
        title: "Fresh From Our Dairy",
        titleHi: "हमारी डेयरी से ताज़ा",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🥛" }),
        products: featured.data ?? [],
        isLoading: featured.isLoading,
        isError: featured.isError
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-4 rounded-2xl overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-blue-500 p-4 flex items-center justify-between gap-3", children: [
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
          "data-ocid": "delivery-strip-cta",
          children: "Order Now"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/20 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductSection,
      {
        title: "Trending Now",
        titleHi: "अभी सबसे ज़्यादा पसंद किए जा रहे",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-accent" }),
        products: trending.data ?? [],
        isLoading: trending.isLoading,
        isError: trending.isError,
        linkLabel: "See More"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border-t border-border px-4 py-6 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground text-center mb-4", children: "Why Choose Yadav Dairy?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
        { emoji: "🌿", title: "100% Pure", sub: "No additives" },
        { emoji: "🚚", title: "Fast Delivery", sub: "Same-day dispatch" },
        { emoji: "❄️", title: "Cold-Chain", sub: "Always fresh" },
        { emoji: "⭐", title: "Top Rated", sub: "4.8★ avg rating" }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center text-center gap-1 bg-muted/40 rounded-xl p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: item.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.sub })
          ]
        },
        item.title
      )) })
    ] })
  ] });
}
export {
  HomePage as default
};

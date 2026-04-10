import ProductCard from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useBestSellerProducts,
  useCategories,
  useFeaturedProducts,
  useFreshArrivals,
  useProducts,
  useTrendingProducts,
} from "@/hooks/use-backend";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import type { Category, Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flame,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  Truck,
  TruckIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useMemo, useRef } from "react";

// ─── Category color + icon mapping ───────────────────────────
const CATEGORY_STYLES: Record<
  string,
  { bg: string; border: string; emoji: string }
> = {
  milk: {
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    emoji: "🥛",
  },
  paneer: {
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    emoji: "🫕",
  },
  butter: {
    bg: "bg-yellow-50 dark:bg-yellow-950/40",
    border: "border-yellow-200 dark:border-yellow-800",
    emoji: "🧈",
  },
  ghee: {
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-200 dark:border-orange-800",
    emoji: "🫙",
  },
  curd: {
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    emoji: "🥣",
  },
  dahi: {
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    emoji: "🥣",
  },
  cheese: {
    bg: "bg-yellow-50 dark:bg-yellow-950/40",
    border: "border-yellow-200 dark:border-yellow-800",
    emoji: "🧀",
  },
  ice: {
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200 dark:border-cyan-800",
    emoji: "🍧",
  },
  cream: {
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    emoji: "🍦",
  },
  yogurt: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-800",
    emoji: "🥛",
  },
  lassi: {
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-200 dark:border-teal-800",
    emoji: "🫗",
  },
  beverage: {
    bg: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-200 dark:border-green-800",
    emoji: "🥤",
  },
  dessert: {
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    emoji: "🍮",
  },
  sweet: {
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-800",
    emoji: "🍡",
  },
  plant: {
    bg: "bg-lime-50 dark:bg-lime-950/40",
    border: "border-lime-200 dark:border-lime-800",
    emoji: "🌿",
  },
};

function getCategoryStyle(name: string) {
  const lower = name.toLowerCase();
  for (const [key, style] of Object.entries(CATEGORY_STYLES)) {
    if (lower.includes(key)) return style;
  }
  return {
    bg: "bg-secondary",
    border: "border-border",
    emoji: "🛒",
  };
}

const CAT_HINDI: Record<string, string> = {
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
  "Flavored Milk": "स्वादिष्ट दूध",
};
function getCategoryHindi(name: string): string {
  return CAT_HINDI[name] ?? "";
}

// ─── Skeletons ───────────────────────────────────────────────
function CategorySkeleton() {
  return (
    <div className="flex gap-3 overflow-hidden px-4">
      {Array.from({ length: 7 }, (_, i) => `sk-cat-${i}`).map((k) => (
        <div key={k} className="flex flex-col items-center gap-2 flex-shrink-0">
          <Skeleton className="w-[72px] h-[72px] rounded-2xl" />
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-3 w-10" />
        </div>
      ))}
    </div>
  );
}

function HScrollProductSkeleton() {
  return (
    <div className="flex gap-3 overflow-hidden px-4">
      {Array.from({ length: 4 }, (_, i) => `sk-p-${i}`).map((k) => (
        <div key={k} className="flex-shrink-0 w-40">
          <Skeleton className="aspect-square rounded-xl w-full" />
          <Skeleton className="h-3 w-3/4 mt-2" />
          <Skeleton className="h-3 w-1/2 mt-1" />
          <Skeleton className="h-8 w-full rounded-lg mt-2" />
        </div>
      ))}
    </div>
  );
}

// ─── Dairy Illustration SVG ───────────────────────────────────
function DairyIllustration() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full drop-shadow-lg"
    >
      {/* Milk Tetra Pack */}
      <rect
        x="20"
        y="30"
        width="44"
        height="72"
        rx="4"
        fill="white"
        fillOpacity="0.95"
      />
      <rect
        x="20"
        y="30"
        width="44"
        height="16"
        rx="4"
        fill="white"
        fillOpacity="0.85"
      />
      <polygon points="20,46 42,38 64,46" fill="white" fillOpacity="0.7" />
      <rect
        x="24"
        y="56"
        width="36"
        height="10"
        rx="2"
        fill="oklch(0.52 0.16 215)"
        fillOpacity="0.9"
      />
      <text
        x="42"
        y="64"
        textAnchor="middle"
        fontSize="6"
        fill="white"
        fontWeight="bold"
      >
        Yadav Dairy
      </text>
      <text
        x="42"
        y="82"
        textAnchor="middle"
        fontSize="9"
        fill="oklch(0.42 0.14 215)"
        fontWeight="bold"
      >
        MILK
      </text>
      <text
        x="42"
        y="93"
        textAnchor="middle"
        fontSize="5.5"
        fill="oklch(0.52 0.16 215)"
      >
        दूध
      </text>
      <text
        x="42"
        y="103"
        textAnchor="middle"
        fontSize="5"
        fill="oklch(0.58 0.08 50)"
      >
        500 ml
      </text>
      {/* Butter Box */}
      <rect
        x="90"
        y="68"
        width="70"
        height="38"
        rx="5"
        fill="white"
        fillOpacity="0.95"
      />
      <rect
        x="94"
        y="72"
        width="62"
        height="12"
        rx="3"
        fill="oklch(0.62 0.22 25)"
        fillOpacity="0.85"
      />
      <text
        x="125"
        y="81"
        textAnchor="middle"
        fontSize="7"
        fill="white"
        fontWeight="bold"
      >
        BUTTER
      </text>
      <text
        x="125"
        y="93"
        textAnchor="middle"
        fontSize="5.5"
        fill="oklch(0.45 0.14 215)"
        fontWeight="bold"
      >
        Yadav Dairy
      </text>
      <text
        x="125"
        y="101"
        textAnchor="middle"
        fontSize="5"
        fill="oklch(0.55 0.08 50)"
      >
        मक्खन · 500g
      </text>
      {/* Paneer Wrap */}
      <rect
        x="90"
        y="115"
        width="66"
        height="42"
        rx="5"
        fill="white"
        fillOpacity="0.9"
      />
      <rect
        x="93"
        y="118"
        width="60"
        height="10"
        rx="3"
        fill="oklch(0.55 0.12 50)"
        fillOpacity="0.8"
      />
      <text
        x="123"
        y="126"
        textAnchor="middle"
        fontSize="6.5"
        fill="white"
        fontWeight="bold"
      >
        PANEER
      </text>
      <text
        x="123"
        y="138"
        textAnchor="middle"
        fontSize="5.5"
        fill="oklch(0.45 0.14 215)"
        fontWeight="bold"
      >
        Yadav Dairy
      </text>
      <text
        x="123"
        y="148"
        textAnchor="middle"
        fontSize="5"
        fill="oklch(0.55 0.08 50)"
      >
        पनीर · 200g
      </text>
      {/* Ghee Jar */}
      <ellipse
        cx="40"
        cy="130"
        rx="24"
        ry="9"
        fill="white"
        fillOpacity="0.75"
      />
      <rect
        x="16"
        y="121"
        width="48"
        height="40"
        rx="10"
        fill="white"
        fillOpacity="0.9"
      />
      <ellipse
        cx="40"
        cy="161"
        rx="24"
        ry="8"
        fill="white"
        fillOpacity="0.65"
      />
      <rect
        x="20"
        y="124"
        width="40"
        height="11"
        rx="3"
        fill="oklch(0.68 0.20 70)"
        fillOpacity="0.85"
      />
      <text
        x="40"
        y="133"
        textAnchor="middle"
        fontSize="6.5"
        fill="white"
        fontWeight="bold"
      >
        GHEE
      </text>
      <text
        x="40"
        y="147"
        textAnchor="middle"
        fontSize="5.5"
        fill="oklch(0.45 0.14 215)"
        fontWeight="bold"
      >
        Yadav Dairy
      </text>
      <text
        x="40"
        y="156"
        textAnchor="middle"
        fontSize="5"
        fill="oklch(0.55 0.08 50)"
      >
        घी · 1 Ltr
      </text>
      {/* Stars */}
      <text x="78" y="45" fontSize="16" fillOpacity="0.55" fill="white">
        ✦
      </text>
      <text x="158" y="55" fontSize="11" fillOpacity="0.4" fill="white">
        ✦
      </text>
      <text x="10" y="110" fontSize="10" fillOpacity="0.35" fill="white">
        ✦
      </text>
      <circle cx="78" cy="120" r="3.5" fill="white" fillOpacity="0.35" />
      <circle cx="162" cy="140" r="5" fill="white" fillOpacity="0.25" />
    </svg>
  );
}

// ─── Category Carousel ───────────────────────────────────────
function CategoryCarousel({ categories }: { categories: Category[] }) {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 220 : -220,
      behavior: "smooth",
    });
  }, []);

  const allCategories = [
    {
      id: "all",
      name: "All",
      nameHindi: "सभी",
      style: { bg: "bg-primary/10", border: "border-primary/30", emoji: "🛒" },
    },
    ...categories.map((c) => ({
      id: c.id.toString(),
      name: c.name,
      nameHindi: getCategoryHindi(c.name),
      style: getCategoryStyle(c.name),
    })),
  ];

  return (
    <div className="relative group/carousel">
      <button
        type="button"
        aria-label="Scroll categories left"
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors -ml-2 opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        type="button"
        aria-label="Scroll categories right"
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors -mr-2 opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-1 px-4 sm:px-8 snap-x"
        style={{ scrollbarWidth: "none" }}
      >
        {allCategories.map((cat, i) => (
          <motion.button
            key={cat.id}
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduce ? 0 : i * 0.04, duration: 0.3 }}
            whileTap={{ scale: shouldReduce ? 1 : 0.92 }}
            onClick={() =>
              cat.id === "all"
                ? navigate({ to: "/products" })
                : navigate({ to: "/products", search: { category: cat.id } })
            }
            className="flex flex-col items-center gap-1.5 flex-shrink-0 snap-start group cursor-pointer min-w-[72px]"
            data-ocid={`category-${cat.id}`}
          >
            <div
              className={`w-[72px] h-[72px] rounded-2xl ${cat.style.bg} border-2 ${cat.style.border} flex items-center justify-center text-3xl group-hover:border-primary group-hover:scale-105 transition-smooth shadow-sm`}
            >
              {cat.style.emoji}
            </div>
            <span className="text-xs font-semibold text-foreground text-center leading-tight max-w-[80px] line-clamp-1">
              {cat.name}
            </span>
            {cat.nameHindi && (
              <span className="text-[10px] text-muted-foreground leading-tight text-center max-w-[80px]">
                {cat.nameHindi}
              </span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Horizontal Product Carousel ─────────────────────────────
interface HScrollSectionProps {
  title: string;
  titleHi: string;
  icon: React.ReactNode;
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  sectionBg?: string;
}

function HScrollSection({
  title,
  titleHi,
  icon,
  products,
  isLoading,
  isError,
  sectionBg = "bg-background",
}: HScrollSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const scroll = useCallback((dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 280 : -280,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className={`py-5 ${sectionBg}`}>
      <div className="flex items-center justify-between px-4 mb-4">
        <div>
          <h2 className="text-[1.1rem] font-display font-bold text-foreground flex items-center gap-2 leading-tight">
            {icon}
            <span>{title}</span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">{titleHi}</p>
        </div>
        <Link
          to="/products"
          className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline transition-colors flex-shrink-0"
          data-ocid="section-view-all"
        >
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {isError && (
        <p className="px-4 text-sm text-muted-foreground">
          Failed to load products.
        </p>
      )}
      {isLoading && <HScrollProductSkeleton />}
      {!isLoading && !isError && products.length === 0 && (
        <p className="px-4 text-sm text-muted-foreground">
          No products available right now.
        </p>
      )}

      {!isLoading && !isError && products.length > 0 && (
        <div className="relative group/hscroll">
          <button
            type="button"
            aria-label={`Scroll ${title} left`}
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors opacity-0 group-hover/hscroll:opacity-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label={`Scroll ${title} right`}
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-card border border-border rounded-full shadow-md hover:bg-muted transition-colors opacity-0 group-hover/hscroll:opacity-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-2 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {products.slice(0, 12).map((product, i) => (
              <motion.div
                key={product.id.toString()}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: shouldReduce ? 0 : i * 0.05,
                  duration: 0.3,
                }}
                className="flex-shrink-0 w-[160px] snap-start"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Promo Banner ─────────────────────────────────────────────
interface PromoBannerProps {
  gradient: string;
  badge: string;
  title: string;
  titleHi: string;
  sub: string;
  icon: React.ReactNode;
  cta: string;
  to: string;
}

function PromoBanner({
  gradient,
  badge,
  title,
  titleHi,
  sub,
  icon,
  cta,
  to,
}: PromoBannerProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`relative rounded-2xl overflow-hidden p-4 bg-gradient-to-br ${gradient} flex items-center justify-between gap-3`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <Badge className="text-[9px] bg-white/25 text-white border-0 font-bold mb-1 backdrop-blur-sm px-2 py-0">
            {badge}
          </Badge>
          <p className="text-white font-display font-bold text-base leading-tight">
            {title}
          </p>
          <p className="text-white/85 text-xs font-medium">{titleHi}</p>
          <p className="text-white/70 text-xs mt-0.5">{sub}</p>
        </div>
      </div>
      <Button
        size="sm"
        className="bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs font-bold flex-shrink-0 backdrop-blur-sm"
        onClick={() => navigate({ to })}
        data-ocid={`promo-cta-${badge.toLowerCase()}`}
      >
        {cta}
      </Button>
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10" />
    </div>
  );
}

// ─── Features Row ─────────────────────────────────────────────
const FEATURES = [
  {
    icon: Leaf,
    title: "100% Pure & Natural",
    titleHi: "शुद्ध और प्राकृतिक",
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/40",
  },
  {
    icon: TruckIcon,
    title: "Fresh Daily Delivery",
    titleHi: "रोज़ ताज़ा डिलीवरी",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Since 2010",
    titleHi: "2010 से विश्वसनीय",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/40",
  },
  {
    icon: Tag,
    title: "Cash on Delivery",
    titleHi: "नकद भुगतान उपलब्ध",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

function FeaturesRow() {
  return (
    <section className="py-5 bg-card border-y border-border">
      <h2 className="text-center text-lg font-display font-bold text-foreground mb-4 px-4">
        Why Yadav Dairy?
        <span className="block text-xs font-body text-muted-foreground font-normal mt-0.5">
          हम क्यों चुनें?
        </span>
      </h2>
      <div
        className="flex gap-3 overflow-x-auto pb-1 px-4 snap-x sm:grid sm:grid-cols-4 sm:overflow-visible"
        style={{ scrollbarWidth: "none" }}
      >
        {FEATURES.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="flex-shrink-0 w-44 sm:w-auto snap-start flex flex-col items-center text-center gap-2 bg-muted/40 rounded-2xl p-4"
            >
              <div
                className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center`}
              >
                <Icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <p className="text-sm font-semibold text-foreground leading-snug">
                {f.title}
              </p>
              <p className="text-[11px] text-muted-foreground">{f.titleHi}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Recently Viewed ─────────────────────────────────────────
function RecentlyViewedSection({ allProducts }: { allProducts: Product[] }) {
  const { recentlyViewedIds } = useRecentlyViewed();
  const scrollRef = useRef<HTMLDivElement>(null);

  const recentProducts = useMemo(() => {
    if (!recentlyViewedIds.length || !allProducts.length) return [];
    return recentlyViewedIds
      .map((id) => allProducts.find((p) => p.id.toString() === id))
      .filter((p): p is Product => !!p)
      .slice(0, 8);
  }, [recentlyViewedIds, allProducts]);

  if (!recentProducts.length) return null;

  return (
    <section className="py-5 bg-card border-t border-border">
      <div className="flex items-center justify-between px-4 mb-4">
        <div>
          <h2 className="text-[1.1rem] font-display font-bold text-foreground flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Recently Viewed
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">हाल ही में देखे गए</p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 px-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {recentProducts.map((product, i) => (
          <motion.div
            key={product.id.toString()}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className="flex-shrink-0 w-[160px] snap-start"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Main Home Page ──────────────────────────────────────────
export default function HomePage() {
  const categories = useCategories();
  const featured = useFeaturedProducts();
  const trending = useTrendingProducts();
  const bestSellers = useBestSellerProducts();
  const freshArrivals = useFreshArrivals();
  const allProducts = useProducts();
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();

  return (
    <div className="pb-16">
      {/* ── Hero Banner ── */}
      <section className="relative overflow-hidden mx-3 mt-3 mb-1 rounded-2xl min-h-[200px] sm:min-h-[240px] bg-gradient-to-br from-primary via-[oklch(0.52_0.18_220)] to-[oklch(0.48_0.2_200)]">
        <img
          src="/assets/generated/hero-dairy-banner.dim_800x400.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20" />

        {/* Offer badge */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: -10 }}
          animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="absolute top-3 right-[42%] sm:right-[38%] z-20"
        >
          <div className="bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg pulse-accent">
            10% OFF
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 p-5 sm:p-8 max-w-[58%] sm:max-w-sm"
        >
          <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            🐄 Yadav Dairy
          </p>
          <h1 className="text-white font-display font-bold text-2xl sm:text-3xl leading-tight mb-1">
            Pure Yadav
            <br />
            Dairy
          </h1>
          <p className="text-white/80 text-sm mb-1">
            Farm-fresh dairy delivered to your door
          </p>
          <p className="text-white/65 text-xs mb-4">आपके दरवाज़े तक ताज़ा डेयरी</p>
          <div className="flex flex-wrap gap-2">
            <Button
              className="btn-accent text-sm px-5 h-9 shadow-lg"
              onClick={() => navigate({ to: "/products" })}
              data-ocid="hero-shop-now-btn"
            >
              Shop Now <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </motion.div>

        {/* Dairy illustration */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
          animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute right-0 top-0 bottom-0 w-[44%] sm:w-2/5 flex items-center justify-end pr-2 float-animation"
        >
          <DairyIllustration />
        </motion.div>
      </section>

      {/* ── Delivery badges ── */}
      <div
        className="flex items-center gap-2 px-4 py-2 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0">
          <Truck className="w-3.5 h-3.5" />
          Free delivery above ₹299
        </div>
        <div className="flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0">
          <Star className="w-3.5 h-3.5 fill-accent" />
          Same-day dispatch before 10 AM
        </div>
        <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0">
          <Leaf className="w-3.5 h-3.5" />
          100% Natural & Pure
        </div>
      </div>

      {/* ── Categories ── */}
      <section className="py-4 bg-card border-y border-border">
        <div className="flex items-center justify-between px-4 mb-3">
          <div>
            <h2 className="text-lg font-display font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-xs text-muted-foreground">श्रेणी के अनुसार खरीदें</p>
          </div>
          <Link
            to="/products"
            className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline"
            data-ocid="categories-view-all"
          >
            See all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        {categories.isLoading ? (
          <CategorySkeleton />
        ) : categories.isError ? (
          <p className="text-sm text-muted-foreground px-4">
            Could not load categories.
          </p>
        ) : (
          <CategoryCarousel categories={categories.data ?? []} />
        )}
      </section>

      {/* ── Trending Products ── */}
      <HScrollSection
        title="Trending Now"
        titleHi="अभी सबसे ज़्यादा पसंद"
        icon={<Flame className="w-5 h-5 text-accent" />}
        products={trending.data ?? []}
        isLoading={trending.isLoading}
        isError={trending.isError}
        sectionBg="bg-background"
      />

      {/* ── Promo Banner 1 ── */}
      <div className="px-4 pb-4 bg-background">
        <PromoBanner
          gradient="from-[oklch(0.45_0.2_25)] via-[oklch(0.55_0.22_20)] to-[oklch(0.62_0.22_25)]"
          badge="OFFER"
          title="20% Off on all Paneer"
          titleHi="सभी पनीर उत्पादों पर 20% छूट"
          sub="Use code: PANEER20"
          icon={<Tag className="w-5 h-5 text-white" />}
          cta="Shop Paneer"
          to="/products"
        />
      </div>

      {/* ── Best Sellers ── */}
      <HScrollSection
        title="Best Sellers"
        titleHi="सबसे ज़्यादा बिकने वाले"
        icon={<Star className="w-5 h-5 text-yellow-500 fill-yellow-400" />}
        products={bestSellers.data ?? []}
        isLoading={bestSellers.isLoading}
        isError={bestSellers.isError}
        sectionBg="bg-muted/30"
      />

      {/* ── Promo Banner 2 ── */}
      <div className="px-4 pb-4 bg-muted/30">
        <PromoBanner
          gradient="from-primary via-[oklch(0.52_0.18_220)] to-[oklch(0.58_0.14_200)]"
          badge="FREE DELIVERY"
          title="Free Delivery"
          titleHi="₹500 से ऊपर मुफ़्त डिलीवरी"
          sub="On orders above ₹500"
          icon={<Truck className="w-5 h-5 text-white" />}
          cta="Order Now"
          to="/products"
        />
      </div>

      {/* ── Fresh Arrivals ── */}
      <HScrollSection
        title="Fresh Arrivals"
        titleHi="नई आवक"
        icon={
          <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
        }
        products={freshArrivals.data ?? []}
        isLoading={freshArrivals.isLoading}
        isError={freshArrivals.isError}
        sectionBg="bg-background"
      />

      {/* ── Recommended ── */}
      <HScrollSection
        title="Recommended For You"
        titleHi="आपके लिए अनुशंसित"
        icon={<span className="text-xl">🥛</span>}
        products={featured.data ?? []}
        isLoading={featured.isLoading}
        isError={featured.isError}
        sectionBg="bg-muted/20"
      />

      {/* ── Features Row ── */}
      <FeaturesRow />

      {/* ── Recently Viewed ── */}
      {allProducts.isLoading ? (
        <section className="py-5 bg-card border-t border-border">
          <div className="px-4 mb-4">
            <Skeleton className="h-6 w-44" />
          </div>
          <HScrollProductSkeleton />
        </section>
      ) : (
        <RecentlyViewedSection allProducts={allProducts.data ?? []} />
      )}

      {/* ── Mid-page Delivery CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-4 my-4 rounded-2xl overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent p-5 flex items-center justify-between gap-3"
        data-ocid="mid-delivery-banner"
      >
        <div>
          <p className="text-white font-display font-bold text-base">
            🚚 Same-Day Delivery
          </p>
          <p className="text-white/80 text-xs mt-0.5">
            Order before 10 AM • आज ही पाएं
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="text-primary font-bold text-xs flex-shrink-0"
          onClick={() => navigate({ to: "/products" })}
          data-ocid="delivery-cta-btn"
        >
          Order Now
        </Button>
      </motion.div>
    </div>
  );
}

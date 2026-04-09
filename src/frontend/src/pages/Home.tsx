import ProductCard from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCategories,
  useFeaturedProducts,
  useTrendingProducts,
} from "@/hooks/use-backend";
import type { Category, Product } from "@/types";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Flame, Star, Tag } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

// ── Category icons ──────────────────────────────────────────
const CATEGORY_ICONS: Record<string, string> = {
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
  lassi: "🥛",
};

function getCategoryIcon(name: string): string {
  const lower = name.toLowerCase();
  for (const [key, emoji] of Object.entries(CATEGORY_ICONS)) {
    if (lower.includes(key)) return emoji;
  }
  return "🛒";
}

// ── Promo banners ───────────────────────────────────────────
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
    q: "paneer",
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
    q: "ghee",
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
    q: "curd",
  },
];

// ── Skeletons ───────────────────────────────────────────────
function CategorySkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden px-4">
      {["c1", "c2", "c3", "c4", "c5", "c6"].map((k) => (
        <div key={k} className="flex flex-col items-center gap-2 flex-shrink-0">
          <Skeleton className="w-16 h-16 rounded-full" />
          <Skeleton className="h-3 w-14" />
        </div>
      ))}
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4">
      {["p1", "p2", "p3", "p4"].map((k) => (
        <div key={k} className="flex flex-col gap-2">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-8 w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
}

// ── Category Carousel ────────────────────────────────────────
function CategoryCarousel({ categories }: { categories: Category[] }) {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto pb-2 px-4 snap-x snap-mandatory"
      style={{ scrollbarWidth: "none" }}
    >
      <motion.button
        type="button"
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate({ to: "/products" })}
        className="flex flex-col items-center gap-2 flex-shrink-0 snap-start group cursor-pointer"
        data-ocid="category-all"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-2xl group-hover:border-primary group-hover:bg-primary/20 transition-smooth shadow-sm">
          🛒
        </div>
        <span className="text-xs font-medium text-foreground whitespace-nowrap">
          All
        </span>
      </motion.button>

      {categories.map((cat, i) => (
        <motion.button
          key={cat.id.toString()}
          type="button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            navigate({ to: "/products", search: { category: String(cat.id) } })
          }
          className="flex flex-col items-center gap-2 flex-shrink-0 snap-start group cursor-pointer"
          data-ocid={`category-${cat.id}`}
        >
          <div className="w-16 h-16 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-2xl group-hover:border-primary group-hover:bg-primary/10 transition-smooth shadow-sm">
            {getCategoryIcon(cat.name)}
          </div>
          <span className="text-xs font-medium text-foreground text-center leading-tight max-w-[72px]">
            {cat.name}
          </span>
        </motion.button>
      ))}
    </div>
  );
}

// ── Product Section ──────────────────────────────────────────
function ProductSection({
  title,
  titleHi,
  icon,
  products,
  isLoading,
  isError,
  linkLabel = "View All",
}: {
  title: string;
  titleHi: string;
  icon: React.ReactNode;
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  linkLabel?: string;
}) {
  return (
    <section className="py-5">
      <div className="flex items-center justify-between px-4 mb-4">
        <div>
          <h2 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
            {icon} {title}
          </h2>
          <p className="text-xs text-muted-foreground">{titleHi}</p>
        </div>
        <Link
          to="/products"
          className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
          data-ocid="section-view-all"
        >
          {linkLabel} <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {isError && (
        <div className="px-4 py-8 text-center text-muted-foreground text-sm">
          Failed to load products. Please try again.
        </div>
      )}
      {isLoading && <ProductGridSkeleton />}
      {!isLoading && !isError && products.length === 0 && (
        <div className="px-4 py-8 text-center text-muted-foreground text-sm">
          No products available right now.
        </div>
      )}
      {!isLoading && !isError && products.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-4">
          {products.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.id.toString()}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

// ── Promo Banners ────────────────────────────────────────────
function PromoBanners() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-5">
      <div className="flex items-center gap-2 mb-4">
        <Tag className="w-5 h-5 text-accent" />
        <h2 className="text-xl font-display font-bold text-foreground">
          Today's Offers
        </h2>
        <span className="text-xs text-muted-foreground ml-1">आज के ऑफर</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PROMO_BANNERS.map((banner, i) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
          >
            <button
              type="button"
              onClick={() => navigate({ to: "/products" })}
              className={`relative w-full rounded-2xl p-4 bg-gradient-to-br ${banner.from} ${banner.via} ${banner.to} text-left overflow-hidden group card-hover shadow-elevated`}
              data-ocid={`promo-banner-${banner.id}`}
            >
              <Badge
                variant="secondary"
                className="text-xs bg-white/20 text-white border-0 font-bold mb-2"
              >
                {banner.badge}
              </Badge>
              <p className="text-white font-display font-bold text-base leading-tight">
                {banner.title}
              </p>
              <p className="text-white/80 text-xs mt-0.5">{banner.subtitle}</p>
              <div className="flex items-center gap-1 mt-3 text-white text-sm font-semibold">
                {banner.cta}{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="absolute right-3 bottom-2 text-5xl opacity-20 group-hover:opacity-30 transition-opacity select-none">
                {banner.emoji}
              </span>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Main Home Page ───────────────────────────────────────────
export default function HomePage() {
  const categories = useCategories();
  const featured = useFeaturedProducts();
  const trending = useTrendingProducts();
  const navigate = useNavigate();

  return (
    <div className="pb-10">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl mx-4 mt-4 mb-2 min-h-[180px] sm:min-h-[240px]">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-dairy-banner.dim_800x400.jpg"
            alt="Fresh dairy products from Yadav Dairy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 p-5 sm:p-8 max-w-xs sm:max-w-sm"
        >
          <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">
            Yadav Dairy
          </p>
          <h1 className="text-white font-display font-bold text-2xl sm:text-3xl leading-tight mb-1">
            Purely Delicious.
            <br />
            Daily Delight.
          </h1>
          <p className="text-white/80 text-sm mb-4">
            ताज़ा डेयरी — सीधे आपके दरवाज़े तक
          </p>
          <Button
            className="btn-accent text-sm px-5 py-2 h-auto shadow-lg"
            onClick={() => navigate({ to: "/products" })}
            data-ocid="hero-cta-btn"
          >
            Explore Now <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </section>

      {/* Delivery badge */}
      <div className="flex items-center gap-2 px-4 py-2 mb-1">
        <div className="flex items-center gap-1.5 bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-semibold">
          <Star className="w-3.5 h-3.5 fill-accent" />
          Free delivery on orders above ₹299
        </div>
      </div>

      {/* Categories */}
      <section className="py-4 bg-card border-y border-border">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-display font-bold text-foreground">
            Categories
          </h2>
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

      {/* Promo Banners */}
      <div className="bg-muted/30">
        <PromoBanners />
      </div>

      {/* Featured Products */}
      <div className="bg-background">
        <ProductSection
          title="Fresh From Our Dairy"
          titleHi="हमारी डेयरी से ताज़ा"
          icon={<span className="text-xl">🥛</span>}
          products={featured.data ?? []}
          isLoading={featured.isLoading}
          isError={featured.isError}
        />
      </div>

      {/* Mid-page delivery strip */}
      <div className="mx-4 rounded-2xl overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-blue-500 p-4 flex items-center justify-between gap-3">
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
          data-ocid="delivery-strip-cta"
        >
          Order Now
        </Button>
      </div>

      {/* Trending Products */}
      <div className="bg-muted/20 mt-4">
        <ProductSection
          title="Trending Now"
          titleHi="अभी सबसे ज़्यादा पसंद किए जा रहे"
          icon={<Flame className="w-5 h-5 text-accent" />}
          products={trending.data ?? []}
          isLoading={trending.isLoading}
          isError={trending.isError}
          linkLabel="See More"
        />
      </div>

      {/* Trust strip */}
      <section className="bg-card border-t border-border px-4 py-6 mt-4">
        <h2 className="text-lg font-display font-bold text-foreground text-center mb-4">
          Why Choose Yadav Dairy?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { emoji: "🌿", title: "100% Pure", sub: "No additives" },
            { emoji: "🚚", title: "Fast Delivery", sub: "Same-day dispatch" },
            { emoji: "❄️", title: "Cold-Chain", sub: "Always fresh" },
            { emoji: "⭐", title: "Top Rated", sub: "4.8★ avg rating" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-1 bg-muted/40 rounded-xl p-3"
            >
              <span className="text-3xl">{item.emoji}</span>
              <p className="text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

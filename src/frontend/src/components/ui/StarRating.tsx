import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

export default function StarRating({
  rating,
  size = "md",
  showValue = false,
}: StarRatingProps) {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clampedRating);
  const hasHalf = clampedRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeClass = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }[size];

  const textClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }[size];

  const stars = [
    ...Array.from({ length: fullStars }, (_, i) => ({
      type: "full" as const,
      key: `full-${i}`,
    })),
    ...(hasHalf ? [{ type: "half" as const, key: "half" }] : []),
    ...Array.from({ length: emptyStars }, (_, i) => ({
      type: "empty" as const,
      key: `empty-${i}`,
    })),
  ];

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rating: ${clampedRating.toFixed(1)} out of 5`}
    >
      {stars.map((star) => {
        if (star.type === "full") {
          return (
            <Star
              key={star.key}
              className={cn(sizeClass, "fill-yellow-400 text-yellow-400")}
            />
          );
        }
        if (star.type === "half") {
          return (
            <StarHalf
              key={star.key}
              className={cn(sizeClass, "fill-yellow-400 text-yellow-400")}
            />
          );
        }
        return (
          <Star
            key={star.key}
            className={cn(sizeClass, "text-muted-foreground fill-none")}
          />
        );
      })}
      {showValue && (
        <span className={cn(textClass, "ml-1 font-medium text-foreground")}>
          {clampedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

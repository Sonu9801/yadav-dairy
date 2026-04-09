import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CategoryBadgeProps {
  children: ReactNode;
  emoji?: string;
  variant?: "default" | "active" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function CategoryBadge({
  children,
  emoji,
  variant = "default",
  className,
  onClick,
}: CategoryBadgeProps) {
  const baseClass =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-smooth cursor-pointer select-none";

  const variantClass = {
    default: "bg-secondary text-secondary-foreground hover:bg-muted",
    active: "bg-primary text-primary-foreground shadow-card",
    outline: "border border-border text-foreground hover:bg-muted bg-card",
  }[variant];

  const Tag = onClick ? "button" : "span";

  return (
    <Tag
      className={cn(baseClass, variantClass, className)}
      onClick={onClick}
      data-ocid="category-badge"
    >
      {emoji && <span className="text-base leading-none">{emoji}</span>}
      {children}
    </Tag>
  );
}

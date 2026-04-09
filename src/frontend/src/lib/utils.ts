import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: bigint): string {
  const num = Number(amount);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function calculateDiscount(
  price: bigint,
  originalPrice: bigint,
): number {
  if (originalPrice <= price || originalPrice === BigInt(0)) return 0;
  return Math.round(
    ((Number(originalPrice) - Number(price)) / Number(originalPrice)) * 100,
  );
}

export function formatRelativeTime(timestamp: bigint): string {
  // Backend timestamps are in nanoseconds
  const ms = Number(timestamp) / 1_000_000;
  const diff = Date.now() - ms;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  return `${Math.floor(months / 12)} year${Math.floor(months / 12) > 1 ? "s" : ""} ago`;
}

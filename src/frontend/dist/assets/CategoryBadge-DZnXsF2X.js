import { j as jsxRuntimeExports, E as cn } from "./index-S-wpKozw.js";
function CategoryBadge({
  children,
  emoji,
  variant = "default",
  className,
  onClick
}) {
  const baseClass = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-smooth cursor-pointer select-none";
  const variantClass = {
    default: "bg-secondary text-secondary-foreground hover:bg-muted",
    active: "bg-primary text-primary-foreground shadow-card",
    outline: "border border-border text-foreground hover:bg-muted bg-card"
  }[variant];
  const Tag = onClick ? "button" : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Tag,
    {
      className: cn(baseClass, variantClass, className),
      onClick,
      "data-ocid": "category-badge",
      children: [
        emoji && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: emoji }),
        children
      ]
    }
  );
}
export {
  CategoryBadge as C
};

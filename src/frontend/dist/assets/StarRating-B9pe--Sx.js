import { c as createLucideIcon, j as jsxRuntimeExports, v as cn } from "./index-Bpk1okSM.js";
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
      d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
      key: "2ksp49"
    }
  ]
];
const StarHalf = createLucideIcon("star-half", __iconNode$1);
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function StarRating({
  rating,
  size = "md",
  showValue = false
}) {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clampedRating);
  const hasHalf = clampedRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  const sizeClass = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }[size];
  const textClass = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }[size];
  const stars = [
    ...Array.from({ length: fullStars }, (_, i) => ({
      type: "full",
      key: `full-${i}`
    })),
    ...hasHalf ? [{ type: "half", key: "half" }] : [],
    ...Array.from({ length: emptyStars }, (_, i) => ({
      type: "empty",
      key: `empty-${i}`
    }))
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `Rating: ${clampedRating.toFixed(1)} out of 5`,
      children: [
        stars.map((star) => {
          if (star.type === "full") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: cn(sizeClass, "fill-yellow-400 text-yellow-400")
              },
              star.key
            );
          }
          if (star.type === "half") {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              StarHalf,
              {
                className: cn(sizeClass, "fill-yellow-400 text-yellow-400")
              },
              star.key
            );
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: cn(sizeClass, "text-muted-foreground fill-none")
            },
            star.key
          );
        }),
        showValue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(textClass, "ml-1 font-medium text-foreground"), children: clampedRating.toFixed(1) })
      ]
    }
  );
}
export {
  Star as S,
  StarRating as a
};

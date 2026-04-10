import { c as createLucideIcon, C as create, D as persist } from "./index-S-wpKozw.js";
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const MAX_ITEMS = 10;
const useRecentlyViewed = create()(
  persist(
    (set, get) => ({
      recentlyViewedIds: [],
      addRecentlyViewed: (productId) => {
        const { recentlyViewedIds } = get();
        const filtered = recentlyViewedIds.filter((id) => id !== productId);
        const updated = [productId, ...filtered].slice(0, MAX_ITEMS);
        set({ recentlyViewedIds: updated });
      },
      clearRecentlyViewed: () => set({ recentlyViewedIds: [] })
    }),
    {
      name: "yadav-dairy-recently-viewed",
      partialize: (state) => ({ recentlyViewedIds: state.recentlyViewedIds })
    }
  )
);
export {
  Tag as T,
  useRecentlyViewed as u
};

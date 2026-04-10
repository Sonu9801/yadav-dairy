import { create } from "zustand";
import { persist } from "zustand/middleware";

const MAX_ITEMS = 10;

interface RecentlyViewedState {
  recentlyViewedIds: string[];
  addRecentlyViewed: (productId: string) => void;
  clearRecentlyViewed: () => void;
}

export const useRecentlyViewed = create<RecentlyViewedState>()(
  persist(
    (set, get) => ({
      recentlyViewedIds: [],

      addRecentlyViewed: (productId: string) => {
        const { recentlyViewedIds } = get();
        const filtered = recentlyViewedIds.filter((id) => id !== productId);
        const updated = [productId, ...filtered].slice(0, MAX_ITEMS);
        set({ recentlyViewedIds: updated });
      },

      clearRecentlyViewed: () => set({ recentlyViewedIds: [] }),
    }),
    {
      name: "yadav-dairy-recently-viewed",
      partialize: (state) => ({ recentlyViewedIds: state.recentlyViewedIds }),
    },
  ),
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  wishlistItems: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlistItems: [],

      addToWishlist: (productId: string) => {
        const { wishlistItems } = get();
        if (!wishlistItems.includes(productId)) {
          set({ wishlistItems: [...wishlistItems, productId] });
        }
      },

      removeFromWishlist: (productId: string) => {
        set({
          wishlistItems: get().wishlistItems.filter((id) => id !== productId),
        });
      },

      isWishlisted: (productId: string) => {
        return get().wishlistItems.includes(productId);
      },

      clearWishlist: () => set({ wishlistItems: [] }),
    }),
    {
      name: "yadav-dairy-wishlist",
      partialize: (state) => ({ wishlistItems: state.wishlistItems }),
    },
  ),
);

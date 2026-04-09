import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, CartState, Product } from "../types";

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        const { items } = get();
        const existing = items.find((i) => i.productId === product.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.productId === product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i,
            ),
          });
        } else {
          const newItem: CartItem = {
            productId: product.id,
            productName: product.nameEn,
            productNameHi: product.nameHi,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: 1,
            packagingType: product.packagingType,
          };
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (productId: bigint) => {
        set({ items: get().items.filter((i) => i.productId !== productId) });
      },

      updateQuantity: (productId: bigint, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i,
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      get cartTotal() {
        return get().items.reduce(
          (sum, item) => sum + item.price * BigInt(item.quantity),
          BigInt(0),
        );
      },

      get cartCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: "yadav-dairy-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

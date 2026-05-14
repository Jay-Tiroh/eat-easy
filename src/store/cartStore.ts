// store/useCartStore.ts
import { Order } from "@/constants/types";
import { create } from "zustand";

type CartStore = {
  cart: Record<string, Order>; // keyed by dish name
  addToCart: (order: Order) => void;
  updateOrder: (name: string, updates: Partial<Order>) => void;
  removeFromCart: (name: string) => void;
  getOrder: (name: string) => Order | undefined;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: {},

  addToCart: (order) =>
    set((state) => ({
      cart: { ...state.cart, [order.name]: order },
    })),

  updateOrder: (name, updates) =>
    set((state) => ({
      cart: {
        ...state.cart,
        [name]: { ...state.cart[name], ...updates },
      },
    })),

  removeFromCart: (name) =>
    set((state) => {
      const { [name]: _, ...rest } = state.cart;
      return { cart: rest };
    }),

  getOrder: (name) => get().cart[name],

  clearCart: () => set({ cart: {} }),
}));

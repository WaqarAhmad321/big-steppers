import { Product } from "@/types";
import { StateCreator } from "zustand";

type CartState = {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
};

type CartAction = {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

export type CartSlice = CartState & CartAction;

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const createCartSlice: StateCreator<CartSlice> = (set) => ({
  ...initialState,
  addToCart: (product) => {
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity++;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.totalQuantity++;
      state.totalPrice += product.price;
    });
  },
  removeFromCart: (productId) => {
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === productId
      );

      if (existingProductIndex !== -1) {
        state.totalQuantity -= state.products[existingProductIndex].quantity;
        state.totalPrice -=
          state.products[existingProductIndex].price *
          state.products[existingProductIndex].quantity;

        state.products.splice(existingProductIndex, 1);
      }
    });
  },
  clearCart: () => {
    set({
      products: [],
      totalQuantity: 0,
      totalPrice: 0,
    });
  },
});

import { create } from "zustand";

interface Cart {
  cart: any[];
  isLoading: boolean;
  count: number;
  isCartDrawerOpen: boolean;
  toggleCartDrawer: () => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  getCart: () => void;
  addToCart: ({
    productId,
    quantity,
  }: {
    productId: number;
    quantity: number;
  }) => void;
  removeFromCart: ({ productKey }: { productKey: string }) => void;
  updateCart: ({
    productKey,
    quantity,
  }: {
    productKey: string;
    quantity: number;
  }) => void;
}

const useCartState = create<Cart>((set) => ({
  cart: [],
  isCartDrawerOpen: false,
  isLoading: false,
  count: 0,
  getCart: async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
      cache: "no-store"
    });
    const data = await res.json();
    set({ cart: data, isLoading: false });
  },
  addToCart: async ({ productId, quantity = 1 }) => {
    try {
      set({ isLoading: true });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/cart/add-item`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cart-Token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidF9kNGM2N2FmYmFhMjBmZDlkMGFmOGMxZDhjNmNlN2YiLCJleHAiOjE3MzQwMTY3MTQsImlzcyI6IndjXC9zdG9yZVwvdjEiLCJpYXQiOjE3MzM4NDM5MTR9.6Rv3Kd0R8yHkzvsdq6Xezcm3NSfE5BOeAnyl6RmuAaI",
          },
          credentials: "include",
          body: JSON.stringify({
            id: productId,
            quantity: quantity,
          }),
        }
      );
      const data = await res.json();
      set({
        cart: data,
        isLoading: false,
        count: data.items_count,
        isCartDrawerOpen: true,
      });
    } catch (error) {
      set({ isLoading: true });
      console.log("error", error);
    }
  },
  removeFromCart: async ({ productKey }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cart/remove-item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cart-Token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidF9kNGM2N2FmYmFhMjBmZDlkMGFmOGMxZDhjNmNlN2YiLCJleHAiOjE3MzQwMTY3MTQsImlzcyI6IndjXC9zdG9yZVwvdjEiLCJpYXQiOjE3MzM4NDM5MTR9.6Rv3Kd0R8yHkzvsdq6Xezcm3NSfE5BOeAnyl6RmuAaI",
        },
        credentials: "include",
        body: JSON.stringify({
          key: productKey,
        }),
      }
    );
    const data = await res.json();
    set({ cart: data, isLoading: false, count: data.items_count });
  },
  updateCart: async ({ productKey, quantity }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cart/update-item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cart-Token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidF9kNGM2N2FmYmFhMjBmZDlkMGFmOGMxZDhjNmNlN2YiLCJleHAiOjE3MzQwMTY3MTQsImlzcyI6IndjXC9zdG9yZVwvdjEiLCJpYXQiOjE3MzM4NDM5MTR9.6Rv3Kd0R8yHkzvsdq6Xezcm3NSfE5BOeAnyl6RmuAaI",
        },
        credentials: "include",
        body: JSON.stringify({
          key: productKey,
          quantity: quantity,
        }),
      }
    );
    const data = await res.json();
    set({ cart: data, isLoading: false, count: data.items_count });
  },
  toggleCartDrawer: () => {
    set((state) => ({ isCartDrawerOpen: !state.isCartDrawerOpen }));
  },
  openCartDrawer: () => {
    set({ isCartDrawerOpen: true });
  },
  closeCartDrawer: () => {
    set({ isCartDrawerOpen: false });
  },
}));

export default useCartState;

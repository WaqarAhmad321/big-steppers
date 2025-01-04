import { create } from "zustand";

interface Cart {
  cart: any[];
  cartToken: string;
  isLoading: boolean;
  count: number;
  isCartDrawerOpen: boolean;
  toggleCartDrawer: () => void;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  getCart: () => void;
  set: (state: Partial<Cart>) => void; // For server-side hydration
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

const useCartState = create<Cart>((set, get) => ({
  cart: [],
  isCartDrawerOpen: false,
  isLoading: false,
  count: 0,
  cartToken: "",
  set: (state) => set(state),
  getCart: async () => {
    try {
      set({ isLoading: true });
      const res = await fetch("/api/cart");

      if (!res.ok) {
        throw new Error("Failed to fetch cart");
      }
      const data = await res.json();

      if (data) {
        set({
          cart: data,
          isLoading: false,
          count: data.items_count,
          cartToken: res.headers.get("Cart-Token")!,
        });
      }
    } catch (error) {
      set({ isLoading: false });
      console.error("Error fetching cart:", error);
    }
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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidF80MWI2YmRmZDRkNDFhZTA1Yzc3OTg5N2E0ODY5Y2MiLCJleHAiOjE3MzYxOTA3NDIsImlzcyI6IndjXC9zdG9yZVwvdjEiLCJpYXQiOjE3MzYwMTc5NDJ9.GrPzVa5L9XgC87KPzBWC6Zf2l0Aru9wszum1mOYSN7Y",
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
    }
  },
  removeFromCart: async ({ productKey }) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/cart/remove-item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cart-Token": get().cartToken,
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
          "Cart-Token": get().cartToken,
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

import { create } from "zustand";

interface Cart {
  cart: any[];
  isLoading: boolean;
  count: number;
  getCart: () => void;
  addToCart: ({
    productId,
    quantity,
  }: {
    productId: string;
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
  isLoading: true,
  count: 0,
  getCart: async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`);
    const data = await res.json();
    set({ cart: data, isLoading: false });
  },
  addToCart: async ({ productId, quantity = 1 }) => {
    try {
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
      set({ cart: data, isLoading: false, count: data.items_count });
      console.log("cart after: ", data);
    } catch (error) {
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
}));

export default useCartState;

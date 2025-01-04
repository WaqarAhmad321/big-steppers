import { create } from "zustand";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CheckoutStore {
  step: number;
  cart: CartItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  nextStep: () => void;
  prevStep: () => void;
  setShippingInfo: (info: ShippingInfo) => void;
  setPaymentInfo: (info: PaymentInfo) => void;
  placeOrder: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  step: 1,
  cart: [
    {
      id: 1,
      name: "Air Max Pulse",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      size: "US 10",
      quantity: 1,
    },
    {
      id: 2,
      name: "Ultra Boost",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      size: "US 9.5",
      quantity: 1,
    },
  ],
  shippingInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  },
  paymentInfo: {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  },
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 3) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
  setShippingInfo: (info) => set({ shippingInfo: info }),
  setPaymentInfo: (info) => set({ paymentInfo: info }),
  placeOrder: () => {
    // Handle order placement
    console.log("Order placed!");
  },
}));

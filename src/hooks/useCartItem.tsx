import { useCart } from "@/contexts/cart-context";
import { useMemo } from "react";

const useCartItem = (productId: number) => {
  const { cart } = useCart();

  return useMemo(
    () => cart.items.find((item) => item.id === productId),
    [productId, cart.items]
  );
};

export default useCartItem;

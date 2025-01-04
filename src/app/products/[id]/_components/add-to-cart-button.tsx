"use client";

import useCartState from "@/hooks/useCartState";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  productId: number;
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  quantity,
}) => {
  const { isLoading, addToCart } = useCartState();

  return (
    <div className="space-y-4">
      <button
        onClick={async () => {
          addToCart({ productId, quantity });
        }}
        disabled={isLoading}
        className="w-full bg-red-600 text-white py-4 px-6 rounded-md font-medium hover:bg-red-700 transition-all hover:scale-[1.02] flex items-center justify-center">
        {isLoading ? (
          <div
            className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white rounded-full"
            role="status"
            aria-label="loading"></div>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Add to Cart
          </span>
        )}
      </button>
      <button className="w-full bg-black text-white py-4 px-6 rounded-md font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02]">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartButton;

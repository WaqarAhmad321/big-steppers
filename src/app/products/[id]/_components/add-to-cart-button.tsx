"use client";

import useCartState from "@/hooks/useCartState";
import { onAddToCart } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  quantity,
}) => {
  const { addToCart } = useCartState();

  return (
    <div className="space-y-4">
      <button
        onClick={async () => {
          addToCart({ productId, quantity });
        }}
        className="w-full bg-red-600 text-white py-4 px-6 rounded-md font-medium hover:bg-red-700 transition-all hover:scale-[1.02] flex items-center justify-center space-x-2">
        <ShoppingBag className="h-5 w-5" />
        <span>Add to Cart</span>
      </button>
      <button className="w-full bg-black text-white py-4 px-6 rounded-md font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02]">
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartButton;

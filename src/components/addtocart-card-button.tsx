"use client";

import useCartState from "@/hooks/useCartState";
import { ShoppingBag } from "lucide-react";
import React from "react";

interface AddToCartButtonProps {
  productId: number;
  quantity: number;
}

const AddToCartCardButton: React.FC<AddToCartButtonProps> = ({
  productId,
  quantity,
}) => {
  const { addToCart, isLoading } = useCartState();

  return (
    <button
      onClick={async () => {
        addToCart({ productId, quantity });
      }}
      disabled={isLoading}
      className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center space-x-2">
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
  );
};

export default AddToCartCardButton;

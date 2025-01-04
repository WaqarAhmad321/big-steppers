"use client";

import useCartState from "@/hooks/useCartState";
import { cn } from "@/lib/utils";
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
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
        {
          "translate-y-0": isLoading,
        }
      )}>
      <button
        onClick={async () => {
          addToCart({ productId, quantity });
        }}
        disabled={isLoading}
        className={cn(
          "w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center space-x-2",
          {
            "bg-red-600": isLoading,
          }
        )}>
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
    </div>
  );
};

export default AddToCartCardButton;

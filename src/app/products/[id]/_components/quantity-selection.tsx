"use client";

// import { useCart } from "@/contexts/cart-context";
import React, { useState } from "react";

interface QuantitySelectionProps {
  quantity: number;
}

const QuantitySelection: React.FC<QuantitySelectionProps> = ({ quantity }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // const { addToCart } = useCart();

  const handleQuantityChange = (delta: number) => {
    setSelectedQuantity(Math.max(1, selectedQuantity + delta));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-neutral-900">Quantity</h3>
      <div className="flex items-center space-x-4">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
            -
          </button>
          <span className="px-4 py-2 border-x">{selectedQuantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
            +
          </button>
        </div>

        <span className="text-sm text-neutral-600">
          {quantity || 0} items in stock
        </span>
      </div>
    </div>
  );
};

export default QuantitySelection;

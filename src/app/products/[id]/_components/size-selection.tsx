"use client";

import React, { useState } from "react";

interface SizeSelectionProps {
  sizes: string[];
}
const SizeSelection: React.FC<SizeSelectionProps> = ({
  sizes = ["Euro 39", "Euro 40", "Euro 43"],
}) => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-neutral-900">Select Size</h3>
        <button className="text-sm text-red-600 hover:text-red-700">
          Size Guide
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`py-3 px-4 text-sm font-medium rounded-md border transition-all ${
              selectedSize === size
                ? "border-red-600 bg-red-50 text-red-600"
                : "border-neutral-200 text-neutral-900 hover:border-red-600"
            }`}>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelection;

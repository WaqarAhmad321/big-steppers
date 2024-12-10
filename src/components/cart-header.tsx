"use client";

import { X } from "lucide-react";
import React from "react";

const CartHeader = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <h2 className="text-xl font-semibold font-display">Shopping Cart</h2>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartHeader;

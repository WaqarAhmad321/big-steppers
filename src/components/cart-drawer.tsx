import React from "react";
import { X, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const cartItems = [
    {
      id: 1,
      name: "Air Max Pulse",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      quantity: 1,
      size: "US 10",
    },
    {
      id: 2,
      name: "Ultra Boost",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      quantity: 1,
      size: "US 9.5",
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold font-display">
              Shopping Cart
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                  // width={96}
                  // height={96}
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-lg">
                      <button className="p-2 hover:bg-gray-100 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="p-2 hover:bg-gray-100 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between font-medium">
              <span>Subtotal</span>
              <span>$349.98</span>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

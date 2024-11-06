import React, { useEffect } from "react";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    const onPressEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else {
        return;
      }
    };

    window.addEventListener("keydown", onPressEscape);
    return () => window.removeEventListener("keydown", onPressEscape);
  }, []);
  console.log(cart.items.length);
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
            {/* {cart.items.length < 1 ? ( */}
            {cart.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-24 h-24 rounded-lg"
                  width={96}
                  height={96}
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: 1</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.id, item.quantity - 1);
                          } else {
                            removeFromCart(item.id);
                          }
                        }}
                        className="p-2 hover:bg-gray-100 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-gray-100 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Shop Now
                </button>
              </div>
            )} */}
          </div>

          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between font-medium">
              <span>Subtotal</span>
              <span>
                {cart.totalPrice > 1 ? (
                  cart.totalPrice
                ) : (
                  <span className="text-gray-500 text-xl">-</span>
                )}
              </span>
            </div>
            <button
              disabled={cart.totalQuantity < 1 ? true : false}
              className="w-full disabled:bg-gray-200 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:cursor-not-allowed">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

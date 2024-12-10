import React, { useEffect } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import CartHeader from "./cart-header";
import CartOverlay from "./cart-overlay";
import useCartState from "@/hooks/useCartState";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // useEffect(() => {
  //   const onPressEscape = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       onClose();
  //     } else {
  //       return;
  //     }
  //   };

  //   window.addEventListener("keydown", onPressEscape);
  //   return () => window.removeEventListener("keydown", onPressEscape);
  // }, []);

  // const res = await fetch(
  //   `https://big-steppers.manufacs.com/wp-json/wc/store/v1/cart`,
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Cart-Token":
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidF9lYTE4YzU1NjRlZGNlMzFkNzg0YjI0YTg3ZDdkN2EiLCJleHAiOjE3MzI4NzQzMTIsImlzcyI6IndjXC9zdG9yZSIsImlhdCI6MTczMjcwMTUxMn0.SDi3Z-VJw_C5tz_Y0qH37Ldkjid8o_RvxUNZ5NLoHbk",
  //     },
  //     credentials: "include",
  //   }
  // );
  // const cart = await res.json();

  const { cart, getCart, removeFromCart, updateCart } = useCartState();

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <>
      <CartOverlay isOpen={isOpen} onClose={onClose} />
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <CartHeader onClose={onClose} />

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
            {cart.items_count > 0 ? (
              cart.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Image
                    src={item.images[0].src}
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
                        onClick={() => removeFromCart({ productKey: item.key })}
                        className="text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateCart({
                                productKey: item.key,
                                quantity: item.quantity - 1,
                              });
                            } else {
                              removeFromCart({ productKey: item.key });
                            }
                          }}
                          className="p-2 hover:bg-gray-100 transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateCart({
                              productKey: item.id,
                              quantity: item.quantity + 1,
                            })
                          }
                          className="p-2 hover:bg-gray-100 transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold">Rs. {item.prices.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Shop Now
                </button>
              </div>
            )}
          </div>

          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between font-medium">
              <span>Subtotal</span>
              <span>
                {cart.totals.total_price ? (
                  `Rs. ${cart.totals.total_price}`
                ) : (
                  <span className="text-gray-500 text-xl">-</span>
                )}
              </span>
            </div>
            <button
              disabled={cart.items_count < 1 ? true : false}
              className="w-full disabled:bg-gray-200 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:cursor-not-allowed">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

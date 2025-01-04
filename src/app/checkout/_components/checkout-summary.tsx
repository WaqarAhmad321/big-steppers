import React from 'react';
import { ShoppingBag, Gift, Truck } from 'lucide-react';
import { useCheckoutStore } from '@/hooks/checkout-store';

export default function OrderSummary() {
  const { cart } = useCheckoutStore();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between pb-6 border-b">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="flex items-center space-x-2 text-gray-600">
          <ShoppingBag className="w-5 h-5" />
          <span>{cart.length} items</span>
        </div>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">Size: {item.size}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 py-6 border-y">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-green-600 text-sm">
          <Truck className="w-5 h-5" />
          <span>Free shipping on orders over $100</span>
        </div>
        <div className="flex items-center space-x-3 text-purple-600 text-sm">
          <Gift className="w-5 h-5" />
          <span>Free gift wrapping available</span>
        </div>
      </div>
    </div>
  );
}
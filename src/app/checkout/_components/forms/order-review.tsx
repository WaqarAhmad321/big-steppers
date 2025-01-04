import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { useCheckoutStore } from '@/hooks/checkout-store';

export default function ReviewOrder() {
  const { shippingInfo, paymentInfo, prevStep, placeOrder } = useCheckoutStore();

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-4">Shipping Information</h3>
          <div className="space-y-2 text-gray-600">
            <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
            <p>{shippingInfo.address}</p>
            <p>{shippingInfo.city}, {shippingInfo.postalCode}</p>
            <p>{shippingInfo.phone}</p>
            <p>{shippingInfo.email}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-4">Payment Information</h3>
          <div className="space-y-2 text-gray-600">
            <p>•••• •••• •••• {paymentInfo.cardNumber.slice(-4)}</p>
            <p>{paymentInfo.nameOnCard}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 text-sm text-gray-600">
        <Shield className="w-5 h-5" />
        <p>Your payment information is encrypted and secure.</p>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={prevStep}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={placeOrder}
          className="flex-1 bg-red-600 text-white py-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
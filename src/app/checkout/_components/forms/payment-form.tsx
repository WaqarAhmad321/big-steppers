import React from 'react';
import { CreditCard, ArrowLeft } from 'lucide-react';
import { useCheckoutStore } from '@/hooks/checkout-store';
import Input from '@/components/ui/input';

export default function PaymentForm() {
  const { paymentInfo, setPaymentInfo, nextStep, prevStep } = useCheckoutStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <div className="flex items-center space-x-3 text-gray-600 mb-6">
          <CreditCard className="w-5 h-5" />
          <span className="font-medium">Credit Card Information</span>
        </div>

        <div className="space-y-6">
          <Input
            label="Card Number"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
            placeholder="1234 5678 9012 3456"
            required
          />

          <div className="grid grid-cols-2 gap-6">
            <Input
              label="Expiry Date"
              value={paymentInfo.expiryDate}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
              placeholder="MM/YY"
              required
            />
            <Input
              label="CVV"
              value={paymentInfo.cvv}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
              placeholder="123"
              required
            />
          </div>

          <Input
            label="Name on Card"
            value={paymentInfo.nameOnCard}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, nameOnCard: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          type="submit"
          className="flex-1 bg-red-600 text-white py-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Review Order
        </button>
      </div>
    </form>
  );
}
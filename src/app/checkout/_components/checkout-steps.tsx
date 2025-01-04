import { useCheckoutStore } from "@/hooks/checkout-store";
import React from "react";
import StepIndicator from "./step-indicator";
import ShippingForm from "./forms/shipping-formt";
import PaymentForm from "./forms/payment-form";
import ReviewOrder from "./forms/order-review";


export default function CheckoutSteps() {
  const { step } = useCheckoutStore();

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6 lg:p-8">
      <StepIndicator />

      <div className="mt-8">
        {step === 1 && <ShippingForm />}
        {step === 2 && <PaymentForm />}
        {step === 3 && <ReviewOrder />}
      </div>
    </div>
  );
}

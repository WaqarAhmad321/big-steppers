import React from 'react';
import { Check } from 'lucide-react';
import { useCheckoutStore } from '@/hooks/checkout-store';

const steps = [
  { number: 1, title: 'Shipping' },
  { number: 2, title: 'Payment' },
  { number: 3, title: 'Review' },
];

export default function StepIndicator() {
  const { step } = useCheckoutStore();

  return (
    <div className="flex items-center justify-between">
      {steps.map((s, i) => (
        <div key={s.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${step > s.number 
                ? 'bg-green-600 text-white' 
                : step === s.number 
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-500'
              }
            `}>
              {step > s.number ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{s.number}</span>
              )}
            </div>
            <span className="text-sm font-medium mt-2">{s.title}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`
              w-24 h-0.5 mx-4
              ${step > s.number + 1 
                ? 'bg-green-600' 
                : 'bg-gray-200'
              }
            `} />
          )}
        </div>
      ))}
    </div>
  );
}
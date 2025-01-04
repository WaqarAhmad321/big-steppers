"use client";

import { Link, ShoppingBag } from "lucide-react";
import React from "react";
import CheckoutSteps from "./_components/checkout-steps";
import OrderSummary from "./_components/checkout-summary";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-[1000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-bold font-display">
                BIG<span className="text-red-600">STEPPERS</span>
              </span>
            </Link>
            <div className="flex items-center space-x-4 text-sm">
              <span>Need help?</span>
              <a
                href="#"
                className="text-red-600 hover:text-red-700 font-medium">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Checkout Steps */}
          <div className="lg:order-1">
            <CheckoutSteps />
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:order-2">
            <div className="sticky top-28">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Image
                width={40}
                height={40}
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                alt="Secure Payment"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <p className="font-medium">Secure Checkout</p>
                <p className="text-sm text-gray-500">Your data is protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Image width={32} height={32} src="/visa.svg" alt="Visa" className="h-8" />
              <Image width={32} height={32} src="/mastercard.svg" alt="Mastercard" className="h-8" />
              <Image width={32} height={32} src="/amex.svg" alt="American Express" className="h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

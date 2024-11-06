"use client";

import React, { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import SearchOverlay from "@/components/search-overlay";
import CartDrawer from "@/components/cart-drawer";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";

const navLinks = [
  {
    title: "New Arrivals",
    url: "#",
  },
  {
    title: "Men",
    url: "#",
  },
  {
    title: "Women",
    url: "#",
  },
  {
    title: "Collections",
    url: "#",
  },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>

            <div className="flex-shrink-0 font-bold text-3xl text-gray-900 font-display tracking-tight">
              BIG<span className="text-red-600">STEPPERS</span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map(({ title, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    className="text-gray-900 hover:text-red-600 transition-colors font-medium">
                    {title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Search className="w-4 h-4 text-gray-600" />
              </button>

              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <User className="w-4 h-4 text-gray-600" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <ShoppingBag className="w-4 h-4 text-gray-600" />
                </button>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cart.items.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
      </nav>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <div
        className={`fixed inset-0 bg-black transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-[1000] md:hidden`}>
        <div className="flex flex-col pt-12 px-6 space-y-6 text-white">
          <button
            className="text-white/60 right-10 top-10 absolute hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <X className="w-6 h-6" />
          </button>

          {navLinks.map(({ title, url }, index) => (
            <Link
              key={index}
              href={url}
              className="text-2xl font-medium hover:text-red-500 transition">
              {title}
            </Link>
          ))}
          
          <div className="pt-6 border-t border-gray-800">
            <a href="#" className="flex items-center space-x-2 py-4">
              <User className="w-5 h-5" />
              <span>Account</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-4">
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </a>
          </div>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

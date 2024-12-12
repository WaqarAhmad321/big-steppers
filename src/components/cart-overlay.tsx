"use client";

import useCartState from "@/hooks/useCartState";
import React from "react";

const CartOverlay = () => {
  const { isCartDrawerOpen, closeCartDrawer } = useCartState();

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50
          ${
            isCartDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      onClick={closeCartDrawer}
    />
  );
};

export default CartOverlay;

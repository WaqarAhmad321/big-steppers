import React, { Suspense } from "react";

import HeroSection from "./(home)/_components/hero-section";
import FeaturesSection from "./(home)/_components/features-section";
import ProductsSection from "./(home)/_components/products-section";
import TrendingCollection from "./(home)/_components/trending-collection";
import useCartState from "@/hooks/useCartState";

async function App() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cart`, {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  // // Hydrate Zustand store
  // useCartState.getState().set({
  //   cart: data,
  //   isLoading: false,
  //   count: data.items_count,
  //   cartToken: res.headers.get("Cart-Token")!,
  // });
  // console.log("res: ", res.headers.get("Cart-Token"));

  return (
    <div className="min-h-screen bg-white font-body">
      <HeroSection />

      <FeaturesSection />
      <TrendingCollection />

      <Suspense fallback={<h1>Loading..</h1>}>
        <ProductsSection />
      </Suspense>
    </div>
  );
}

export default App;

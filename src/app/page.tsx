import React from "react";

import HeroSection from "./(home)/_components/hero-section";
import FeaturesSection from "./(home)/_components/features-section";
import ProductsSection from "./(home)/_components/products-section";

async function App() {
  const data = await fetch(`${process.env.BASE_URL}/cart`, {
    cache: "no-store"
  });
  const res = await data.json();
  console.log(res);

  return (
    <div className="min-h-screen bg-white font-body">
      <HeroSection />

      <FeaturesSection />

      <ProductsSection />
    </div>
  );
}

export default App;

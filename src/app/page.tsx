import React, { Suspense } from "react";

import HeroSection from "./(home)/_components/hero-section";
import FeaturesSection from "./(home)/_components/features-section";
import ProductsSection from "./(home)/_components/products-section";
import TrendingCollection from "./(home)/_components/trending-collection";

async function App() {
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

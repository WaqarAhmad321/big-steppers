import React, { Suspense } from "react";

import HeroSection from "./(home)/_components/hero-section";
import FeaturesSection from "./(home)/_components/features-section";
import ProductsSection from "./(home)/_components/products-section";

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <HeroSection />

      <FeaturesSection />

      <Suspense fallback={<h1>Loading..</h1>}>
        <ProductsSection />
      </Suspense>
    </div>
  );
}

export default App;

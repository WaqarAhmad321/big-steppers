import React from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import HeroSection from "./(home)/_components/hero-section";
import FeaturesSection from "./(home)/_components/features-section";
import ProductsSection from "./(home)/_components/products-section";

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <ProductsSection />

      <Footer />
    </div>
  );
}

export default App;

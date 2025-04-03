import React from "react";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import FeaturedProducts from "./FeaturedProducts";
import "../App.css";
import "@fontsource/inter";
import Instagram from "./Instagram";

function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Instagram />
    </>
  );
}

export default Home;

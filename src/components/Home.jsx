import React from "react";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import FeaturedProducts from "./FeaturedProducts";
import "../App.css";
import "@fontsource/inter";
import RecentProducts from "./RecentProducts";
import Instagram from "./Instagram";

function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <RecentProducts />
      <Instagram />
    </>
  );
}

export default Home;

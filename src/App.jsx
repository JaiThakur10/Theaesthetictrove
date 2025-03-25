import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";

import "./App.css";
import MaxWidthWrapper from "./components/maxwidthwrapper";
import "@fontsource/inter";
import RecentProducts from "./components/RecentProducts";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <MaxWidthWrapper>
        <Header />
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <RecentProducts />
        <Instagram />
        <Footer />
      </MaxWidthWrapper>
    </Router>
  );
}

export default App;

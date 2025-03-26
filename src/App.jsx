import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@fontsource/inter";
// Importing pages
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import ProductDetails from "./components/ProductDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <MaxWidthWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />{" "}
            {/* Dynamic Route */}
            <Route path="/cart" element={<Cart />} /> {/* Cart Page */}
          </Routes>
          <Footer />
        </MaxWidthWrapper>
      </Router>
    </CartProvider>
  );
}

export default App;

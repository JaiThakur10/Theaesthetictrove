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
import Checkout from "./components/Checkout";
import ThankYou from "./components/Thankyou";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <MaxWidthWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />{" "}
            {/* Dynamic Route */}
            <Route path="/cart" element={<Cart />} /> {/* Cart Page */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </MaxWidthWrapper>
      </Router>
    </CartProvider>
  );
}

export default App;
// function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="max-w-xl text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           This project is no longer available
//         </h1>
//         <p className="text-lg text-gray-600 mb-6">
//           The hosting for this site has expired. Please contact the owner or
//           renew the subscription to bring the site back online.
//         </p>
//         <a
//           href="https://vercel.com/pricing"
//           className="inline-block bg-black text-white text-sm px-5 py-3 rounded hover:bg-gray-800 transition"
//         >
//           Renew Hosting
//         </a>
//         <div className="mt-8 text-sm text-gray-400">
//           Powered by{" "}
//           <a href="https://vercel.com" className="underline">
//             Vercel
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

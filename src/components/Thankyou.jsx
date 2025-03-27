import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const ThankYou = () => {
  // Get window size for confetti
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Confetti Effect */}
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
      />

      <h1 className="text-3xl font-bold mb-4"> Thank You for Your Order!</h1>
      <p className="text-gray-600 mb-6">
        Your order has been placed successfully.
      </p>

      <Link to="/" className="bg-black text-white px-6 py-3 rounded-md">
        🛍 Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYou;

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image Zoom-In Effect (scales the image without affecting its container)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="flex md:flex-row  flex-col mt-14 h-[450px] md:h-[800px] relative overflow-hidden"
    >
      {/* Left Side (30%) */}
      <div
        className="flex-[0.3]    flex flex-col justify-center 
md:px-6 space-y-4 md:items-start items-center text-center md:text-left"
      >
        <div className="w-full md:w-auto flex items-center">
          <div
            className="w-full items-start md:w-auto h-auto md:h-[400px] 
    flex flex-col md:gap-3 
    md:absolute md:z-10 md:mt-0"
          >
            {" "}
            {/* ✅ Removed absolute for mobile, only applies on md */}
            <span className="text-3xl text-left  md:text-7xl font-light">
              The Best Jeweler
            </span>
            <span className="text-3xl md:text-7xl font-light ">for you</span>
            <span className="mt-4 text-xl md:text-base hidden md:inline">
              Sparkle with confidence, shine with elegance! ✨ Elevate your
              style with timeless
            </span>
            <span className="text-xl md:text-base hidden md:inline">
              jewelry that speaks volumes. Because you deserve to dazzle, every
              day. 💫
            </span>
            <p className=" md:hidden text-left font-light ">
              Sparkle with confidence, shine with elegance! ✨ Elevate your
              style with timeless jewelry that speaks volumes. Because you
              deserve to dazzle, every day. 💫
            </p>
            <button
              onClick={() => navigate("/shop")} // Navigate to /shop
              className="flex items-center gap-2 border mt-4 
      w-[60%] md:w-[50%] border-black px-6 py-2 rounded-full 
      hover:bg-black hover:text-white transition"
            >
              Explore Now ➝
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (70%) with Zoom-In Effect on Image */}
      <div className="flex-[0.7]   relative overflow-hidden order-first md:order-none">
        <motion.img
          src="./heroimg.jpg"
          alt="Jewelry"
          className="w-full md:h-full object-cover rounded-xl md:rounded-2xl"
          style={{ scale }} // Apply zoom only on the image
        />
      </div>
    </section>
  );
};

export default HeroSection;

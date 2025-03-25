import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image Zoom-In Effect (scales the image without affecting its container)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="flex mt-14 h-[800px] relative overflow-hidden"
    >
      {/* Left Side (30%) */}
      <div className="flex-[0.3] flex flex-col justify-center pl-10 space-y-4">
        <div className="w-[36%] flex items-center">
          <div className="w-1/2 h-[400px] flex flex-col mt-[400px] absolute z-10 gap-3">
            <span className="text-7xl font-light">The Best Jeweler</span>
            <span className="text-7xl font-light">for you</span>
            <span className="mt-4">
              He moonlights difficult engrossed it, sportsmen interested has all
              difficulty gay
            </span>
            <span>
              assistance joy perceived end knowledge certainly day sweetness.
            </span>

            <button className="flex items-center gap-2 border mt-4 w-[50%] border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
              Explore Now ➝{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Right Side (70%) with Zoom-In Effect on Image */}
      <div className="flex-[0.7] relative overflow-hidden">
        <motion.img
          src="./heroimg.jpg"
          alt="Jewelry"
          className="w-full h-full object-cover rounded-2xl"
          style={{ scale }} // Apply zoom only on the image
        />
      </div>
    </section>
  );
};

export default HeroSection;

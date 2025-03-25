import React from "react";
import { motion } from "framer-motion";

const itemData = [
  { img: "./rings.jpg", title: "Jewelry 1" },
  { img: "./pendants.jpg", title: "Jewelry 2" },
  { img: "./necklace.jpg", title: "Jewelry 3" },
  { img: "./earrings.jpg", title: "Jewelry 4" },
  { img: "./rings.jpg", title: "Jewelry 5" },
  { img: "./rings.jpg", title: "Jewelry 6" },
];

// Framer Motion variants for zoom-in effect
const zoomInVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (delay) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

const Instagram = () => (
  <section className="container mx-auto px-6 mt-16 py-16 flex flex-col items-center">
    {/* Top Image */}
    <motion.img
      src={itemData[0].img}
      alt={itemData[0].title}
      className="w-50 h-50 object-cover rounded-xl shadow-lg mb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.2}
      variants={zoomInVariant}
    />

    {/* Center Section (Images + Text) */}
    <div className="flex items-center space-x-8">
      {/* Left Side Images */}
      <div className="flex flex-col space-y-6">
        {[1, 2].map((index) => (
          <motion.img
            key={index}
            src={itemData[index].img}
            alt={itemData[index].title}
            className="w-50 h-50 object-cover rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index * 0.3}
            variants={zoomInVariant}
          />
        ))}
      </div>

      {/* Center Text */}
      <h2 className="text-7xl  font-extralight text-black text-center leading-snug">
        Check us out on <br />
        <span className="font-light">Instagram</span>
      </h2>

      {/* Right Side Images */}
      <div className="flex flex-col space-y-6">
        {[3, 4].map((index) => (
          <motion.img
            key={index}
            src={itemData[index].img}
            alt={itemData[index].title}
            className="w-50 h-50 object-cover rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index * 0.3}
            variants={zoomInVariant}
          />
        ))}
      </div>
    </div>

    {/* Bottom Image */}
    <motion.img
      src={itemData[5].img}
      alt={itemData[5].title}
      className="w-50 h-50 object-cover rounded-xl shadow-lg mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.5}
      variants={zoomInVariant}
    />
  </section>
);

export default Instagram;

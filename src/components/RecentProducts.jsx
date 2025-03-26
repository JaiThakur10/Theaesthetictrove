import { ArrowRight } from "lucide-react";
import React from "react";

const categories = [
  { name: "Necklaces", image: "./necklace.jpg", link: "#" },
  { name: "Earrings", image: "./earrings.jpg", link: "#" },
  { name: "Bracelets", image: "./bracelets.jpg", link: "#" },
  { name: "Rings", image: "./rings.jpg", link: "#" },
  { name: "Pendants", image: "./pendants.jpg", link: "#" },
  { name: "Brooches", image: "./brooches.jpg", link: "#" },
];

const RecentProducts = () => (
  <section className="  container mx-auto  md:px-6 mt-16 py-16">
    <h2 className="text-3xl md:text-5xl font-light text-black text-center">
      Recent Products
    </h2>

    {/* ✅ Fixed: Grid Layout for Mobile & Large Screens */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
      {categories.map((category) => (
        <a
          href={category.link}
          key={category.name}
          className="flex flex-col items-center p-4"
        >
          <div className="overflow-hidden rounded-2xl w-full">
            <img
              src={category.image}
              alt={category.name}
              className="rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full"
            />
          </div>

          <div className="flex justify-between  items-center w-full mt-2">
            <h3 className="text-left md:text-xl text-3xl text-black flex-grow">
              {category.name}
            </h3>
            <ArrowRight className="text-black " />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default RecentProducts;

import { ArrowRight } from "lucide-react";
import React from "react";

const categories = [
  { name: "Necklaces", image: "./necklace.jpg", link: "/shop" },
  { name: "Earrings", image: "./earrings.jpg", link: "/shop" },
  { name: "Rings", image: "./rings.jpg", link: "/shop" },
  { name: "Pendants", image: "./pendants.jpg", link: "/shop" },
];

const CategorySection = () => (
  <section className="container mx-auto md:px-6 mt-16 py-16 text-center">
    <h2 className="text-3xl md:text-5xl font-light text-black">
      Shop By Category
    </h2>

    {/* Centering the grid items */}
    <div className="flex flex-wrap justify-center gap-6 mt-12">
      {categories.map((category) => (
        <a
          href={category.link}
          key={category.name}
          className="flex flex-col items-center p-4 max-w-[200px]"
        >
          <div className="overflow-hidden rounded-2xl w-full">
            <img
              src={category.image}
              alt={category.name}
              className="rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 w-full"
            />
          </div>

          <div className="flex justify-between items-center w-full mt-2">
            <h3 className="text-left md:text-xl text-2xl text-black flex-grow">
              {category.name}
            </h3>
            <ArrowRight className="text-black" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default CategorySection;

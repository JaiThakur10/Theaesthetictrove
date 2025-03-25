import { ArrowRight } from "lucide-react";
import React from "react";

const categories = [
  { name: "Necklaces", image: "./necklace.jpg", link: "#" },
  { name: "Earrings", image: "./earrings.jpg", link: "#" },
  {
    name: "Bracelets",
    image: "./bracelets.jpg",
    link: "#",
  },
  { name: "Rings", image: "./rings.jpg", link: "#" },
  { name: "Pendants", image: "./pendants.jpg", link: "#" },
  { name: "Brooches", image: "./brooches.jpg", link: "#" },
];

const CategorySection = () => (
  <section className="container mx-auto px-6  mt-16 py-16">
    <h2 className="text-5xl font-light text-gray-800 text-center">
      Shop By Category
    </h2>
    <div className="flex flex-wrap justify-center mt-12">
      {categories.map((category) => (
        <a
          href={category.link}
          key={category.name}
          className="w-1/3 md:w-1/6 p-4"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={category.image}
              alt={category.name}
              className="rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          <div className="  flex justify-between ">
            <div>
              <h3 className="text-center mt-2 text-black">{category.name}</h3>
            </div>
            <div className="text-center mt-2  text-black">
              <ArrowRight />
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default CategorySection;

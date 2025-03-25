import React from "react";

const categories = [
  { name: "Necklaces", image: "path/to/necklace.jpg", link: "/shop/necklaces" },
  { name: "Earrings", image: "path/to/earrings.jpg", link: "/shop/earrings" },
  {
    name: "Bracelets",
    image: "path/to/bracelets.jpg",
    link: "/shop/bracelets",
  },
  { name: "Rings", image: "path/to/rings.jpg", link: "/shop/rings" },
  { name: "Pendants", image: "path/to/pendants.jpg", link: "/shop/pendants" },
  { name: "Brooches", image: "path/to/brooches.jpg", link: "/shop/brooches" },
];

const CategorySection = () => (
  <section className="container mx-auto px-6 py-16">
    <h2 className="text-2xl font-bold text-gray-800 text-center">
      Shop By Category
    </h2>
    <div className="flex flex-wrap justify-center mt-8">
      {categories.map((category) => (
        <a
          href={category.link}
          key={category.name}
          className="w-1/3 md:w-1/6 p-4"
        >
          <img
            src={category.image}
            alt={category.name}
            className="rounded-full"
          />
          <h3 className="text-center mt-2 text-gray-600">{category.name}</h3>
        </a>
      ))}
    </div>
  </section>
);

export default CategorySection;

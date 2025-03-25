import React from "react";

const featuredProducts = [
  {
    name: "Copper Gold Plated",
    price: "$79.50",
    image: "path/to/copper-gold-plated.jpg",
    link: "/product/copper-gold-plated",
  },
  {
    name: "Zircon Gold Plated Ring",
    price: "$45.75",
    image: "path/to/zircon-gold-ring.jpg",
    link: "/product/zircon-gold-ring",
  },
  {
    name: "Chain Necklace Gold",
    price: "$45.00",
    image: "path/to/chain-necklace.jpg",
    link: "/product/chain-necklace",
  },
  {
    name: "Diamond Brooch",
    price: "$55.00",
    image: "path/to/diamond-brooch.jpg",
    link: "/product/diamond-brooch",
  },
];

const FeaturedProducts = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Featured Products
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        {featuredProducts.map((product) => (
          <a
            href={product.link}
            key={product.name}
            className="w-1/2 md:w-1/4 p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg"
            />
            <h3 className="text-center mt-2 text-gray-600">{product.name}</h3>
            <p className="text-center text-gray-800">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;

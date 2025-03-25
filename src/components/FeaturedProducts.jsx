import { ChevronRightIcon } from "lucide-react";
import React from "react";

const featuredProducts = [
  {
    name: "Copper Gold Plated",
    price: "$79.50",
    image: "./copper.jpg",
    link: "/product/copper-gold-plated",
  },
  {
    name: "Zircon Gold Plated Ring",
    price: "$45.75",
    image: "./zircon.jpg",
    link: "/product/zircon-gold-ring",
  },
  {
    name: "Chain Necklace Gold",
    price: "$45.00",
    image: "./chain.jpg",
    link: "/product/chain-necklace",
  },
  {
    name: "Diamond Brooch",
    price: "$55.00",
    image: "./diamond.jpg",
    link: "/product/diamond-brooch",
  },
];

const FeaturedProducts = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6 mt-10">
      <h2 className="text-5xl font-light text-gray-800 text-center">
        Featured Products
      </h2>

      {/* Flex container for image and product grid */}
      <div className=" flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        {/* Left: Background Image with Text Overlay */}
        <div
          className="relative w-full md:w-1/2 h-[700px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('./heroimg.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-white text-7xl font-light">
              The Perfect Jewelry For Your Loved.
            </h2>
            <button className="mt-4 px-6 py-2 flex bg-white text-black font-light rounded-full shadow-md hover:bg-black hover:text-white transition">
              Explore{" "}
              <div className=" ">
                <ChevronRightIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Right: Product Grid */}
        <div className="grid grid-cols-2 gap-6 w-full md:w-1/2">
          {featuredProducts.map((product) => (
            <a
              href={product.link}
              key={product.name}
              className="p-4   rounded-xl shadow-lg transform transition hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-60 object-cover"
              />
              <div className="  flex justify-between items-center">
                <div className=" ">
                  <h3 className=" mt-2 text-xl text-black">{product.name}</h3>
                  <p className=" text-gray-800 ">{product.price}</p>
                </div>
                <div className=" flex justify-center items-center w-12 h-12  border-1 border-black  rounded-full ">
                  {" "}
                  <ChevronRightIcon strokeWidth={1} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;

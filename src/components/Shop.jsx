import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Import product data

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container   mx-auto px-4 py-6">
      <h1 className="text-center text-4xl md:text-7xl mt-6 font-light mb-8">
        Shop
      </h1>

      {/* Category Buttons */}
      <div className="flex overflow-x-auto md:justify-center space-x-2 md:space-x-4 mb-6 p-2">
        {["all", "rings", "pendants", "necklaces", "earrings"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-md border border-black transition-all ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Product Display */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border p-2 rounded-md shadow-sm hover:shadow-lg transition block"
          >
            <img
              src={product.defaultImage || product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-center text-lg font-semibold">
              {product.name}
            </h3>
            <p className="text-center text-gray-500">₹ {product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;

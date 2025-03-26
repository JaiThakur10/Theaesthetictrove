import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Gold Ring",
    category: "rings",
    image: "/images/ring1.jpg",
    price: "$199",
    description: "A luxurious 18k gold ring.",
  },
  {
    id: 2,
    name: "Silver Ring",
    category: "rings",
    image: "/images/ring2.jpg",
    price: "$99",
    description: "A sleek and stylish silver ring.",
  },
  {
    id: 3,
    name: "Diamond Pendant",
    category: "pendants",
    image: "/images/pendant1.jpg",
    price: "$299",
    description: "A sparkling diamond pendant.",
  },
  {
    id: 4,
    name: "Pearl Necklace",
    category: "necklaces",
    image: "/images/necklace1.jpg",
    price: "$399",
    description: "A classic pearl necklace.",
  },
  {
    id: 5,
    name: "Stud Earrings",
    category: "earrings",
    image: "/images/earring1.jpg",
    price: "$149",
    description: "Elegant stud earrings.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-3xl mt-12">Product not found!</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg mx-auto rounded-md"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-500 text-lg mt-2">
            {product.category.toUpperCase()}
          </p>
          <p className="text-xl font-semibold text-purple-600 mt-4">
            {product.price}
          </p>
          <p className="text-gray-600 mt-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

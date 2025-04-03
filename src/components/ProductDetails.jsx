import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaTruck, FaBoxOpen, FaUndo } from "react-icons/fa"; // Import icons

// Product Data
const products = [
  {
    id: 1,
    name: "Brass drop earrings",
    category: "earrings",
    images: {
      red: "/bdered.jpg",
      mustard: "/bdeorange.jpg",
      black: "/bdeblack.jpg",
      green: "/bdegreen.jpg",
    },
    price: 340,
    description:
      "Gold-plated brass earrings with Mother of Pearl (MOP) and Monalisa stone embedded beautifully.",
    colors: ["red", "mustard", "black", "green"],
  },

  {
    id: 2,
    name: "Medium Size Brass Jhumka",
    category: "earrings",
    image: "/mj.jpg",
    price: 480,
    description: "Medium size brass jhumka without meenakari",
  },
  {
    id: 3,
    name: "Medium Size Brass Jhumka (Meenakari)",
    category: "earrings",
    image: "/mjm.jpg",
    price: 550,
    description: "Medium size brass jhumka with meenakari",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  // State for selected color (default to first color if available)
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : ""
  );

  // Get correct image based on selected color
  const selectedImage =
    product.images && selectedColor
      ? product.images[selectedColor]
      : product.image;

  // State for 'Added to Cart' effect
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      name: `${product.name} (${selectedColor})`,
      image: selectedImage,
    }); // Add selected color and image to cart
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return <h2 className="text-center text-3xl mt-12">Product not found!</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-lg mx-auto rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-6xl font-light">
            {product.name}{" "}
            {product.colors
              ? `(${
                  selectedColor.charAt(0).toUpperCase() +
                  selectedColor.slice(1).toLowerCase()
                })`
              : ""}
          </h1>

          <p className="text-gray-500 text-lg mt-2">
            {product.category.toUpperCase()}
          </p>
          <p className="text-3xl font-light text-black mt-4">
            ₹{product.price}
          </p>
          <p className="text-gray-600 mt-6">{product.description}</p>

          {/* Color Selection with Images */}
          {product.colors && (
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-800">
                Choose Color:
              </h3>
              <div className="flex gap-4 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-16 h-16 rounded-md border-2 transition ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <img
                      src={product.images[color]}
                      alt={`${product.name} - ${color}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Icons Section */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <FaTruck className="text-xl text-black" />
              <span className="text-gray-700">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBoxOpen className="text-xl text-black" />
              <span className="text-gray-700">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-xl text-black" />
              <span className="text-gray-700">Free Return</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`mt-6 px-6 py-3 rounded-md transition ${
              added
                ? "bg-blue-400 text-white cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            disabled={added}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>

          {/* Selected Color Display */}
          {selectedColor && (
            <div className="mt-4 flex items-center gap-3">
              <p className="text-lg font-semibold text-gray-500">
                Selected Color:
              </p>

              {/* Color Swatch with Fixed Background */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow-md bg-gray-100">
                {/* Color Circle */}
                <span
                  className="w-6 h-6 rounded-full border border-gray-400"
                  style={{ backgroundColor: selectedColor }}
                ></span>

                {/* Color Name */}
                <span className="text-sm font-medium capitalize text-gray-700">
                  {selectedColor}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

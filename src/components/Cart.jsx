import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-center text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-center text-gray-500">{product.price}</p>

              {/* Remove from Cart Button */}
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-4 block w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Continue Shopping Button */}
      <div className="text-center mt-8">
        <Link
          to="/shop"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;

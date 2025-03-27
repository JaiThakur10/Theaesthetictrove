import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ cartOpen, setCartOpen }) => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity,
    0
  );

  return (
    <>
      {cartOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 w-80 h-full bg-white shadow-lg z-50 transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 p-5`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setCartOpen(false)}
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <img
              src="/assets/empty-cart.png" // 🔹 Use the imported image here
              alt="Empty Cart"
              className="w-40 h-40 object-contain opacity-80"
            />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">
                    $
                    {typeof item.price === "number"
                      ? item.price.toFixed(2)
                      : "N/A"}{" "}
                    USD
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-12 border p-1 text-center"
                />
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg">
            <div className="flex justify-between font-medium text-lg">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)} USD</span>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                navigate("/checkout");
              }}
              className="w-full bg-black text-white py-3 mt-4 rounded-md"
            >
              Continue to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const generateOrderMessage = () => {
    let message = `🛍 *New Order Details*%0A%0A`;
    message += `👤 *Customer Name:* ${customerName}%0A`;
    message += `📞 *Phone Number:* ${phoneNumber}%0A`;
    message += `📍 *Shipping Address:* ${shippingAddress}%0A%0A`;

    cart.forEach((item, index) => {
      message += `🛒 *${index + 1}. ${item.name}*%0A`;
      message += `💰 Price: $${item.price.toFixed(2)} x ${item.quantity} = $${(
        item.price * item.quantity
      ).toFixed(2)}%0A%0A`;
    });

    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    message += `🧾 *Subtotal:* $${subtotal.toFixed(2)} USD%0A%0A`;
    message += `✅ *Confirm & Process Order*`;

    return message;
  };

  const handlePlaceOrder = () => {
    if (!customerName || !phoneNumber || !shippingAddress) {
      alert("Please fill in all the details!");
      return;
    }

    console.log("Placing Order...");

    // Open WhatsApp order message
    const whatsappNumber = "7006140255";
    const message = generateOrderMessage();
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");

    // Clear cart and navigate
    setTimeout(() => {
      clearCart(); // Use clearCart function
      navigate("/thankyou", { replace: true });
      console.log("Cart Cleared:", cart);
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* User Details Form */}
      <div className="border p-4 mb-4 rounded-md shadow">
        <label className="block font-medium mb-1">Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full border p-2 rounded-md mb-3"
          placeholder="Enter your name"
        />

        <label className="block font-medium mb-1">Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border p-2 rounded-md mb-3"
          placeholder="Enter your phone number"
        />

        <label className="block font-medium mb-1">Shipping Address:</label>
        <textarea
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          className="w-full border p-2 rounded-md"
          placeholder="Enter your full address"
        ></textarea>
      </div>

      {/* Order Summary */}
      <div className="border p-4 mb-4 rounded-md shadow">
        <h3 className="font-semibold">Your Order</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-black hover:translate-y-1 text-white py-3 rounded-md mt-4"
      >
        📲 Place Order via WhatsApp
      </button>
    </div>
  );
};

export default Checkout;

import { useState, useContext } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false); // State to toggle cart visibility

  return (
    <nav className="relative z-50 flex items-center p-4 bg-white border-b-1 border-[#B6B6B7]">
      {/* Left Section */}
      <ul className="hidden md:flex flex-1 space-x-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">About Us</li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      {/* Middle Section */}
      <div className="flex-1 flex justify-center">
        {/* Show text in desktop view, image in mobile view */}
        <h1 className="hidden md:block text-3xl font-light">
          The Aesthetic Trove
        </h1>
        <img
          src="/logoed.png"
          alt="Logo"
          className="md:hidden w-12 h-12 object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="relative flex flex-1 justify-end space-x-4">
        <Search className="cursor-pointer hover:text-gray-600" />

        {/* Cart Icon with Clickable Toggle */}
        <div
          className="relative cursor-pointer hover:text-gray-600"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* Sidebar Cart Component */}
        <CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center space-y-6 py-6 text-lg z-50">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">About Us</li>
          <li className="cursor-pointer hover:text-gray-600">Shop</li>
        </ul>
      )}
    </nav>
  );
};

export default Header;

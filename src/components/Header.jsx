import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center p-4 bg-white border-b-1 border-[#B6B6B7]">
      {/* Left Section */}
      <ul className="hidden md:flex flex-1 space-x-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-gray-600">Home</li>
        <li className="cursor-pointer hover:text-gray-600">About Us</li>
        <li className="cursor-pointer hover:text-gray-600">Shop</li>
      </ul>

      {/* Middle Section */}
      <h1 className="text-3xl font-light text-center flex-1">
        The Aesthetic Trove
      </h1>

      {/* Right Section */}
      <div className="flex flex-1 justify-end space-x-4">
        <Search className="cursor-pointer hover:text-gray-600" />
        <ShoppingCart className="cursor-pointer hover:text-gray-600" />
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

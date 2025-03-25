import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <nav className="relative flex items-center p-4  bg-white border-b-1 border-[#B6B6B7]">
      {/* Left Section */}
      <ul className="flex flex-1 space-x-8 text-lg font-medium">
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
      </div>
    </nav>
  );
};

export default Header;

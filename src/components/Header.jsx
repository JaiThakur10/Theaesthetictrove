import { useState, useContext, useRef, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

const products = [
  {
    id: 1,
    name: "Brass drop earrings",
    image: "/bdered.jpg",
  },
  {
    id: 2,
    name: "Medium Size Brass Jhumka",
    image: "/mj.jpg",
  },
  {
    id: 3,
    name: "Medium Size Brass Jhumka (Meenakari)",
    image: "/mjm.jpg",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Handle clicks outside menu & search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle search input changes
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((p) => p.name.toLowerCase().includes(value))
      );
    }
  };

  // Handle search selection
  const handleSearchSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchTerm("");
    setSearchOpen(false);
  };

  return (
    <nav className="relative z-50 flex items-center p-4 bg-white border-b border-gray-300">
      {/* Left Section */}
      <ul className="hidden md:flex flex-1 space-x-8 text-lg font-medium">
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-600">
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      {/* Middle Section */}
      <div className="flex-1 flex justify-center">
        <h1 className=" text-xl md:block md:text-3xl font-light">
          The Aesthetic Trove
        </h1>
        {/* <img
          src="/logoed.png"
          alt="Logo"
          className="md:hidden w-12 h-12 object-contain"
        /> */}
      </div>

      {/* Right Section */}
      <div className="relative flex flex-1 justify-end space-x-4">
        {/* Search Icon */}
        <div ref={searchRef} className="relative">
          <Search
            className="cursor-pointer hover:text-gray-600"
            onClick={() => setSearchOpen((prev) => !prev)}
          />
          {searchOpen && (
            <div className="absolute top-10  right-0 w-60 bg-white border border-gray-300 rounded-lg  p-3">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {searchTerm && (
                <ul className="mt-2 max-h-40 overflow-auto">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
                        onClick={() => handleSearchSelect(product.id)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 mr-3 rounded-md"
                        />
                        {product.name}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">No products found.</li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div
          className="relative cursor-pointer hover:text-gray-600"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* Cart Sidebar */}
        <CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center space-y-6 py-6 text-lg z-50"
        >
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/aboutus" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/image/logo-svg.svg";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-black hidden md:inline font-Garamond">
              Zeitgeber Thailand
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium ml-auto font-Thai">
          <Link to="/" className="hover:text-red-500 transition">
            หน้าแรก
          </Link>
          <Link to="/ProductPage" className="hover:text-red-500 transition">
            สินค้า
          </Link>
          <Link to="/About Us" className="hover:text-red-500 transition">
            เกี่ยวกับเรา
          </Link>
          <Link to="/contact" className="hover:text-red-500 transition">
            ติดต่อเรา
          </Link>
          <Link to="/shop" className="hover:text-red-500 transition">
            <ShoppingCartIcon className="h-6 w-6 text-black hover:text-red-500" />
          </Link>
          {showSearch ? (
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-sm text-black placeholder-gray-500 font-thai focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:text-red-500 transition"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </form>
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className="text-black hover:text-red-500 transition"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Mobile: Search + Shop + Hamburger */}
        <div className="flex items-center space-x-4 md:hidden ml-auto">
          {/* Search icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-black hover:text-black-300 transition"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          {/* Shop icon */}
          <Link to="/shop" className="hover:text-red-500 transition">
            <ShoppingCartIcon className="h-6 w-6 text-black hover:text-red-500" />
          </Link>

          {/* Hamburger */}
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile search bar */}
      {showSearch && (
        <div className="md:hidden px-4 py-2 bg-white/60 backdrop-blur-md shadow z-40">
          <form className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 pr-10 py-2 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-500 font-thai focus:outline-none focus:ring-2 focus:ring-black-300 transition"
            />
            <button
              type="button"
              onClick={() => setShowSearch(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-red-500 transition"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent shadow transition-all duration-300 text-center">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium">
            <li>
              <Link
                className="hover:text-red-500"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500"
                to="/productsPage"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500"
                to="/About Us"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-500"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

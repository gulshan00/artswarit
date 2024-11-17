// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      <nav className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-200 via-pink-100 to-purple-200 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
            A
          </div>
          <h1 className="font-bold text-lg">Artswarit</h1>
        </div>

        {/* Navbar Links (Hidden on Small Devices) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-purple-600">
            Campaigns
          </a>
          <a href="#" className="hover:text-purple-600">
            Register
          </a>
          <a href="#" className="hover:text-purple-600">
            Specials
          </a>
          <FaHeart size={24} className="text-red-500" />
        </div>
        <button className=" md:block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Start Creating
        </button>
        <button
          className="block md:hidden text-gray-700 text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Slider Menu (Left Side) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-gray-100 to-gray-300 shadow-lg transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col h-full p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <a href="#" className="py-2 hover:text-purple-600">
            Campaigns
          </a>
          <a href="#" className="py-2 hover:text-purple-600">
            Register
          </a>
          <a href="#" className="py-2 hover:text-purple-600">
            Specials
          </a>
          <a href="#" className="py-2 hover:text-purple-600">
            About Us
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;

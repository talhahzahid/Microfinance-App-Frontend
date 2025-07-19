import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/home" className="text-xl font-bold text-blue-700">
            My Laon App
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/home" className="text-gray-700 hover:text-blue-700">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700">
              About
            </Link>
            <Link
              to="/calculateloan"
              className="text-gray-700 hover:text-blue-700"
            >
              Request a loan
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-700">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link
            to="/home"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-700"
          >
            About
          </Link>
          <Link
            to="/calculateloan"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-700"
          >
            Request a loan
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block py-2 text-gray-700 hover:text-blue-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

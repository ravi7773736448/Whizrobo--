import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 fixed top-0 w-full z-50 font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="flex items-center max-w-7xl mx-auto">

        {/* LEFT: Logo */}
        <Link to="/">
          <img
            src="https://whizrobo.com/wp-content/uploads/2023/07/logo.png"
            alt="WHIZROBO Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* RIGHT: Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Link to="/" className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Home
          </Link>
          <Link to="/kits" className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Kits
          </Link>
          <Link to="/robots" className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Robots
          </Link>
          <Link to="/about" className="text-black font-semibold hover:text-gray-700 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Contact Us
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-[#EC7B21] text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition duration-300"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white p-4 rounded-md shadow-sm">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Home
          </Link>
          <Link to="/kits" onClick={() => setIsMenuOpen(false)} className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Kits
          </Link>
          <Link to="/robots" onClick={() => setIsMenuOpen(false)} className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Robots
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-black font-semibold hover:text-gray-700 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-black font-semibold hover:text-gray-700 transition duration-300">
            Contact Us
          </Link>

          {/* Login Button (Mobile) */}
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#EC7B21] text-white px-4 py-2 rounded-lg font-medium text-center hover:opacity-90 transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

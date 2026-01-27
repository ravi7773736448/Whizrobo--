import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiBell } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Update user on mount AND route change
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else setUser(null);
  }, [location]);

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <nav className="bg-white shadow-sm py-4 px-6 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* LOGO */}
        <Link to={user ? "/dashboard" : "/"}>
          <img
            src="https://whizrobo.com/wp-content/uploads/2023/07/logo.png"
            alt="WHIZROBO Logo"
            className="h-10"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {(!user || !isDashboard) && (
            <>
              <Link to="/" className="font-semibold">Home</Link>
              <Link to="/kits" className="font-semibold">Kits</Link>
              <Link to="/robots" className="font-semibold">Robots</Link>
              <Link to="/about" className="font-semibold">AboutUs</Link>
              <Link to="/contact" className="font-semibold">ContactUs</Link>
            </>
          )}

          {/* Show LOGIN only if user not logged in */}
          {!user && (
            <Link
              to="/login"
              className="bg-[#EC7B21] text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          )}

          {/* Dashboard user info */}
          {user && isDashboard && (
            <div className="flex items-center gap-4">
              <div className="relative cursor-pointer">
                <HiBell className="text-2xl text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="user"
                  className="h-9 w-9 rounded-full"
                />
                <span className="font-semibold text-gray-800">{user.name}</span>
              </div>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg py-4 px-6 flex flex-col gap-4">
          {(!user || !isDashboard) && (
            <>
              <Link to="/" className="font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/kits" className="font-semibold" onClick={() => setIsMenuOpen(false)}>Kits</Link>
              <Link to="/robots" className="font-semibold" onClick={() => setIsMenuOpen(false)}>Robots</Link>
              <Link to="/about" className="font-semibold" onClick={() => setIsMenuOpen(false)}>AboutUs</Link>
              <Link to="/contact" className="font-semibold" onClick={() => setIsMenuOpen(false)}>ContactUs</Link>
            </>
          )}

          {!user && (
            <Link
              to="/login"
              className="bg-[#EC7B21] text-white px-5 py-2 rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          )}

          {/* Dashboard user info for mobile */}
          {user && isDashboard && (
            <div className="flex items-center gap-3">
              <HiBell className="text-2xl text-gray-700" />
              <span className="font-semibold">{user.name}</span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

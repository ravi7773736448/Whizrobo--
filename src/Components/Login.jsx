import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: simulate success
    if (isRegister) {
      alert(`Registered Successfully! Welcome, ${formData.name}`);
      setIsRegister(false);
    } else {
      alert(`Welcome back, ${formData.email}!`);
    }
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-montserrat">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#EC7B21]">
          {isRegister ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isRegister && (
            <div>
              <label className="block text-black font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7B21] focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-black font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7B21] focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-black font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC7B21] focus:outline-none pr-12"
            />
            <span
              className="absolute right-3 top-[38px] text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#EC7B21] to-orange-400 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isRegister ? "Sign Up" : "Log In"}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-[#EC7B21] font-medium hover:underline focus:outline-none"
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          By continuing, you agree to our{" "}
          <Link
            to="/terms-and-conditions"
            className="text-[#EC7B21] hover:underline font-medium"
          >
            Terms of Service
          </Link>{" "}
          &{" "}
          <Link
            to="/privacy-policy"
            className="text-[#EC7B21] hover:underline font-medium"
          >
            Privacy Policy
          </Link>.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

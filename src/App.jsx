import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Removed: import { CartProvider } from "./context/CartContext";
import Navbar from "./Components/Navbar";
// Removed: import CartSidebar from "./Components/CartSidebar";
// Removed: import Products from "./Components/Products";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
// Removed: import Checkout from "./Components/Checkout";
// Removed: import OrderConfirmation from "./Components/OrderConfirmation";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster for notifications
import Contact from "./Components/Contact";
import Robots from "./Components/Robots";
import RobotDetails from "./Components/RobotDetails";
import Demo from "./Components/Demo";
import TermsAndConditions from "./Components/TermsAndConditions";
import Privacy from "./Components/Privacy";
import Kits from "./Components/Kits";

function App() {
  return (
    <>
      {/* ✅ Toast container for global notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#4ade80",
              color: "#fff",
              fontWeight: "600",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#16a34a",
            },
          },
          error: {
            style: {
              background: "#f87171",
              color: "#fff",
              fontWeight: "600",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#b91c1c",
            },
          },
        }}
      />

      <Router>
        <Navbar />
        
        <main className="min-h-screen pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kits" element={<Kits />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/robots/:id" element={<RobotDetails />} />
            {/* Removed: <Route path="/products" element={<Products />} /> */}
            <Route path="/about" element={<AboutUs />} />
            {/* Removed: <Route path="/checkout" element={<Checkout />} /> */}
            <Route path="/cart" element={<div className="p-8 text-center">Cart Page</div>} />
            {/* Removed: <Route path="/order-confirmation" element={<OrderConfirmation />} /> */}
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const robotModels = ["WHIZBOT", "WHIZ BUDDY", "WHIZ GREETER", "WHIZ AARU"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    robotModel: "",
    quantity: "",
    message: "",
  });
  const [showQuantity, setShowQuantity] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "robotModel" && value !== "") setShowQuantity(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", robotModel: "", quantity: "", message: "" });
    setShowQuantity(false);
  };

  return (
    <section className="bg-white min-h-screen px-6 py-16 font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-black mb-4">Contact WHIZROBO</h1>
        <p className="text-black/70 text-lg">
          Interested in our robots? Fill the form below and our team will assist you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold text-black mb-8">Get in Touch</h2>
          <div className="space-y-6 text-black/80 text-lg">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#EC7B21] text-2xl" />
              <span>+91-896-871-4000, +91-946-421-4000</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#EC7B21] text-2xl" />
              <span>
                <a href="mailto:info@whizrobo.com" className="underline hover:text-[#EC7B21]">info@whizrobo.com</a>,{" "}
                <a href="mailto:support@whizrobo.com" className="underline hover:text-[#EC7B21]">support@whizrobo.com</a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#EC7B21] text-2xl" />
              <span>WHIZROBO PRIVATE LIMITED, INDIA</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFileAlt className="text-[#EC7B21] text-2xl" />
              <span className="space-x-2">
                <Link to="/privacy-policy" className="underline hover:text-[#EC7B21]">Privacy Policy</Link>|
                <Link to="/terms-and-conditions" className="underline hover:text-[#EC7B21]">Terms & Conditions</Link>
              </span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex items-center gap-5 text-xl">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="text-[#EC7B21] hover:scale-110 transition-transform"><Icon /></a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-lg transition">
          <h2 className="text-3xl font-bold text-black mb-8">Request a Quote</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full border rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#EC7B21]" />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full border rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#EC7B21]" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full border rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#EC7B21]" />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full border rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#EC7B21]" />

            <select name="robotModel" required value={formData.robotModel} onChange={handleChange} className="w-full border rounded-xl px-5 py-3 bg-white focus:ring-2 focus:ring-[#EC7B21]">
              <option value="" disabled>Select Robot Model *</option>
              {robotModels.map((model) => <option key={model} value={model}>{model}</option>)}
            </select>

            {showQuantity && (
              <input type="number" name="quantity" required value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="w-full border rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#EC7B21]" />
            )}

            <textarea name="message" rows="5" placeholder="Additional Requirements / Message" value={formData.message} onChange={handleChange} className="w-full border rounded-xl px-5 py-3 focus:ring-2 focus:ring-[#EC7B21]" />

            <button type="submit" className="w-full bg-[#EC7B21] hover:bg-[#ff9c42] text-white font-semibold py-3 rounded-xl transition-transform hover:scale-105">
              Request Quote
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-16 text-center text-black/60">
        Powered by <span className="font-semibold text-black">WHIZROBO</span>
      </footer>
    </section>
  );
};

export default Contact;

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        `}
      </style>

      <div
        className="flex flex-col min-h-screen bg-white text-black"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Hero Section with Background Video */}
        <section className="relative flex flex-col justify-center items-center text-center px-6 min-h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/WhatsApp Video 2026-01-14 at 2.00.17 PM.mp4" // Replace with your video URL or path
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay for better readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

          {/* Text Content */}
          <div className="relative z-10 max-w-4xl px-4">
            <h1
              className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              
              <br />
              Robotics & AI Education
            </h1>

            <p
              className="mt-6 text-white text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Making <strong>robotics</strong>, <strong>AI</strong>, and{" "}
              <strong>technology education</strong> approachable, practical, and exciting
              for learners of all ages.
            </p>

            <a
              href="/robots"
              className="mt-10 inline-block bg-[#EC7B21] text-white px-12 py-4 rounded-lg font-semibold text-lg
                         shadow-lg hover:shadow-[0_8px_15px_rgba(236,123,33,0.7)]
                         transition-shadow duration-300 hover:scale-105"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Robot Kits
            </a>
          </div>
        </section>

        {/* Feature Section: Left Text, Right Image */}
           <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div className="space-y-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#EC7B21] leading-tight">
        Build. Learn. Innovate.
      </h2>
      <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
        Explore the world of robotics and AI with hands-on kits and guided projects. 
        Whizrobo makes learning tech fun, practical, and accessible for everyone — from beginners to enthusiasts.
      </p>
      <a
        href="/kits"
        className="inline-block bg-[#EC7B21] text-white px-10 py-4 rounded-xl font-semibold 
                   shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
      >
        Discover Our Kits
      </a>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end mt-10 md:mt-0">
      <img
        src="https://whizrobo.com/wp-content/uploads/2024/11/IBR11-scaled.jpg"
        alt="Hands-on Robotics Learning"
        className="rounded-xl shadow-2xl w-full max-w-md object-contain"
        style={{ aspectRatio: '4/3' }}
      />
    </div>
  </div>
</section>


        {/* App Section with Download Button */}
        <section className="py-12 flex flex-col items-center gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.whizrobo&pcampaignid=web_share"
            className="transition-transform hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.whizrobo&pcampaignid=web_share"
            className="mt-2 px-8 py-3 bg-[#EC7B21] text-white rounded-lg font-semibold text-lg
                       shadow-lg hover:shadow-[0_8px_15px_rgba(236,123,33,0.7)]
                       transition-shadow duration-300 hover:scale-105"
          >
            Download
          </a>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-300 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About */}
            <div>
              <h3 className="text-[#EC7B21] text-xl font-bold mb-4">
                WHIZROBO
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Whizrobo makes robotics, AI, and STEM learning practical and
                exciting through hands-on kits, labs, and real-world projects.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#EC7B21] text-xl font-bold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/robots" className="hover:text-white">Robots</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-[#EC7B21] text-xl font-bold mb-4">
                Connect With Us
              </h3>

              <div className="flex gap-5 text-xl mb-5">
                <a
                  href="https://www.facebook.com/whizrobo/"
                  className="hover:text-[#EC7B21]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://in.linkedin.com/company/whizrobo"
                  className="hover:text-[#EC7B21]"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/whizrobo_/"
                  className="hover:text-[#EC7B21]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=9464214000&text=Hi%2C+Whizrobo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EC7B21]"
                >
                  <FaWhatsapp />
                </a>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Email:{" "}
                <a
                  href="mailto:info@whizrobo.com"
                  className="hover:text-white"
                >
                  info@whizrobo.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+918968714000"
                  className="hover:text-white"
                >
                  +91-896-871-4000
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} WHIZROBO. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

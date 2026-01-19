import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const robots = [
  {
    name: "WHIZBOT",
    image: "/WhizBot.jpg",
    description:
      "AI Agent for automation, simplifying workflows and delivering intelligent actions.",
  },
  {
    name: "WHIZ BUDDY",
    image: "/WhizBuddy.jpg",
    description:
      "Smart AI Assistant for schools, helping teachers manage classrooms and guide visitors.",
  },
  {
    name: "WHIZ GREETER",
    image: "/WhizGreet.jpg",
    description:
      "Humanoid robot welcoming and assisting visitors with face recognition and scheduling.",
  },
  {
    name: "WHIZ AARU",
    image: "/Whiz aaru.jpg",
    description:
      "AI Teacher for personalized learning, automating tasks, and mentoring students 24x7.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-white min-h-screen px-6 py-20">
      {/* Import Montserrat font */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');`}
      </style>

      <div className="max-w-6xl mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black">
            About <span className="text-[#EC7B21]">WHIZROBO</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Making robotics and AI education approachable, practical, and exciting.
            We build intelligent robots to automate, assist, and empower learners and workplaces.
          </p>
        </div>

        {/* Robots Overview */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
            Our AI Robots
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {robots.map(({ name, image, description }) => (
              <div
                key={name}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Circular Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-sm transition-transform transform group-hover:scale-105">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "/images/placeholder.png")}
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-[#EC7B21] transition-transform duration-300 group-hover:-translate-y-1">
                    {name}
                  </h3>
                  <p className="text-black/80 text-sm md:text-base mt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Our Impact at a Glance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "1000+", label: "Students Trained" },
              { value: "300+", label: "Schools Served" },
              { value: "1000+", label: "Workshops Conducted" },
              { value: "30", label: "India Book Records" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <p className="text-[#EC7B21] text-4xl md:text-5xl font-extrabold mb-2">
                  {item.value}
                </p>
                <p className="text-black/80 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-md px-10 py-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Connect with <span className="text-[#EC7B21]">WHIZROBO</span>
          </h2>

          <p className="text-black/70 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Follow us to stay updated with our latest robots, innovations, workshops, and success stories.
          </p>

          <div className="flex justify-center gap-6 text-3xl md:text-4xl">
            <a href="https://www.facebook.com/whizrobo/" target="_blank" rel="noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/whizrobo_/" target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/whizrobo/" target="_blank" rel="noreferrer" className="text-blue-700 hover:scale-110 transition-transform">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-sky-500 hover:scale-110 transition-transform">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-600 hover:scale-110 transition-transform">
               <FaYoutube />
                </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-black/60 px-4">
          © {new Date().getFullYear()} <span className="font-semibold text-black">WHIZROBO</span>. Friendly robotics & AI for a smarter tomorrow.
        </footer>
      </div>
    </section>
  );
};

export default AboutUs;

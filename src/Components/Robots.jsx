import React from "react";
import { Link } from "react-router-dom";

const robotsData = [
  {
    id: "1",
    name: "WhizBot",
    image: "/WhizBot.jpg",
    shortDesc:
      "Automates workflows and delivers intelligent actions to simplify complex tasks.",
  },
  {
    id: "2",
    name: "WhizBuddy",
    image: "/WhizBuddy.jpg",
    shortDesc:
      "Smart assistant for schools, helping teachers manage classrooms and support students.",
  },
  {
    id: "3",
    name: "WhizGreeter",
    image: "/WhizGreet.jpg",
    shortDesc:
      "Welcomes visitors with AI-powered interaction, face recognition, and scheduling assistance.",
  },
  {
    id: "4",
    name: "WhizAaru",
    image: "/Whiz aaru.jpg",
    shortDesc:
      "AI Teacher delivering personalized lessons, quizzes, and real-time learning support.",
  },
];

const Robots = () => {
  return (
    <>
      {/* Google Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        `}
      </style>

      <section
        className="min-h-screen bg-gray-50 px-6 pt-20 pb-16 font-sans"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet Our Robots
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Explore our advanced robotics solutions designed to inspire learning,
            innovation, and smarter automation.
          </p>
        </div>

        {/* Robots List */}
        <div className="flex flex-col gap-16">
          {robotsData.map((robot, index) => (
            <div
              key={robot.id}
              className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Robot Image */}
              <div className="md:w-1/2 h-80 md:h-[28rem] flex items-center justify-center overflow-hidden relative bg-gray-50">
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="object-contain w-full h-full rounded-2xl shadow-md transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => (e.target.src = "/images/placeholder.png")}
                />
              </div>

              {/* Robot Content */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase mb-4 transition-transform duration-500 hover:translate-y-[-3px]">
                  {robot.name}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  {robot.shortDesc}
                </p>
                <Link
                  to={`/robots/${robot.id}`}
                  className="inline-block bg-[#EC7B21] hover:bg-[#d96b1d] text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 self-center md:self-start shadow-md hover:shadow-lg"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Robots;

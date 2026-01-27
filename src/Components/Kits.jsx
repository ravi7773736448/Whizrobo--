import React, { useState, useEffect } from "react";

<<<<<<< HEAD
  const kitsData = {
    IOT: [
      {
        id: 1,
        name: "WHIZ IOT",
        type: "image",
        src: "/Level - 6 (IOT Kit).jpg",
        description:
          "Internet of Things (IoT) training kit designed for building smart devices and connected solutions such as smart homes, automated farms, and industrial sensor systems. The kit includes Arduino, sensors, LCD display, relay modules, and essential components for real-world IoT applications through hands-on learning.",
        grades: [
          "IDEAL FOR GRADES 10–12",
          "HANDS-ON DIGITAL TRANSFORMATION LEARNING",
          "INTRODUCTION TO IOT AND CONNECTED DEVICES",
        ],
      },
      {
        id: 2,
        name: "WHIZ BT",
        type: "image",
        src: "/Level - 7 (IOT Kit).jpg",
        description:
          "Bluetooth-enabled advanced training kit designed for wireless communication, smart automation, and real-world IoT and robotics projects. Includes Raspberry Pi, Arduino, sensors, motor drivers, displays, and multiple input-output modules for complex experimentation.",
        grades: [
          "IDEAL FOR GRADES 7–9",
          "SMART AUTOMATION AND DATA MONITORING",
          "REAL-WORLD IOT & ROBOTICS PROJECT EXPERIENCE",
        ],
      },
    ],
=======
const kitsData = {
  IOT: [
    {
      id: 1,
      name: "WHIZ IOT",
      type: "image",
      src: "/Level - 6 (IOT Kit).jpg",
      description:
        "Internet of Things (IoT) training kit designed for building smart devices and connected solutions such as smart homes, automated farms, and industrial sensor systems. The kit includes Arduino, sensors, LCD display, relay modules, and essential components for real-world IoT applications through hands-on learning.",
      grades: [
        "IDEAL FOR GRADES 10–12",
        "HANDS-ON DIGITAL TRANSFORMATION LEARNING",
        "INTRODUCTION TO IOT AND CONNECTED DEVICES",
      ],
    },
    {
      id: 2,
      name: "WHIZ BT",
      type: "image",
      src: "/Level - 7 (IOT Kit).jpg",
      description:
        "Bluetooth-enabled advanced training kit designed for wireless communication, smart automation, and real-world IoT and robotics projects. Includes Raspberry Pi, Arduino, sensors, motor drivers, displays, and multiple input-output modules for complex experimentation.",
      grades: [
        "IDEAL FOR GRADES 7–9",
        "SMART AUTOMATION AND DATA MONITORING",
        "REAL-WORLD IOT & ROBOTICS PROJECT EXPERIENCE",
      ],
    },
  ],
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311

    WHIZROBO: [
      {
        id: 3,
        name: "WHIZ BUILDER",
        type: "image",
        src: "/WHIZ builder (2).jpg",
        description:
          "Entry-level robotics kit designed for young learners to build simple robots, understand basic circuits, and explore hands-on STEM concepts. Arduino-based kit with sensors and modules for projects like mixers, conveyors, and rope-skipping machines using Scratch-based graphical coding.",
        grades: [
          "IDEAL FOR GRADES 1–2",
          "BASIC ROBOT BUILDING AND CIRCUITS",
          "FOUNDATION FOR STEM LEARNING",
        ],
      },
      {
        id: 4,
        name: "WHIZ CREATOR",
        type: "image",
        src: "/Whiz Creator.jpg",
        description:
          "Modular STEM learning kit designed to help children explore electronics, sensors, and creative robotics projects. Safe plug-and-play components allow learners to build interactive models while developing coding, creativity, and problem-solving skills using graphical programming.",
        grades: [
          "IDEAL FOR GRADES 3–4",
          "CREATIVE ROBOTICS AND CODING",
          "SUITED FOR INNOVATION CHALLENGES & CODING CLUBS",
        ],
      },
      {
        id: 5,
        name: "WHIZ BOX",
        type: "image",
        src: "/WHIZ BOX.jpg",
        description:
          "All-in-one robotics and electronics experimentation box featuring built-in sensors, display, RFID tools, and interactive modules. Designed for building, testing, and coding electronics projects using simple block-based programming.",
        grades: [
          "IDEAL FOR GRADES 3–5",
          "PERFECT FOR CLASSROOM DEMONSTRATIONS",
          "ELECTRONICS AND CODING BASICS",
        ],
      },
      {
        id: 6,
        name: "WHIZ INNOVATOR",
        type: "image",
        src: "/Whiz Innovator (1).jpg",
        description:
          "Advanced STEM kit featuring wireless modules, programmable boards, and AI training activities. Designed to help students explore robotics, sensors, and smart automation while preparing for machine learning and real-world problem-solving.",
        grades: [
          "IDEAL FOR GRADES 6–7",
          "INTERMEDIATE-LEVEL ROBOTICS PROJECTS",
          "AI AND SMART AUTOMATION TRAINING",
        ],
      },
      {
        id: 7,
        name: "WHIZ INVENTOR",
        type: "image",
        src: "/WHIZ INVENTOR.jpg",
        description:
          "Inventor’s kit focused on prototyping, mechanical design, and custom robotics projects. Includes assorted frames, sensors, and controller boards to support competitive robotics and engineering exploration.",
        grades: [
          "IDEAL FOR GRADES 8–9",
          "COMPETITIVE ROBOTICS AND ENGINEERING",
          "ADVANCED PROTOTYPING AND DESIGN",
        ],
      },
    ],
  };

const Kits = () => {
  const [selectedKit, setSelectedKit] = useState("WHIZROBO");
  const [selectedItem, setSelectedItem] = useState(kitsData["WHIZROBO"][0]);

  useEffect(() => {
    setSelectedItem(kitsData[selectedKit][0]);
  }, [selectedKit]);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/placeholder.png";
  };

  return (
<<<<<<< HEAD
    <div
      className="w-full min-h-screen bg-white font-sans"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
=======
    <div className="w-full min-h-screen bg-white font-sans" style={{ fontFamily: "Montserrat, sans-serif" }}>
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
      {/* Kit Selector */}
      <div className="flex gap-3 overflow-x-auto p-4 sticky top-0 z-50 bg-white border-b border-gray-200 scrollbar-thin scrollbar-thumb-[#EC7B21] scrollbar-track-gray-100">
        {Object.keys(kitsData).map((kit) => (
          <button
            key={kit}
            onClick={() => setSelectedKit(kit)}
            className={`flex-shrink-0 px-5 py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-sm whitespace-nowrap ${
              selectedKit === kit
                ? "bg-[#EC7B21] text-white scale-105"
                : "bg-white text-black border border-[#EC7B21] hover:bg-[#EC7B21] hover:text-white"
            }`}
          >
            {kit} KITS
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 mt-6">
        {/* Sidebar */}
<<<<<<< HEAD
        <aside
          className="md:w-80 bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto sticky top-[88px] scrollbar-thin scrollbar-thumb-[#EC7B21] scrollbar-track-gray-100"
        >
=======
        <aside className="md:w-72 bg-white rounded-2xl shadow-sm p-4 sticky top-[88px] overflow-x-auto md:overflow-y-auto flex flex-row md:flex-col gap-4">
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
          {kitsData[selectedKit].map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
<<<<<<< HEAD
              className={`cursor-pointer flex flex-col items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
=======
              className={`cursor-pointer flex flex-col items-center gap-2 p-2 md:p-3 rounded-xl transition-all duration-300 ${
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
                selectedItem.id === item.id
                  ? "bg-[#fff5ee] font-bold border-2 border-[#EC7B21]"
                  : "hover:bg-[#fff5ee]"
              }`}
<<<<<<< HEAD
              style={{ minWidth: "72px" }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 rounded-full border border-[#EC7B21] overflow-hidden">
=======
              style={{ minWidth: "64px" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 rounded-full border border-[#EC7B21] overflow-hidden">
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
<<<<<<< HEAD
              <span className="text-center text-sm sm:text-base md:text-lg font-semibold text-black select-none">
=======
              <span className="text-center text-xs sm:text-sm md:text-base font-semibold text-black select-none">
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
                {item.name}
              </span>
            </div>
          ))}
        </aside>

<<<<<<< HEAD
        {/* Content Area */}
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div className="flex flex-col justify-start gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center md:text-left">
              {selectedItem.name}
            </h2>
            <p className="text-lg md:text-xl text-black">{selectedItem.description}</p>

            <ul className="space-y-4 mt-6">
              {selectedItem.grades.map((line, index) => (
                <li
                  key={index}
                  className="text-[#EC7B21] font-semibold text-lg border-l-4 border-[#EC7B21] pl-4"
=======
        {/* Content Area: Use grid for proper alignment */}
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Text */}
          <div className="flex flex-col justify-start gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center md:text-left">
              {selectedItem.name}
            </h2>
            <p className="text-base md:text-lg text-black">{selectedItem.description}</p>

            <ul className="space-y-3 mt-4">
              {selectedItem.grades.map((line, index) => (
                <li
                  key={index}
                  className="text-[#EC7B21] font-semibold text-base border-l-4 border-[#EC7B21] pl-3"
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center items-start">
<<<<<<< HEAD
            <div className="w-full max-w-lg aspect-[4/3]">
              <img
                src={selectedItem.src}
                alt={selectedItem.name}
                className="w-full h-full object-contain rounded-3xl shadow-lg"
=======
            <div className="w-full max-w-md aspect-[4/3]">
              <img
                src={selectedItem.src}
                alt={selectedItem.name}
                className="w-full h-full object-contain rounded-2xl shadow-md"
>>>>>>> 01a0ad3c1304da35f2186412dbfd26f0300bb311
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kits;

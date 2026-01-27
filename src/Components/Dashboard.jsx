import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaSignOutAlt,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */
const itemsData = [
  {
    id: 1,
    name: "WHIZ IOT",
    image: "/Level - 6 (IOT Kit).jpg",
    description:
      "IoT kit for building smart homes, farms, and industrial automation projects.",
    type: "Kit",
    category: "IOT",
  },
  {
    id: 2,
    name: "WHIZ BT",
    image: "/Level - 7 (IOT Kit).jpg",
    description:
      "Bluetooth-enabled kit for wireless robotics and automation projects.",
    type: "Kit",
    category: "IOT",
  },
  {
    id: 3,
    name: "WHIZ BUILDER",
    image: "/WHIZ builder (2).jpg",
    description:
      "Entry-level robotics kit to explore electronics and coding.",
    type: "Kit",
    category: "WHIZROBO",
  },
  {
    id: 4,
    name: "WHIZ CREATOR",
    image: "/Whiz Creator.jpg",
    description:
      "Modular STEM kit for creative robotics and interactive models.",
    type: "Kit",
    category: "WHIZROBO",
  },
  {
    id: 5,
    name: "WHIZ BOX",
    image: "/WHIZ BOX.jpg",
    description:
      "All-in-one robotics and electronics box with sensors and displays.",
    type: "Kit",
    category: "WHIZROBO",
  },
  {
    id: 6,
    name: "WHIZ INNOVATOR",
    image: "/Whiz Innovator (1).jpg",
    description:
      "Advanced kit with AI, automation, and wireless projects.",
    type: "Kit",
    category: "WHIZROBO",
  },
  {
    id: 7,
    name: "WHIZ INVENTOR",
    image: "/WHIZ INVENTOR.jpg",
    description:
      "Inventor kit for competitive robotics and engineering challenges.",
    type: "Kit",
    category: "WHIZROBO",
  },
  {
    id: 8,
    name: "WhizBot",
    image: "/WhizBot.jpg",
    description: "AI agent for automation and productivity.",
    type: "Robot",
  },
  {
    id: 9,
    name: "WhizBuddy",
    image: "/WhizBuddy.jpg",
    description: "AI assistant for students and teachers.",
    type: "Robot",
  },
];

/* ================= CARD ================= */
const Card = ({ item, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    onClick={() => onClick(item)}
    className="bg-white rounded-2xl shadow cursor-pointer overflow-hidden hover:shadow-xl transition relative"
  >
    {item.category && (
      <span className="absolute mt-3 ml-3 bg-[#EC7B21] text-white px-3 py-1 rounded-full text-xs font-semibold">
        {item.category}
      </span>
    )}

    <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
      <img
        src={item.image}
        alt={item.name}
        className="max-h-full object-contain"
      />
    </div>

    <div className="p-4 text-center">
      <h3 className="font-bold text-lg text-black">{item.name}</h3>
    </div>
  </motion.div>
);

/* ================= SIDEBAR ITEM ================= */
const SidebarItem = ({ icon, label, active }) => (
  <li
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer ${
      active
        ? "bg-[#EC7B21] text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    {icon}
    {label}
  </li>
);

/* ================= DASHBOARD ================= */
const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [activeTab, setActiveTab] = useState("Kits");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalItem, setModalItem] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const filteredItems = itemsData.filter((item) => {
    const q = searchQuery.toLowerCase();
    const typeMatch =
      activeTab === "Kits" ? item.type === "Kit" : item.type === "Robot";

    return (
      typeMatch &&
      (item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white p-6 shadow-xl flex flex-col justify-between">
        <ul className="space-y-3">
          <SidebarItem icon={<FaHome />} label="Dashboard" active />
          <SidebarItem icon={<FaRobot />} label="My Robots" />
        </ul>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-500 font-semibold mt-6"
        >
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8 space-y-6">
        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {user?.name || "Student"} 👋
            </h1>
            <p className="text-gray-500">
              Build. Code. Innovate with Whizrobo.
            </p>
          </div>
        </div>

        {/* SEARCH & TABS */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative max-w-md w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kits or robots..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border focus:outline-none"
            />
          </div>

          <div className="flex gap-3">
            {["Kits", "Robots"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl font-semibold ${
                  activeTab === tab
                    ? "bg-[#EC7B21] text-white"
                    : "bg-white border text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} item={item} onClick={setModalItem} />
          ))}
        </div>
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalItem(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#EC7B21]"
              >
                <FaTimes size={24} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-gray-100 p-6 flex justify-center">
                  <img
                    src={modalItem.image}
                    alt={modalItem.name}
                    className="max-h-96 object-contain"
                  />
                </div>

                <div className="md:w-1/2 p-6 space-y-4">
                  <h2 className="text-2xl font-bold">{modalItem.name}</h2>
                  <p className="text-gray-600">{modalItem.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;

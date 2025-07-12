import React from "react";
import { IoMdMenu } from "react-icons/io";
const Sidebar = () => (
  <aside className="sidebar bg-gray-900 text-gray-300 w-60 flex flex-col">
    <div className="px-4 py-6 border-gray-800 flex items-center justify-between h-16">
      <h1 className="text-lg font-bold text-white">My Dashboard </h1>
      <button className="p-2 rounded cursor-pointer hover:bg-gray-700 transition duration-200">
        <IoMdMenu size={20} />
        </button>
    </div>
    <nav className="flex-1 px-2 py-4 space-y-2 text-sm">
      {["Dashboard", "Calendar", "Contacts", "Teachers", "Release Notes", "Admin", "Setup", "Timeline"].map((item) => (
        <a
          key={item}
          href="#"
          className={`block px-3 py-2 rounded hover:bg-gray-700 ${
            item === "Teachers" ? "font-semibold bg-gray-800" : ""
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  </aside>
);

export default Sidebar;

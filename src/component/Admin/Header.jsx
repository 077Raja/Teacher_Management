import React from "react";
import { LuUserRound } from "react-icons/lu";
const Header = () => (
  <header className="bg-red-600 flex items-center justify-between px-6 py-2 text-white h-12 shadow-md select-none">
    <div className="flex items-center space-x-4">
      <span className="font-semibold">Richmond Hill</span>
    </div>
    <div className="flex items-center space-x-3">
      <button className="hover:bg-red-700 rounded p-1"></button>
      <div className="flex items-center space-x-2 cursor-pointer select-none">
        <LuUserRound/>
        <span>jseng</span>
      </div>
    </div>
  </header>
);

export default Header;

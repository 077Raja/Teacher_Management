import React from "react";

const Card = ({ title, children }) => (
  <div className="bg-white rounded shadow-sm p-4 border border-gray-300 relative">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600">+</button>
    </div>
    {children}
  </div>
);

export default Card;

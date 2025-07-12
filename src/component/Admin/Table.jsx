import React from "react";

const Table = ({ data, rate }) => (
  <table className="w-full text-left text-sm text-gray-700 border border-gray-200 rounded">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-3 py-2 font-semibold border-b border-gray-200">Name</th>
        <th className="px-3 py-2 font-semibold border-b border-gray-200">Rate ($/hr)</th>
      </tr>
    </thead>
    <tbody>
      {data.map((name, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
          <td className="px-3 py-2">{name}</td>
          <td className="px-3 py-2">{rate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;

import React from "react";

const AvailabilityTable = () => {
  const shadedTimes = ["3pm", "3:30pm", "4pm", "4:30pm", "5pm"];
  const shadedDays = [0, 2];

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse border border-gray-300 w-full text-xs text-center text-gray-600">
        <thead className="bg-gray-300 text-gray-700">
          <tr>
            <th className="border border-gray-400 w-12 py-1 font-medium">Time</th>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <th key={day} className="border border-gray-400 w-20 py-1 font-medium">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300">
            <td className="border border-gray-400 px-1">all-day</td>
            <td colSpan={7} className="border border-gray-400 bg-gray-400"></td>
          </tr>
          {[
            "7:30am", "8am", "8:30am", "9am", "9:30am", "10am", "10:30am", "11am",
            "11:30am", "12pm", "12:30pm", "1pm", "1:30pm", "2pm", "2:30pm",
            "3pm", "3:30pm", "4pm", "4:30pm", "5pm",
          ].map((time) => (
            <tr key={time}>
              <td className="border border-gray-400 px-1">{time}</td>
              {[...Array(7)].map((_, dayIndex) => {
                const isShaded = shadedTimes.includes(time) && shadedDays.includes(dayIndex);
                return (
                  <td
                    key={dayIndex}
                    className={`border border-gray-400 ${isShaded ? "bg-green-300" : "bg-gray-300"}`}
                    title={isShaded ? `${time} availability` : ""}
                  >
                    &nbsp;
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailabilityTable;

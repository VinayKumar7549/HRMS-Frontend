import React, { useState } from "react";

const LeaveBalance = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const balanceData = [
    { type: "Personal Leave", remaining: 24, description: "Personal leave for personal matters." },
    { type: "Sick Leave", remaining: 8, description: "Leave when you're feeling unwell." },
    { type: "Work from Home", remaining: 48, description: "Work remotely from your home." },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold">Overall Leave Summary for 2025</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {balanceData.map((balance, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg shadow-md text-center relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="text-lg font-bold">{balance.type}</h3>
            <p className="text-green-500">Remaining: {balance.remaining}</p>
            {hoveredIndex === index && (
              <div className="absolute left-0 top-full mt-2 p-2 w-full bg-gray-700 text-white rounded-md shadow-lg">
                {balance.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveBalance;

import React, { useState } from "react";

const LeaveSummary = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2025");

  const leaveData = [
    { type: "Personal Leave", available: 6, booked: 0, description: "Personal leave for personal matters." },
    { type: "Sick Leave", available: 1, booked: 1, description: "Leave when you're feeling unwell." },
    { type: "Work from Home", available: 12, booked: 0, description: "Work remotely from your home." },
  ];

  const yearWiseSummary = {
    "2023": [
      { type: "Personal Leave", totalTaken: 5, remaining: 15 },
      { type: "Sick Leave", totalTaken: 2, remaining: 8 },
      { type: "Work from Home", totalTaken: 3, remaining: 12 },
    ],
    "2024": [
      { type: "Personal Leave", totalTaken: 10, remaining: 15 },
      { type: "Sick Leave", totalTaken: 5, remaining: 7 },
      { type: "Work from Home", totalTaken: 6, remaining: 14 },
    ],
    "2025": [
      { type: "Personal Leave", totalTaken: 15, remaining: 15 },
      { type: "Sick Leave", totalTaken: 7, remaining: 8 },
      { type: "Work from Home", totalTaken: 10, remaining: 15 },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Current Quarter-1 Leave Summary in 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {leaveData.map((leave, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md text-center relative md:col-span-1 w-72"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="text-2xl font-bold">{leave.type}</h3>
            <p className="text-lg text-green-500">{leave.available} Available</p>
            <p className="text-sm text-red-500">{leave.booked} Booked</p>
            {hoveredIndex === index && (
              <div className="absolute left-0 top-full mt-2 p-2 w-full bg-gray-700 text-white rounded-md shadow-lg">
                {leave.description}
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8">Year-wise Overall Leave Summary</h2>
      <div className="mt-4">
        <label htmlFor="yearSelector" className="block text-sm font-medium text-gray-700">
          Select Year:
        </label>
        <select
          id="yearSelector"
          className="mt-1 block w-1/4 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
        {yearWiseSummary[selectedYear].map((summary, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg shadow-md text-center md:col-span-1 w-72"
          >
            <h3 className="text-2xl font-bold">{summary.type}</h3>
            <p className="text-lg text-blue-500">Total Taken: {summary.totalTaken}</p>
            <p className="text-sm text-green-500">Remaining: {summary.remaining}</p>
            <a href="#" className="text-blue-600 hover:underline">Click here for detailed view</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveSummary;

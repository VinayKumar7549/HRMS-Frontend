import React, { useEffect, useState } from "react";

const OnLeave = () => {
  const [onLeaveEmployees, setOnLeaveEmployees] = useState([]);

  useEffect(() => {
    fetch("/api/on-leave") 
      .then((res) => res.json())
      .then((data) => setOnLeaveEmployees(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reportees On Leave Today</h2>
      {onLeaveEmployees.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          <span className="text-4xl">-,-</span>
          <p className="text-gray-600 mt-2">There are no members on leave today.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onLeaveEmployees.map((employee) => (
            <div key={employee.id} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-lg font-semibold">{employee.name}</h3>
              <p className="text-red-500 font-medium">{employee.leaveType}</p>
              <p className="text-gray-600 mt-2">
                <span className="font-bold">Reason:</span> {employee.reason}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OnLeave;
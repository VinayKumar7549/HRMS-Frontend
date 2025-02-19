import React, { useEffect, useState } from "react";

const Reportees = () => {
  const [reportees, setReportees] = useState([]);

  useEffect(() => {
    fetch("/api/reportees") 
      .then((res) => res.json())
      .then((data) => setReportees(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Reportees Leave Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportees.map((reportee) => (
          <div key={reportee.id} className="bg-white shadow-lg p-6 rounded-lg transform transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-700 text-lg font-bold">
                {reportee.name}
              </span>
              <span className={`text-sm ${reportee.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                {reportee.status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="border p-3 rounded-md bg-gray-50">
                <p className="text-gray-600">Personal Leave</p>
                <p>
                  <span className="font-bold">Taken:</span> {reportee.personalLeave.taken} | 
                  <span className="font-bold"> Available:</span> {reportee.personalLeave.available}
                </p>
              </div>

              <div className="border p-3 rounded-md bg-gray-50">
                <p className="text-gray-600">Sick Leave</p>
                <p>
                  <span className="font-bold">Taken:</span> {reportee.sickLeave.taken} | 
                  <span className="font-bold"> Available:</span> {reportee.sickLeave.available}
                </p>
              </div>

              <div className="border p-3 rounded-md bg-gray-50">
                <p className="text-gray-600">Work from Home</p>
                <p>
                  <span className="font-bold">Taken:</span> {reportee.wfh.taken} | 
                  <span className="font-bold"> Available:</span> {reportee.wfh.available}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reportees;
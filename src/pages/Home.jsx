import React from "react";

const Home = () => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white h-screen p-5 flex flex-col">
        {["My Space", "HRMS", "Dashboard", "Calendar", "More"].map(
          (item, index) => (
            <div
              key={index}
              className="mb-5 cursor-pointer p-3 bg-gray-700 text-center rounded hover:bg-gray-600"
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-5 h-screen overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-800 text-white p-4 rounded flex justify-between items-center">
          <div>
            <h2 className="text-2xl">{greeting}</h2>
            <p>Have a productive day!</p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/50"
              alt="Profile Picture"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Work Schedule Section */}
        <div className="bg-white mt-5 p-5 rounded shadow">
          <h3 className="text-xl mb-3">Work Schedule</h3>
          <div className="text-center mb-5">
            <p>8 Dec 2024 - 14 Dec 2024</p>
            <p>Monday to Friday</p>
          </div>
          <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600">
            Submit Time Logs
          </button>
        </div>

        {/* Footer */}
        <div className="mt-5 text-center text-gray-600">
          <p>© 2024 Your Organization</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

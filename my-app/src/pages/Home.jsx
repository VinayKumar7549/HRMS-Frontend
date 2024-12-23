// import React from "react";

// const Home = () => {
//     return (
//         <div> Home </div>
//     )
// }

// export default Home;

import React from "react";

const Home = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-900 text-white h-screen p-5 flex flex-col">
        {["My Space", "Organization", "Dashboard", "Calendar", "More"].map(
          (item, index) => (
            <div
              key={index}
              className="mb-5 cursor-pointer p-3 bg-blue-800 text-center rounded hover:bg-blue-700"
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-5">
        {/* Header */}
        <div className="bg-blue-900 text-white p-4 rounded flex justify-between items-center">
          <div>
            <h2 className="text-2xl">Good Evening!</h2>
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
          <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700">
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
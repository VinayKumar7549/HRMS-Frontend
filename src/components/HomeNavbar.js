import React from "react";

const HomeNavbar = ({ handleHomeClick }) => {
  return (
    <div>
      <div className="w-full bg-gray-800 text-white p-3 flex justify-between">
        <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }} onClick={handleHomeClick}>
          HRMS
        </h2>
        <div className="flex space-x-2">
          <button className="bg-gray-700 p-2 rounded">Night Mode</button>
          <img src="path/to/account-image.jpg" alt="Account" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;

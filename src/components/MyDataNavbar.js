import React from "react";
import { Link } from "react-router-dom";

const MyDataNavbar = ({ handleTeamClick, handleMyDataClick }) => {
  return (
    <div className="w-full bg-gray-600 text-white p-2 flex justify-between">
      <ul className="flex space-x-2">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/leave-summary" onClick={handleMyDataClick}>My Data</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/holidays">Holidays</Link>
        </li>
        <li
          className="hover:bg-gray-700 p-2 rounded"
          onClick={handleTeamClick}
        >
          Team
        </li>
      </ul>
    </div>
  );
};

export default MyDataNavbar;

import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-40 bg-gray-800 text-white h-screen p-4">
      <ul className="space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded"><Link to="/">Home</Link></li>
        <li className="hover:bg-gray-700 p-2 rounded"><Link to="/leave-summary">Leave Tracker</Link></li>
        <li className="hover:bg-gray-700 p-2 rounded"><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

const LeaveNavbar = () => {
  return (
    <div className="w-full bg-gray-400 text-white p-2 flex justify-between">
      <ul className="flex space-x-2">
        <li className="hover:bg-gray-500 p-2 rounded"><Link to="/leave-summary">Leave Summary</Link></li>
        <li className="hover:bg-gray-500 p-2 rounded"><Link to="/leave-requests">Leave Requests</Link></li>
        <li className="hover:bg-gray-500 p-2 rounded"><Link to="/leave-balance">Leave Balance</Link></li>
      </ul>
    </div>
  );
};

export default LeaveNavbar;

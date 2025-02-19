import React from "react";
import { Link } from "react-router-dom";

const TeamNavbar = ({ handleBackClick }) => {
  return (
    <div className="w-full bg-gray-400 text-white p-2 flex justify-between">
      <ul className="flex space-x-2">
        <li className="hover:bg-gray-500 p-2 rounded"><Link to="./reportees">Reportees</Link></li>
        <li className="hover:bg-gray-500 p-2 rounded"><Link to="/on-leave">On Leave</Link></li>
        <li className="hover:bg-gray-500 p-2 rounded"><Link to="/leave-request">Leave Request</Link></li>
      </ul>
    </div>
  );
};

export default TeamNavbar;

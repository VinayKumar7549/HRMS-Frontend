import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import HomeNavbar from '../components/HomeNavbar';
import MyDataNavbar from '../components/MyDataNavbar';
import LeaveNavbar from '../components/LeaveNavbar';
import TeamNavbar from '../components/TeamNavbar';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLeaveSection = location.pathname.startsWith('/leave');
  const [showTeamView, setShowTeamView] = useState(false);
  const [showMyDataView, setShowMyDataView] = useState(true);

  const handleTeamClick = () => {
    setShowTeamView(true);
    setShowMyDataView(false);
  };

  const handleMyDataClick = () => {
    setShowMyDataView(true);
    setShowTeamView(false);
  };

  const handleBackClick = () => {
    setShowTeamView(false);
    setShowMyDataView(true);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <HomeNavbar />
        {isLeaveSection && (
          <>
            <MyDataNavbar
              handleTeamClick={handleTeamClick}
              handleMyDataClick={handleMyDataClick}
            />
            {showMyDataView && <LeaveNavbar />}
            {showTeamView && <TeamNavbar handleBackClick={handleBackClick} />}
          </>
        )}
        <main className="p-4 bg-gray-100 flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

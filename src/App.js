import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import LeaveSummary from './pages/LeaveSummary';
import LeaveRequest from './pages/LeaveRequest';
import LeaveBalance from './pages/LeaveBalance';
import Reportees from './pages/Reportees';
import OnLeave from './pages/OnLeave';
import TeamLeaveRequest from './pages/TeamLeaveRequest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <div className="container mx-auto">
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />} />
              {/* Leave Tracker Routes */}
              <Route path="/leave-summary" element={<LeaveSummary />} />
              <Route path="/leave-requests" element={<LeaveRequest />} />
              <Route path="/leave-balance" element={<LeaveBalance />} />
              <Route path="/team-reportees" element={<Reportees />} />
              <Route path="/on-leave" element={<OnLeave />} /> 
              <Route path="/Team-Leave-Request" element={<TeamLeaveRequest />} /> 
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

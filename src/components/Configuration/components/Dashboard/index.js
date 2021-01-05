import React from 'react';

import Sidebar from './components/Sidebar';
import Container from './components/Container';

const Dashboard = () => (
  <div className="dashboard">
    <Sidebar />
    <Container />
    <style jsx>
      {`
        .dashboard {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
      `}
    </style>
  </div>
);

export default Dashboard;

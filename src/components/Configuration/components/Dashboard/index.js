import React from 'react';

import Sidebar from './components/Sidebar';
import Container from './components/Container';

const Dashboard = () => (
  <>
    <div className="dashboard">
      <Sidebar />
      <Container />
    </div>
    <style jsx>
      {`
        .dashboard {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          flex-grow: 1;
        }

        .middleSpace {
          flex-grow: 1;
        }
        .bottomSpace {
          flex-grow: 0.1;
        }
      `}
    </style>
    <div className="bottomSpace" />
  </>
);

export default Dashboard;

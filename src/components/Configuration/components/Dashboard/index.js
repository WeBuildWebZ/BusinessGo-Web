import React from 'react';
import { useSelector } from 'react-redux';

import ProjectSelector from './components/ProjectSelector';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import ButtonPanel from './components/ButtonPanel';

const Dashboard = () => {
  const user = useSelector(store => store.user);
  const project = useSelector(store => store.project);

  return (
    <>
      <div className="dashboard">
        {project && (
          <>
            <Sidebar />
            <ButtonPanel />
            <Container />
          </>
        )}
        {user && !project && <ProjectSelector />}
      </div>
      <style jsx>
        {`
          .dashboard {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
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
};

export default Dashboard;

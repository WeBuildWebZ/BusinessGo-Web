import React from 'react';
import { useSelector } from 'react-redux';

import ProjectSelector from './components/ProjectSelector';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
// import ButtonPanel from './components/ButtonPanel';

const Dashboard = () => {
  const user = useSelector(store => store.user);
  const project = useSelector(store => store.project);

  return (
    <>
      <div className="dashboard">
        {project && (
          <>
            <Sidebar />
            <Container />
          </>
        )}
        {user && !project && <ProjectSelector />}
      </div>
      <style jsx>
        {`
          .dashboard {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            padding: 0 1em;
          }
          @media (max-width: 1168px) {
            .dashboard {
              flex-wrap: wrap;
              padding: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Dashboard;

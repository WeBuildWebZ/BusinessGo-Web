import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardLayout from '../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../components/LoadingPage2';
import useDashboardConfiguration from '../hooks/useDashboardConfiguration';
import { getProjects } from '../../../services/api/project';
import ProjectList from '../components/ProjectList';

import { getLanguage } from './lang';

const Dashboard = () => {
  const dashboardConfiguration = useDashboardConfiguration();
  const user = useSelector(store => store.user);
  const language = getLanguage(useSelector(store => store.language));
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getProjects().then(({ data: givenProjects }) => {
      setProjects(givenProjects);
    });
  }, []);

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        {user && (
          <h1 className="title">
            {language.hello} {user.name} {user.surname}!
          </h1>
        )}
        {projects && (
          <>
            <p className="message">{language.theseAreTheProjects}:</p>
            <ProjectList projects={projects} />
          </>
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .message {
            margin: 14px;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

export default Dashboard;

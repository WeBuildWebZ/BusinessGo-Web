import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import DashboardLayout from '../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../hooks/useDashboardConfiguration';

import { getLanguage } from './lang';

const Dashboard = ({ project_code }) => {
  const dashboardConfiguration = useDashboardConfiguration();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        {project && (
          <h1 className="title">
            {language.project} {project.name}
          </h1>
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .title {
            margin: 14px;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

Dashboard.propTypes = {
  project_code: PropTypes.string.isRequired
};

export default Dashboard;

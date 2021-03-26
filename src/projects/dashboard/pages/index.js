import { useSelector } from 'react-redux';

import DashboardLayout from '../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../components/LoadingPage2';
import useDashboardConfiguration from '../hooks/useDashboardConfiguration';

import { getLanguage } from './lang';

const Dashboard = () => {
  const language = getLanguage(useSelector(store => store.language));
  const dashboardConfiguration = useDashboardConfiguration();

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        body
      </DashboardLayout>
    </EnsureLoggedIn>
  );
};

export default Dashboard;

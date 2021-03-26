import DashboardLayout from '../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../components/LoadingPage2';
import useDashboardConfiguration from '../hooks/useDashboardConfiguration';

const Dashboard = () => {
  const dashboardConfiguration = useDashboardConfiguration();

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        Dashboard
      </DashboardLayout>
    </EnsureLoggedIn>
  );
};

export default Dashboard;

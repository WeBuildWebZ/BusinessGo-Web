import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import DashboardLayout from '../../../../../../components/DashboardLayout';
import NewCard from '../../../../components/NewCard';
import useDashboardConfiguration from '../../../../hooks/useDashboardConfiguration';

const DashboardCards = () => {
  const dashboardConfig = useDashboardConfiguration();

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfig.breadcrumbItems}
        sidebarButtons={dashboardConfig.sidebarButtons}
      >
        <NewCard />
      </DashboardLayout>
    </EnsureLoggedIn>
  );
};

export default DashboardCards;

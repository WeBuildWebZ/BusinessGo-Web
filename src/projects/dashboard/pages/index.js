import { useSelector } from 'react-redux';

import DashboardLayout from '../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../components/LoadingPage2';

import { getLanguage } from './lang';

const Dashboard = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <EnsureLoggedIn redirectTo="/login" Loading={LoadingPage2}>
      <DashboardLayout breadcrumbItems={language.breadcrumbItems}>body</DashboardLayout>
    </EnsureLoggedIn>
  );
};

export default Dashboard;

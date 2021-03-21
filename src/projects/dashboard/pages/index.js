import { useSelector } from 'react-redux';

import DashboardLayout from '../../../components/DashboardLayout';

import { getLanguage } from './lang';

const Dashboard = () => {
  const language = getLanguage(useSelector(store => store.language));

  return <DashboardLayout breadcrumbItems={language.breadcrumbItems}>body</DashboardLayout>;
};

export default Dashboard;

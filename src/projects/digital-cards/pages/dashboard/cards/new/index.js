import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import DashboardLayout from '../../../../components/DashboardLayout';

const DashboardCards = () => (
  <EnsureLoggedIn redirectTo="/" Loading={LoadingPage2}>
    <DashboardLayout>hola</DashboardLayout>
  </EnsureLoggedIn>
);

export default DashboardCards;

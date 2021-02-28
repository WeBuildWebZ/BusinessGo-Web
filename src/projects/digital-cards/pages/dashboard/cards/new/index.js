import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import DashboardLayout from '../../../../components/DashboardLayout';
import NewCard from '../../../../components/NewCard';

const DashboardCards = () => (
  <EnsureLoggedIn redirectTo="/" Loading={LoadingPage2}>
    <DashboardLayout>
      <NewCard />
    </DashboardLayout>
  </EnsureLoggedIn>
);

export default DashboardCards;

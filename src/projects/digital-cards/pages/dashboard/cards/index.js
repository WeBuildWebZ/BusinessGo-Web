import EnsureLoggedIn from '../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../components/LoadingPage2';

const DashboardCards = () => (
  <EnsureLoggedIn redirectTo="/" Loading={LoadingPage2}>
    hola
  </EnsureLoggedIn>
);

export default DashboardCards;

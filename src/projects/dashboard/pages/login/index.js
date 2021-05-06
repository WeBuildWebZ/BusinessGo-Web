import Login from '../../components/Login';
import EnsureLoggedIn from '../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../components/LoadingPage2';

const LoginPage = () => (
  <EnsureLoggedIn Loading={LoadingPage2} redirectOnLoggedIn="/" redirectOnNotLoggedIn="">
    <Login />
  </EnsureLoggedIn>
);

export default LoginPage;

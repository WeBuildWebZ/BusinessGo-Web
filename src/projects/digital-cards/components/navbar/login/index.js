import Link from 'next/link';
import { useSelector } from 'react-redux';

import useHandleLogout from '../../../../../shared/hooks/useHandleLogout';

const LoginRoute = () => {
  const user = useSelector(store => store.user);
  const handleLogout = useHandleLogout('/');

  return (
    <div className="login">
      {!user && (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}{' '}
      {user && (
        <div className="logoutButton" onClick={handleLogout}>
          <a>Logout</a>
        </div>
      )}
      <style jsx>
        {`
          .login {
            width: 100%;
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logoutButton {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default LoginRoute;

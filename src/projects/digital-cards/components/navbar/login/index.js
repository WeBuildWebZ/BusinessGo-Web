import Link from 'next/link';

const LoginRoute = () => (
  <div className="login">
    <Link href="/login">
      <a>Login</a>
    </Link>
    <style jsx>
      {`
        .login {
          width: 100%;
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

export default LoginRoute;

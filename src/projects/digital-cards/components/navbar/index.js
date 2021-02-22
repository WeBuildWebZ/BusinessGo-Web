import Login from './login';
import Logo from './logo';
import Menu from './menu';

const Navbar = () => (
  <div className="navbar">
    <Logo />
    <Menu />
    <Login />
    <style jsx>
      {`
        .navbar {
          width: 100vw;
          display: flex;
          border-bottom: 1px solid silver;
        }
      `}
    </style>
  </div>
);

export default Navbar;

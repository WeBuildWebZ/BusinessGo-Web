import Menu from './menu';
import LogoContainer from './logo-container';

const Navbar = () => (
  <div className="navbar">
    <LogoContainer />
    <Menu />
    <style jsx>
      {`
        .navbar {
          background: transparent;
          z-index: 10;
          width: 100vw;
          height: 10vh;
          display: flex;
        }
      `}
    </style>
  </div>
);

export default Navbar;

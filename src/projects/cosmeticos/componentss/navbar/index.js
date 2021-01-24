import Menu from './menu';
import LogoContainer from './logo-container';

const Navbar = () => (
  <div className="navbar">
    <LogoContainer />
    <Menu />
    <style jsx>
      {`
        .navbar {
          background: white;
          margin-bottom: 15px;
          z-index: 10;
          width: 100vw;
          display: flex;
          box-shadow: 0 0 5px 1px gray;
        }
      `}
    </style>
  </div>
);

export default Navbar;

import Logo from './logo';
import Menu from './menu';

const Navbar = () => (
  <div className="navbar">
    <Logo />
    <Menu />

    <style jsx>
      {`
        .navbar {
          width: 100vw;
          height: 10vh;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}
    </style>
  </div>
);

export default Navbar;

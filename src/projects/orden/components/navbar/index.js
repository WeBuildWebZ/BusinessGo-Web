import Logo from './logo';
import Menu from './menu';
import MenuBurger from './menu-burger';

const Navbar = () => (
  <div className="navbar">
    <Logo />
    <Menu />
    <MenuBurger />

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

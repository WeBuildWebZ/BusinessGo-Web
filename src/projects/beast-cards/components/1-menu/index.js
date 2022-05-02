import Logo from './logo';
import MenuBurger from './menu-burger';
import Navbar from './navbar';

const links = [
  { text: 'Inicio', href: '' },
  { text: 'Descubre', href: '' },
  { text: 'Quarters', href: '' },
  { text: 'Staff', href: '' }
];

const Menu = () => (
  <div className="menu">
    <Logo />
    <Navbar />
    <MenuBurger links={links} />
    <style jsx>
      {`
        .menu {
          max-width: 100vw;
          background: hsla(0, 0%, 0%, 0.5);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 1.5em 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          backdrop-filter: blur(0.8em);
          z-index: 1000;
        }
        @media (max-width: 1080px) {
          .menu {
            justify-content: space-between;
          }
        }
      `}
    </style>
  </div>
);

export default Menu;

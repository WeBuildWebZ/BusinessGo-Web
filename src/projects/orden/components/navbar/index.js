import MenuBurger from '../../../../components/menu-burger';

import Logo from './logo';
import Menu from './menu';

const links = [
  { text: 'inicio', href: '#inicio' },
  { text: 'nosotros', href: '#nosotros' },
  { text: 'productos', href: '#productos' },
  { text: 'precio', href: '#precio' },
  { text: 'contacto', href: '#contacto' }
];

const Navbar = () => (
  <div className="navbar">
    <Logo />
    <Menu />
    <MenuBurger links={links} />

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

import Logo from './logo';
import Navbar from './navbar';
import MenuBurger from './menu-burger';

const links = [
  { text: 'Nosotras', href: '#nos' },
  { text: 'Descubre', href: '#descubre' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Contacto', href: '#footer' }
];

const Menu = () => (
  <div className="menu">
    <Logo />
    <Navbar />
    <MenuBurger links={links} />

    <h4>Suscribirse</h4>
    <style jsx>
      {`
        .menu {
          width: 100vw;
          height: 10vh;
          background: hsla(333, 5%, 44%, 0.5);
          color: white;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-wrap: wrap;
          padding: 1.5em 0;
          position: fixed;
          backdrop-filter: blur(0.8em);
          z-index: 1000;
        }

        h4 {
          color: white;
          background: #ffa489;
          border-radius: 0.5em;
          padding: 0.5em 1.5em;
          cursor: pointer;
        }
        h4:hover {
          background: #d99c8a;
        }
      `}
    </style>
  </div>
);

export default Menu;

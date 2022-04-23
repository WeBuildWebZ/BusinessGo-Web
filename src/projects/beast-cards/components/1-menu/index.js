import Logo from './logo';
import Navbar from './navbar';
import MenuBurger from './menu-burger';

const links = [
  { text: 'option1', href: '/' },
  { text: 'option2', href: '/' },
  { text: 'option3', href: '/' },
  { text: 'option4', href: '/' }
];

const Menu = () => (
  <div className="menu">
    <Logo />
    <Navbar links={links} />
    <MenuBurger links={links} />
    <style jsx>
      {`
        .menu {
          width: 100vw;
          // height: 10vh;
          // background: hsla(333, 5%, 44%, 0.5);
          background: hsla(0, 0%, 0%, 0.7);
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
      `}
    </style>
  </div>
);

export default Menu;

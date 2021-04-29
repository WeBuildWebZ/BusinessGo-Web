import Logo from './logo';
import Navbar from './navbar';

const Menu = () => (
  <div className="menu">
    <Logo />
    <Navbar />
    <h4>Suscribirse</h4>
    <style jsx>
      {`
        .menu {
          width: 100vw;
          height: 10vh;
          background: hsla(330, 15%, 16%, 0.349);
          color: white;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 1.5em 0;
          position: fixed;
          backdrop-filter: blur(1em);
          z-index: 100;
        }

        h4 {
          color: white;
          background: #ffa489;
          border-radius: 0.5em;
          padding: 0.5em 1.5em;
        }
      `}
    </style>
  </div>
);

export default Menu;

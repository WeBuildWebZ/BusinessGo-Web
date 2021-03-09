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
          height: 80px;
          display: flex;
          // position: fixed;
          // background: hsla(0, 0%, 100%, 0.5);
          // backdrop-filter: blur(1em);
          // z-index: 100;
        }
        // ===========================================
        @media (max-width: 595px) {
          .navbar {
            flex-flow: column;
          }
        }
      `}
    </style>
  </div>
);

export default Navbar;

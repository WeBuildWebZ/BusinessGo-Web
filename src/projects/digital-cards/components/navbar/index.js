import Logo from './logo';
import Menu from './menu';

const Navbare = () => (
  <div className="navbar">
    <Logo />
    <Menu />
    <style jsx>
      {`
        .navbar {
          width: 100vw;
          height: 60px;
          display: flex;
          position: fixed;
          background: hsla(0, 0%, 100%, 0.5);
          background-color: #c800cd33;
          box-shadow: 0 0 2px 2px #c800cd33;
          backdrop-filter: blur(1em);
          z-index: 100;
        }
        // ===========================================
        @media (max-width: 595px) {
          .navbar {
          }
        }
      `}
    </style>
  </div>
);

export default Navbare;

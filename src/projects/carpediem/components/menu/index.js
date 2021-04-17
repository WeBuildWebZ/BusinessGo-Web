import Logo from '../i-logo';

import Navbar from './navbar/navbar';

const Menu = () => (
  <div className="menu">
    <Logo />
    <Navbar />
    <style jsx>
      {`
        .menu {
          width: 100vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2em;
        }

        // ========================================================
        @media (max-width: 524px) {
          .menu {
            padding: 0 1em;
          }
        }
        @media (max-width: 380px) {
          .menu {
            flex-flow: column;
          }
        }
      `}
    </style>
  </div>
);

export default Menu;

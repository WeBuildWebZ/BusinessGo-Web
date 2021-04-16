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
      `}
    </style>
  </div>
);

export default Menu;

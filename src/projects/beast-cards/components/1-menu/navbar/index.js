import Link from 'next/link';

import MenuLink from './MenuLink';

const Navbar = () => (
  <div className="navbar">
    <MenuLink href="/#home">Inicio</MenuLink>
    <MenuLink href="/#descubre">Descubre</MenuLink>
    <MenuLink href="/#quarters">Quarters</MenuLink>
    <MenuLink href="/#staff">Staff</MenuLink>
    <style jsx>
      {`
        .navbar {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 2em;
        }
        // ================================================

        @media (max-width: 1080px) {
          .navbar {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Navbar;

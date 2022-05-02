import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <Link href="#home">
      <a>Inicio</a>
    </Link>
    <Link href="#descubre">
      <a>Descubre</a>
    </Link>
    <Link href="#quarters">
      <a>Quarters</a>
    </Link>
    <Link href="#staff">
      <a>Staff</a>
    </Link>
    <style jsx>
      {`
        .navbar {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 2em;
        }
        a {
          margin: 0 1em;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
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

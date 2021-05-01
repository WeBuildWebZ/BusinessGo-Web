import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <Link href="/#nos">
      <a>Nosotras</a>
    </Link>
    <Link href="/#descubre">
      <a>Descubre</a>
    </Link>
    <Link href="/#servicios">
      <a>Servicios</a>
    </Link>
    <Link href="/#footer">
      <a>Contacto</a>
    </Link>
    <style jsx>
      {`
        .navbar {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          margin: 0 1em;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
        }
      `}
    </style>
  </div>
);

export default Navbar;

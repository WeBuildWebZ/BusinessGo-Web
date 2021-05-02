import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <Link href="/#nos">
      <a>Nosotras</a>
    </Link>
    <Link href="/#descubre">
      <a>Descubre</a>
    </Link>
    <Link href="/#recientes">
      <a>Recientes</a>
    </Link>
    <Link href="/ebooks">
      <a>Ebooks</a>
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

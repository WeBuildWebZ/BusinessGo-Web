import Link from 'next/link';

const Navbar = () => (
  <div className="menu">
    <Link href="/">
      <a rel="noopener">Home</a>
    </Link>

    <Link href="/#articulos">
      <a rel="noopener">Articulos</a>
    </Link>

    <style jsx>
      {`
        .menu {
          padding: 0 1em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          margin: 0 1em;
          cursor: pointer;

          font-size: 1.3em;
          text-decoration: none;
        }
        a:hover {
          background-image: linear-gradient(to left, #ff8aac, #bc744e);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        @media (max-width: 700px) {
          a {
            margin: 0 0.5em;
            font-size: 1.3em;
          }
        }
        @media (max-width: 448px) {
          .menu {
            padding: 1 0.5em;
          }
          a {
            margin: 0 5px;
          }
        }
        @media (max-width: 380px) {
          a {
            margin: 0 1.5em;
          }
        }
      `}
    </style>
  </div>
);

export default Navbar;

import Link from 'next/link';

const Navbar = () => (
  <div className="menu">
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/#articulos">
      <a>Articulos</a>
    </Link>

    <style jsx>
      {`
        .menu {
          padding: 1.5em 1em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          margin: 0 1em;
          cursor: pointer;
          color: grey;
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
      `}
    </style>
  </div>
);

export default Navbar;

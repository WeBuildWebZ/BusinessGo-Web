import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a>Inicio</a>
    </Link>

    <Link href="/catalogo">
      <a>Catálogo</a>
    </Link>

    <Link href="/ubicacion">
      <a>Ubicación</a>
    </Link>

    <style jsx>
      {`
        .menu {
          flex: 1;
          width: 100vw;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1em;
        }
        a {
          margin: 0 1em;
          cursor: pointer;
          color: #0d335d;
          font-size: 1.5em;
          text-decoration: none;
        }
        @media (max-width: 363px) {
          a {
            margin: 0 0.5em;
            font-size: 1em;
          }
        }
      `}
    </style>
  </div>
);

export default Menu;

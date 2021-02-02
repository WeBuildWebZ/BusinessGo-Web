import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a>Inicio</a>
    </Link>

    <Link href="/catalogo">
      <a>Catalogo</a>
    </Link>

    <Link href="/ubicacion">
      <a>ubicacion</a>
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
        }
        a {
          margin: 0 0.3em;
          cursor: pointer;
          color: #0d335d;
          font-weight: bold;
          font-size: 1.5em;
          text-decoration: none;
        }
        a:nth-child(2) {
          padding: 0 0.5em;
          border-left: 3px solid #0d335d;
          border-right: 3px solid #0d335d;
        }
      `}
    </style>
  </div>
);

export default Menu;

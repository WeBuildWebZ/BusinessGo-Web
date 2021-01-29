import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <Link href="/" className="link">
      <a>Inicio</a>
    </Link>

    <Link href="/catalogo" className="link">
      <a>Catalogo</a>
    </Link>

    <Link href="/ubicacion" className="link">
      <a>ubicacion</a>
    </Link>

    <style jsx>
      {`
        .menu {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 2em 0 0;
        }
        link {
          margin: 0 0.5em;
          cursor: pointer;
          color: black;
        }
      `}
    </style>
  </div>
);

export default Menu;

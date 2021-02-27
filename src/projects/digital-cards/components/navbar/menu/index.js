import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <Link href="/como-funciona">
      <a>Cómo Funciona</a>
    </Link>

    <Link href="/templates">
      <a>Templates</a>
    </Link>

    <Link href="/precio">
      <a>Precio</a>
    </Link>

    <Link href="/contacto">
      <a>Contacto</a>
    </Link>

    <style jsx>
      {`
        .menu {
          width: 100%;
          flex: 8;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        a {
          text-decoration: none;
          font-weight: 500;
          color: #1c1c1c;
        }
        h4 {
          margin: 0 0.5em;
        }
      `}
    </style>
  </div>
);

export default Menu;

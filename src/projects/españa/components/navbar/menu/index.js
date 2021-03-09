import Link from "next/link";

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a>Inicio</a>
    </Link>

    <Link href="/">
      <a>Sobre mi</a>
    </Link>

    <Link href="/">
      <a>Servicios</a>
    </Link>

    <Link href="/">
      <a>Precio</a>
    </Link>

    <Link href="/">
      <a>Contacto</a>
    </Link>

    <style jsx>
      {`
        .menu {
          width: 100%;
          flex: 8;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 5em;
        }
        a {
          text-decoration: none;
          font-weight: 900;
          color: white;
          font-size: 1.5em;
          margin: 0 0.8em;
          text-transform: uppercase;
        }
      `}
    </style>
  </div>
);

export default Menu;

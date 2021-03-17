import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <Link href="/">
      <a>Inicio</a>
    </Link>

    <Link href="/#nosotros">
      <a>Sobre mi</a>
    </Link>

    <Link href="/#servicios">
      <a>Servicios</a>
    </Link>

    <Link href="/#precios">
      <a>Precio</a>
    </Link>

    <Link href="/#contacto">
      <a>Contacto</a>
    </Link>

    <style jsx>
      {`
        .menu {
          min-width: 900px;
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
        // ===========================================
        @media (max-width: 1199px) {
          .menu {
            width: 100vw;
            justify-content: center;
            margin-top: 2.5em;
          }
        }
        @media (max-width: 790px) {
          .menu {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Menu;

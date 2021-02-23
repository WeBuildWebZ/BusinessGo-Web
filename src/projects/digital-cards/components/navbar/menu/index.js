import Link from 'next/link';

const Menu = () => (
  <div className="menu">
    <Link href="/como-funciona">
      <a>Como Funciona</a>
    </Link>

    <Link href="/templates">
      <a>Templates</a>
    </Link>

    <Link href="/clientes">
      <a>Clientes </a>
    </Link>

    <Link href="/precio">
      <a>Precio</a>
    </Link>

    <Link href="/blog">
      <a>Blog</a>
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
        h4 {
          margin: 0 0.5em;
        }
      `}
    </style>
  </div>
);

export default Menu;

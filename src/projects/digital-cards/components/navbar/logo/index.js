import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <h5>Más</h5>
        <h5>Negocio</h5>
      </a>
    </Link>
    <style jsx>
      {`
        .logo {
          width: 100%;
          flex: 2;
        }
        a {
          text-decoration: none;
          display: flex;
          justify-content: center;
          flex-flow: column;
        }

        h5 {
          margin: 0;
          line-height: 1em;
        }
        // ==============================
        @media (max-width: 595px) {
          a {
            align-items: center;
            flex-flow: row;
            padding-bottom: 1em;
          }
          h5 {
            margin: 0 0.3em;
          }
        }
      `}
    </style>
  </div>
);

export default Logo;

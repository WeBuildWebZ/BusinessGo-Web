import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <h5>MAS</h5>
        <h5>NEGOCIO</h5>
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
      `}
    </style>
  </div>
);

export default Logo;

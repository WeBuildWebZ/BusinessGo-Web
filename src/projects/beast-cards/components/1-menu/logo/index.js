import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <h2>Monster Cards</h2>
      </a>
    </Link>

    <style jsx>
      {`
        .logo {
          color: white;
        }

        a {
          color: white;
        }
        h2 {
          font-size: 2em;
          margin: 0;
          padding: 0;
          padding-left: 1em;
        }
      `}
    </style>
  </div>
);

export default Logo;

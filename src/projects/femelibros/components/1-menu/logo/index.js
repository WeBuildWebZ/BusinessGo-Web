import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <h2>FemeLibros</h2>
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
      `}
    </style>
  </div>
);

export default Logo;

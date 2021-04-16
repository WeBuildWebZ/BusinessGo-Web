import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/images/logo.png" alt="logo" />
      </a>
    </Link>
    <style jsx>
      {`
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          min-width: 100px;
          height: 50px;
        }
      `}
    </style>
  </div>
);

export default Logo;

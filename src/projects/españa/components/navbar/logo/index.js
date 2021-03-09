import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/icons/logo.png" alt="logo" />
      </a>
    </Link>
    <style jsx>
      {`
        .logo {
          width: 100%;
          height: 100%;
          flex: 2;
          display: flex;
          justify-content: center;
          align-item: center;
        }
        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-item: center;
          color: white;
        }
        img {
          width: 100px;
          height: 100%;
        }

        // ==============================
        @media (max-width: 595px) {
        }
      `}
    </style>
  </div>
);

export default Logo;

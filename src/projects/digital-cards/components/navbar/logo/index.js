import Link from 'next/link';

const Logo = () => (
  <div className="logoContainer">
    <Link href="/">
      <a>
        <img className="logoImage" src="/images/logo.png" />
      </a>
    </Link>
    <style jsx>
      {`
        .logoContainer {
        }
        .logoImage {
          width: 110px;
        }

        h5 {
          margin: 0;
          line-height: 1em;
        }
        // ==============================
        @media (max-width: 768px) {
          a {
          }
          h5 {
          }
          .logoImage {
            width: 80px;
          }
        }
      `}
    </style>
  </div>
);

export default Logo;

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
          width: 100%;
          flex: 2;
        }
        .logoImage {
          width: 110px;
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

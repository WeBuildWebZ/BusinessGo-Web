import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/icons/logo.png" alt="logo" />
        <h2>
          Ordenando <br /> y Mas.
        </h2>
      </a>
    </Link>
    <style jsx>
      {`
        .logo {
          min-width: 300px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-item: center;
          position: relative;
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
          width: 200px;
          height: 150px;
          object-fit: contain;
          position: absolute;
          top: 0.3em;
          left: -1.5em;
        }
        h2 {
          position: absolute;
          top: 1em;
          right: 0;
        }

        // ==============================
        @media (max-width: 595px) {
        }
      `}
    </style>
  </div>
);

export default Logo;

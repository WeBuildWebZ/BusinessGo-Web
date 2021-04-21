import Link from 'next/link';

const FooterLinks = () => (
  <div className="footer-links">
    <Link href="/">
      <a>Contacto</a>
    </Link>
    <hr />
    <Link href="/">
      <a>Terminos</a>
    </Link>
    <hr />
    <Link href="/">
      <a>Polit. Privacidad</a>
    </Link>
    <hr />
    <Link href="/">
      <a>Ubicacion</a>
    </Link>
    <style jsx>
      {`
        .footer-links {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        // =====
        a {
          color: #ebebeb;
          cursor: pointer;
          margin: 0 0.5em;
        }
        a:hover {
          color: white;
        }
        // =====

        hr {
          width: 1px;
          height: 2em;
        }
      `}
    </style>
  </div>
);

export default FooterLinks;

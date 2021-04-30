import Link from 'next/link';

const Navbar = () => (
  <div className="links">
    <Link href="/">
      <a>Inicio</a>
    </Link>
    <hr />
    <Link href="/">
      <a>Fundas</a>
    </Link>
    <hr />
    <Link href="/">
      <a>Contacto</a>
    </Link>
    <style jsx>
      {`
        .links {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #ebebeb;
          background-image: linear-gradient(to left, hsla(0, 0%, 0%, 0.877), hsla(0, 0%, 0%, 0.849)),
            url(images/banner-test.jpg);
          background-position: center;
          padding: 1em 0;
        }
        // =====
        a {
          color: #ebebeb;
          cursor: pointer;
          margin: 0 0.5em;
          text-transform: uppercase;
        }
        a:hover {
          color: white;
        }
        // =====

        hr {
          width: 1px;
          height: 1em;
        }
      `}
    </style>
  </div>
);

export default Navbar;

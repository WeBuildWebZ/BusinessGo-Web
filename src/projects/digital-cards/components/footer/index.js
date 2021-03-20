import Link from 'next/link';

const Footer = () => (
  <div className="footer">
    <div className="bottom">
      <span className="column">
        <h3>
          <Link href="/">
            <a className="pointer">Preguntas Frecuentes</a>
          </Link>
        </h3>
      </span>

      <span className="column">
        <h3>
          <Link href="/">
            <a className="pointer">Términos y Condiciones</a>
          </Link>
        </h3>
      </span>

      <span className="column">
        <h3>
          <Link href="/">
            <a className="pointer">Aviso de Privacidad</a>
          </Link>
        </h3>
      </span>

      <span className="column">
        <h3>Información de Contacto</h3>
        <span className="row">
          <img src="/icon/house.png" alt="house icon" />
          <p> Mexico- Mexico</p>
          <br />
        </span>
        <span className="row">
          <img src="/icon/phone.png" alt="phone icon" />
          <p>
            <a href="tel:1162329888" target="blank">
              1234567890
            </a>
          </p>
        </span>
        <span className="row">
          <img src="/icon/contact.png" alt="contact icon" />
          <p>
            <a href="mailto:lefcott@hotmail.com" target="blank">
              usted@gmail.com
            </a>
          </p>
        </span>
        <span className="row">
          <img src="/icon/privacy_policy.png" alt="contact icon" />
          <p>
            <Link href="/privacy_policy">
              <a>Privacy Policy</a>
            </Link>
          </p>
        </span>
      </span>
    </div>

    <style jsx>
      {`
        .footer {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f0f0f;
        }

        .bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          height: 100%;
        }

        .column {
          width: 400px;
          height: 100%;
          padding: 1em;
          border-radius: 1em;
        }
        .row {
          width: 100%;
          display: flex;
          padding: 0.5em 0 0 0.5em;
        }
        h3 {
          margin-top: 1em;
          color: white;
        }
        img {
          width: 25px;
          height: 25px;
        }
        p {
          color: grey;
          margin: 0;
          padding: 0 0 0 0.5em;
        }
        .pointer {
          cursor: pointer;
          color: white;
        }

        a {
          color: grey;
        }

        @media (max-width: 840px) {
          .bottom {
            flex-flow: column;
          }
          .column {
            width: 100%;
            padding: 1em;
            border-radius: 0;
            display: flex;
            justify-content: center;
            flex-flow: column;
          }
          .row {
            padding: 0 0 1em 1em;
          }
        }
      `}
    </style>
  </div>
);

export default Footer;

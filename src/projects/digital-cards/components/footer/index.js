import Link from 'next/link';

const Footer = () => (
  <div className="footer">
    <div className="bottom">
      <span className="column">
        <h3>title</h3>
        <p>description</p>
      </span>

      <span className="column">
        <h3>
          <Link href="/nosotros">
            <a className="pointer">socialNetworks</a>
          </Link>
        </h3>
        <p>Entra en el enlace, y contactanos a travez de todas las redes sociales que usamos.</p>
        <br />
        <br />
      </span>

      <span className="column">
        <h3>contactInformation</h3>
        <span className="row">
          <img src="/icon/house.png" alt="house icon" />
          <p> Buenos Aires - Argentina</p>
          <br />
        </span>
        <span className="row">
          <img src="/icon/phone.png" alt="phone icon" />
          <p>
            <a href="tel:1162329888" target="blank">
              1162329888
            </a>
          </p>
        </span>
        <span className="row">
          <img src="/icon/contact.png" alt="contact icon" />
          <p>
            <a href="mailto:lefcott@hotmail.com" target="blank">
              lefcott@hotmail.com
            </a>
          </p>
        </span>
        <span className="row">
          <img src="/icon/privacy_policy.png" alt="contact icon" />
          <p>
            <Link href="/privacy_policy">
              <a>privacyPolicy</a>
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

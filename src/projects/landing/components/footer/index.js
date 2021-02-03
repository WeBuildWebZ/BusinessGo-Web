const Footer = () => (
  <div className="footer">
    <div className="bottom">
      <span className="column">
        <h3>Acerca de Nosotros</h3>
        <p>
          Somos una empresa dedicada a la fabricación de muebles, visitá nuestro catálogo, y envianos tu
          consulta, contamos con entrega, consultanos por el radio de entrega, te esperamos.
        </p>
      </span>

      <span className="column">
        <h3>Redes sociales</h3>
        <p className="pointer">Facebook</p>
        <p className="pointer">LinkedIn</p>
        <p className="pointer">Instagram</p>
        <p className="pointer">Google+</p>
      </span>

      <span className="column">
        <h3>Información de Contacto</h3>
        <span className="row">
          <img src="/icon/house.png" alt="" />
          <p> Buenos Aires - Argentina</p>
          <br />
        </span>
        <span className="row">
          <img src="/icon/phone.png" alt="" />
          <p>
            <a href="tel:1162329888" target="blank">
              1162329888
            </a>
          </p>
        </span>
        <span className="row">
          <img src="/icon/contact.png" alt="" />
          <p>
            <a href="mailto:muebles-horacio@gmail.com" target="blank">
              muebles-horacio@gmail.com
            </a>
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
          color: grey;
        }
        .pointer:hover {
          color: white;
          cursor: pointer;
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

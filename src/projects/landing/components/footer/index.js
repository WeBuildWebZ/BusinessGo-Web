const Footer = () => (
  <div className="footer">
    <div className="top" />
    <div className="bottom">
      <span className="column">
        <h3>Acerca de Nosotros</h3>
        <p>
          Somos una empresa dedicada a la fabricacion de muebles, visita nuestro catalogo, y envianos tu
          consulta, contamos con entrega, consultanos por el radio de entrega, te esperamos.
        </p>
      </span>
      <span className="column">
        <h3>Redes sociales</h3>
        <p className="pointer">Facebook</p>
        <p className="pointer">LinkedIn</p>
        <p className="pointer">Instagram</p>
      </span>
      <span className="column">
        <h3>Informacion de Contacto</h3>
        <span className="row">
          <img src="/icon/house.png" alt="" />
          <p> Buenos Aires - Argentina</p>
          <br />
        </span>
        <span className="row">
          <img src="/icon/phone.png" alt="" />
          <p> 1125727617</p>
        </span>
        <span className="row">
          <img src="/icon/contact.png" alt="" />
          <p>muebles-horacio@gmail.com</p>
        </span>
      </span>
    </div>

    <style jsx>
      {`
        .footer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: #0f0f0f;
        }
        .top,
        .bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .top {
          background-image: linear-gradient(to top, hsla(0, 0%, 100%, 1), hsla(0, 0%, 100%, 0.1)),
            url(images/left-top.jpg);
          background-size: contain;
          background-position: 0;
        }

        .column {
          width: 400px;
          padding: 1em;
          border-radius: 1em;
        }
        .row {
          width: 100%;
          display: flex;
          padding-bottom: 0.5em;
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
          padding-left: 0.5em;
        }
        .pointer {
          color: grey;
        }
        .pointer:hover {
          color: white;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

export default Footer;

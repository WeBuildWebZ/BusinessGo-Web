const Footer = () => (
  <div className="footer">
    <div className="top">
      <p>Catálogo</p>
      <p>Presupuesto</p>
      <p>Contacto</p>
      <p>Ubicación</p>
    </div>
    <div className="bottom">
      <center className="text">
        Diseñado por
        <a href="https://www.facebook.com/LEFCOTT" target="_blank">
          WeBuildWebZ
        </a>
        © 2021 todos los derechos reservados.
      </center>
    </div>

    <style jsx>
      {`
        .footer {
          width: 100vw;
          height: 10vh;
          background: #1c1c1c;
        }
        .top {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bottom {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          color: silver;
          margin: 0 5px;
        }
      `}
    </style>
  </div>
);

export default Footer;

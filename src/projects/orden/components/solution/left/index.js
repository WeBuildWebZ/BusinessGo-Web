const Left = () => (
  <div className="left">
    <span>
      <h5>SERVICIOS</h5>
      <br />
      <h3>
        Ni todas las casas son iguales, ni las personas,el primer paso a tomar es valorar lo que necesitas y
        buscar soluciones.
      </h3>
      <h4>De forma presencial:</h4>
      <p>Organización de la casa en general.</p>
      <p>Cambios de armario.</p>
      <p>Cocinas.</p>
      <p>Pre-mudanzas.</p>
      <p>Nacimientos.</p>
      <p>Fallecimientos.</p>
      <p>Divorcios.</p>
      <p>Vaciado de casas.</p>
      <p>Trasteros.</p>

      <h4>De forma online:</h4>
      <p>
        Mediante mis servicios online, te ayudaré a gestionar mejor tus espacios mediante tips y herramientas
        útiles para que introduzcas rutinas y con ello el orden se apodere y se cree la armonía y paz en tu
        hogar.
      </p>
    </span>

    <style jsx>
      {`
        .left {
          min-width: 600px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        span {
          min-width: 600px;
          padding: 0 1em;
          background: white;
        }

        span h4 {
          margin: 1em 0;
          font-style: italic;
        }
        h4,
        p {
          margin: 0;
          color: #1c1c1c;
        }
        h3 {
          width: 70%;
          font-size: 2em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
        }
        p {
          width: 70%;
        }
        h5 {
          color: grey;
        }

        // ===================================================================
        @media (max-width: 1199px) {
          .left {
            display: flex;
            justify-content: flex-start;
            padding: 0 1em;
          }
          span {
            min-width: 100vw;
          }
        }
        @media (max-width: 620px) {
          .left {
            min-width: 100vw;
          }
          span {
            min-width: 100vw;
            background: white;
          }
          h3 {
            width: 100vw;
          }
        }
        @media (max-width: 440px) {
          p {
            width: 100%;
          }
        }
        @media (max-width: 334px) {
          h3 {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Left;

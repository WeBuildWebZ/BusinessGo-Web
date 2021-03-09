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

      <h4>¿Cuáles son los beneficios que te aporta el orden y la organización?</h4>
      <p>Tomar el control de tu casa y tu vida.</p>
      <p>Tendrás más tiempo para dedicarle a las cosas que son importantes.</p>
      <p>Vaciado de casas.</p>
      <p>Reducirás el gasto, no malgastaras el dinero.</p>
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
          width: 100%;
          min-height: 350px;
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        span {
          width: 650px;
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
      `}
    </style>
  </div>
);

export default Left;

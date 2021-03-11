const Right = () => (
  <div className="right">
    <h4>Somos , Ordenando y mas</h4>
    <h3>
      Queremos que recuperes el control de tu casa, que el caos no te invada, y a través de mis servicios, te
      ayudaré a optimizar tus espacios.
    </h3>
    <p>
      Hola me llamo Amparo, el orden y la organización siempre han estado muy presentes en mi vida, tanto que
      cuando era pequeña jugaba a ordenar mis armarios, toda la tarde podría pasármela así. Pasado el tiempo,
      y después de alguna que otra mudanza me di cuenta que lo hacía para mí y me resultaba bien, con
      excelentes resultados, ¿y por qué no hacerlo para otras personas?.
    </p>
    <style jsx>
      {`
        .right {
          min-width: 600px;
          min-height: 700px;
          display: flex;
          justify-content: center;
          flex-flow: column;
        }
        h4 {
          margin-bottom: 0.7em;
          letter-spacing: 1px;
        }
        h4,
        p {
          color: white;
        }
        p:first-letter {
          font-size: 2em;
        }
        h3 {
          width: 70%;
          font-size: 2em;
          color: #6e3e76;
        }
        p {
          width: 70%;
          line-height: 1.5em;
        }
        // ===========================
        @media (max-width: 1199px) {
          .right {
            min-height: 60vh;
            min-width: 100vw;
            padding: 1em;
            align-items: center;
          }
          img {
            top: 0;
            left: 0;
          }
        }
        @media (max-width: 500px) {
          p {
            width: 100%;
            line-height: 1.5em;
          }
        }
        @media (max-width: 300px) {
          h3 {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Right;

const Prices = () => (
  <div className="prices">
    <span className="texto">
      <h3>Precios</h3>
      <p>
        A continuación, te detallo las tarifas de mis servicios, la primera visita tendrá un coste de 50€ (que
        se reembolsarán si se contratan los servicios).
      </p>
    </span>
    <span className="card-container">
      <div className="card">price</div>
      <div className="card">price</div>
      <div className="card">price</div>
    </span>
    <span className="li">
      <li>Desplazamiento hasta 30 km.</li>
    </span>
    <span className="regala">
      <h3>Regala orden</h3>
      <p>Con las mismas condiciones que las tarifas anteriores.</p>
    </span>

    <style jsx>
      {`
        .prices {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          background: #da7c7a;
        }
        .regala,
        .texto {
          width: 40%;
          color: white;
        }
        h3 {
          font-size: 4em;
        }
        // ===============================
        .card-container {
          width: 100%;
          min-height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .card {
          width: 18em;
          height: 18em;
          margin: 0.5em;
          border-radius: 1em;
          background: white;
        }
        h3,
        p,
        .li {
          color: white;
        }

        .li {
          width: 40%;
        }
      `}
    </style>
  </div>
);

export default Prices;

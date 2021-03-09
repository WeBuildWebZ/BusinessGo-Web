const Left = () => (
  <div className="text">
    <div className="content">
      <p>
        Somos tu empresa de orden y organización, recuperA el control de tu casa, que el caos no te invada
        optimizamos los espacios de tu casa, facilitando y aportando una mejor funcionalidad.
      </p>
      <h2>Ordenando </h2>
      <h2>Y mas.</h2>
      <button>ver Mas.</button>
    </div>
    <style jsx>
      {`
        .text {
          min-width: 600px;
          min-height: 90vh;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          z-index: 1000;
        }
        .content {
          width: 600px;
          display: flex;
          flex-flow: column;
        }
        p {
          color: white;
        }
        h2 {
          font-size: 5em;
          color: white;
          font-family: playfair display;
        }
        h2:nth-child(3) {
          padding-left: 2em;
          margin: 0 0 0.3em 0;
        }
        button {
          width: 150px;
          padding: 1em 0;
          border: none;
          outline: none;
          background: #f8ac30;
          color: white;
        }
      `}
    </style>
  </div>
);

export default Left;

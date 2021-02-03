const Marca = () => (
  <div className="marca">
    <h1>Muebles Horacio</h1>
    <h5>Venta directa, somos fabricantes</h5>
    <style jsx>
      {`
        .marca {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-flow: column;
          padding: 1em;
        }
        h1,
        h5 {
          margin: 0;
          color: #0d335d;
        }
        @media (max-width: 395px) {
          .marca {
            align-items: center;
          }
        }
        @media (max-width: 306px) {
          h1 {
            line-height: 0.8em;
            padding: 0.5em 0;
          }
        }
      `}
    </style>
  </div>
);

export default Marca;

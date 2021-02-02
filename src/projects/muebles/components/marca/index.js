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
        }
        h1,
        h5 {
          margin: 0;
          color: #0d335d;
        }
      `}
    </style>
  </div>
);

export default Marca;

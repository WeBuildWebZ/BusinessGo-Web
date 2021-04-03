const Clients = () => (
  <div className="clients" id="clients">
    <h3 className="message">Aquí colocaremos imágenes de las primeras MiniWebs de los clientes.</h3>
    <style jsx>
      {`
        .clients {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .message {
          color: #c800cd;
        }
      `}
    </style>
  </div>
);

export default Clients;

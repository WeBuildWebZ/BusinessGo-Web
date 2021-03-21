import Layout from '../layout';

const Clientes = () => (
  <Layout>
    <div className="clientes">
      <h3 className="message">Aquí colocaremos imágenes de las primeras MiniWebs de los clientes.</h3>
      <style jsx>
        {`
          .clientes {
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
  </Layout>
);

export default Clientes;

const Texto = () => (
  <div className="texto">
    <h2>En este tiempo, todo tiene una identidad digital.</h2>
    <h4>Por eso aqui en WeBuildWebz, disponemos para ofrecerte, todo para tu web.</h4>
    <br />
    <p>
      SEO, Responsive Design, CopyWritting, exclusividad de diseños, Animaciones, metodos de Pago, Link A
      Redes Sociales, Bases de Datos, Paginas Auto Administrables, Optimizacion de Imagenes, Video, y todas
      las funcionalidades que necesites, mira la siguiente informacion:
    </p>
    <style jsx>
      {`
        .texto {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          padding: 1em;
        }
        h2 {
          color: #1c1c1c;
        }
        h4 {
          font-style: italic;
          font-size: 1.2em;
        }
        p {
          width: 50%;
        }
      `}
    </style>
  </div>
);

export default Texto;

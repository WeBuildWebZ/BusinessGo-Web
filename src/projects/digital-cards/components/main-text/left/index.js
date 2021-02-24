const Left = () => (
  <div className="left">
    <h3>La mejor y mas facil forma de generar</h3>
    <h4>MAS NEGOCIO !</h4>
    <p>"Comparte tus datos e info de negocios con tus contactos, de forma inmediata".</p>

    <style jsx>
      {`
        .left {
          width: 450px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
        }
        h3 {
          color: #1c1c1c;
          line-height: 1em;
        }

        h4 {
          font-size: 3em;
          font-weight: bold;
          color: #3e505b;
          line-height: 1em;
          margin: 0.5em 0;
        }
        p {
          width: 50%;
          font-size: 2em;
          font-style: italic;
          line-height: 1em;
        }
      `}
    </style>
  </div>
);

export default Left;

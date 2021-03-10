const Right = () => (
  <div className="right">
    <h3>¿Cuáles son los beneficios que te aporta el orden y la organización?</h3>
    <p>
      Tomar el control de tu casa y tu vida. Tendrás más tiempo para dedicarle a las cosas que son
      importantes. Vaciado de casas. Reducirás el gasto, no malgastaras el dinero.
    </p>
    <button>Ver</button>
    <style jsx>
      {`
        .right {
          min-width: 500px;
          display: flex;
          justify-content: center;
          flex-flow: column;
          padding-bottom: 1em;
        }
        h4 {
          margin-bottom: 0.7em;
          font-style: italic;
        }
        h4,
        p {
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

export default Right;

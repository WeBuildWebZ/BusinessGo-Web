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
          width: 650px;
          display: flex;
          justify-content: center;
          flex-flow: column;
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

        // ==============================
        @media (max-width: 500px) {
          p {
            width: 100%;
          }
        }
        @media (max-width: 368px) {
          h3 {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Right;

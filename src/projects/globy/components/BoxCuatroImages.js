const BoxCuatroImages = () => (
  <div className="image">
    <span className="left">
      <img src="/images/emprendedor.jpg" alt="calling taxi" />
    </span>
    <span className="right">
      <h2>Globy Taxi App</h2>
      <h4>Nuevas Estrategias para Emprendedores</h4>
      <p>
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset
      </p>
    </span>

    <style jsx>
      {`
        .image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100%;
          margin: 2em 0;
        }
        .left {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
        }
        img {
          width: 500px;
          height: 500px;
          object-fit: cover;
          border-radius: 0.5em 10em 0.5em 0.5em;
        }
        .right {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
          padding: 1em;
        }

        // ===============================

        .right h2 {
          font-size: 5em;
          color: #86a8e7;
        }
        .right p {
          width: 70%;
        }

        // ============================================
        @media (max-width: 1000px) {
          .image {
            flex-flow: column;
          }
          img {
            width: 500px;
            height: 500px;
            border-radius: 5em 0.5em;
          }
          p {
            width: 100%;
          }
        }
        @media (max-width: 1000px) {
          .image {
            flex-flow: column;
          }
          p {
            width: 100%;
          }
        }

        @media (max-width: 582px) {
          .right h2 {
            font-size: 3em;
          }
          .right p {
            width: 100%;
          }
        }

        @media (max-width: 510px) {
          img {
            width: 100%;
            height: 100%;
            border-radius: 5em 0.5em;
          }
        }
        @media (max-width: 360px) {
          .right h2 {
            font-size: 2em;
          }
        }
      `}
    </style>
  </div>
);

export default BoxCuatroImages;

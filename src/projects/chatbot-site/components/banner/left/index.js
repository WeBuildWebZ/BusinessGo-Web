const Left = () => (
  <div className="banner">
    <div className="left">
      <h3>Tenemos la solucion para tu stress, falta de tiempo, y organizacion</h3>
    </div>
    <div className="mid">
      <h1>We Chatbot</h1>
      <p>" En un mundo actual, es necesario administrar mejor el tiempo"</p>
    </div>
    <div className="right">
      <h3>
        Hace <br /> tu <br /> vida <br /> mas <br /> simple
      </h3>
    </div>
    <style jsx>
      {`
        .banner {
          width: 60%;
          height: 100%;
          padding: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          background: hsla(0, 0%, 100%, 0.8);
        }
        .left,
        .rigth {
          flex: 1;
          width: 100%;
          height: 100%;
        }
        .left {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .left h3 {
          background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        // ==================================================

        .mid {
          flex: 8;
          width: 100%;
          height: 100%;
          padding: 1em;
          display: flex;
          justify-content: center;
          flex-flow: column;
        }
        h1 {
          font-size: 6em;
          padding-bottom: 0.3em;
          background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        p {
          width: 50%;
          font-size: 1.5em;
          text-style: italic;
        }
        // =================================================

        .right {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .right h3 {
          font-size: 1.5em;
          background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
        // =======================================

        @media (max-width: 1085px) {
          .banner {
            width: 700px;
            height: 100%;
          }
        }

        @media (max-width: 645px) {
          .banner {
            width: 100%;
            height: 100%;
            flex-flow: column;
          }
          .left {
            width: 100%;
            justify-content: flex-start;
          }
          .left h3 {
            width: 200px;
          }

          .mid {
            width: 100%;
            padding: 0;
          }
          .right {
            justify-content: flex-end;
          }
        }
        @media (max-width: 400px) {
          .mid h1 {
            width: 100%;
            font-size: 4em;
          }
          .mid p {
            width: 100%;
            font-size: 1.3em;
          }
        }
        @media (max-width: 274px) {
          .mid h1 {
            width: 100%;
            font-size: 3em;
            line-height: 1em;
          }
        }
      `}
    </style>
  </div>
);

export default Left;

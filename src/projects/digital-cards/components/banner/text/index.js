const Text = () => (
  <div className="text">
    <div className="box">
      <h1 className="title">
        Quieres <b>Vender</b> más?
      </h1>
      <hr />
      <p className="description">
        Dale a tu Emprendimiento o Negocio, una <b>*MiniWeb</b>!
      </p>
    </div>

    <style jsx>
      {`
        .text {
          width: 100%;
          height: 100%;
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .box {
          width: 450px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
        }
        hr {
          width: 150px;
          height: 2px;
          background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
        }
        .title {
          font-size: 4em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(to top, #c800cd 0%, #ed8cec 100%);
        }
        .description {
          color: #c800cd;
          font-size: 24px;
        }
        .description:first-letter {
          font-size: 1.5em;
        }
        // ==============================
        @media (max-width: 889px) {
          .text {
            justify-content: center;
          }
        }
      `}
    </style>
  </div>
);

export default Text;

const Text = () => (
  <div className="text">
    <div className="box">
      <h1>Tarjeta Personal Digital </h1>
      <hr />
      <p>
        Utiliza nuestra tecnologia, y comparte tu tarjeta digital, para compartir tu informacion de contacto
        en 1 segundo.
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
        h1 {
          font-size: 4em;
          font-weight: bold;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
        }
        p {
          font-weight: bold;
          text-transform: uppercase;
          color: #1c1c1c;
        }
        p:first-letter {
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

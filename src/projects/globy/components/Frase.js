import React from 'react';

const Frase = () => (
  <div className="frase">
    <div className="left">
      <h2>Somos una app mexicana de taxis que opera con autos concesionados.</h2>
      <h3>Garantizamos un buen servicio, descargar nuestra App</h3>

      <button>GooglePlay</button>
      <p>Ahorra tiempo, reduce costos y toma el control con tu propio software de despacho de taxis</p>
    </div>

    <div className="right" />

    <style jsx>
      {`
        .frase {
          display: flex;
          align-items: center;
          width: 100vw;
          height: 70vh;
          flex-wrap: wrap;
          background: #ebebeb;
        }

        .left {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          flex-flow: column;
          padding: 3em;
        }
        h2 {
          font-size: 2em;
          color: #0ac5ad;
        }

        button {
          width: 50%;
          padding: 0.5em 0;
          margin: 9px 0;
          border-radius: 3em;
          outline: none;
          border: 2px solid black;
          color: black;
          font-size: 1.3em;
          font-weight: 700;
        }
        button:hover {
          background: black;
          color: white;
        }

        // ======================================================

        .right {
          flex: 2;
          width: 100%;
          height: 100%;
          background-image: url(/images/header-image.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 20px -260px;
        }
      `}
    </style>
  </div>
);

export default Frase;

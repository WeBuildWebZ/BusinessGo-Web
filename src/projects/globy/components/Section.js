const Section = () => (
  <div className="section">
    <span className="box-one">
      <div className="icon">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="address-card"
          className="svg-inline--fa fa-address-card fa-w-18"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
          />
        </svg>
      </div>
      <div className="text">
        <h3>Sistema de Puntos</h3>
        <p>
          <b>Categorizacion.</b>Cada chofer sera evaluado, con el fin de disponer gente más capacitada y
          brindar un mejor servicio.
        </p>
      </div>
    </span>
    <span className="box-two">
      <div className="icon">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="child"
          className="svg-inline--fa fa-child fa-w-12"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z"
          />
        </svg>
      </div>
      <div className="text">
        <h3>Diversidad de Genero</h3>
        <p>
          <b>Respeto Mutuo.</b> El exito de las relaciones esta en el respeto, por eso queremos que formes
          parte de esta familia.
        </p>
      </div>
    </span>
    <span className="box-three">
      <div className="icon">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="location-arrow"
          className="svg-inline--fa fa-location-arrow fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"
          />
        </svg>
      </div>
      <div className="text">
        <h3>Sistema de Rastreo</h3>
        <p>
          <b>Seguimiento Real-Time.</b>Disponemos de la tecnologia para ver el recorrido y saber donde esta la
          persona que tomo el servicio.
        </p>
      </div>
    </span>

    <style jsx>
      {`
        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100%;
          padding: 1em;
          margin: 2em 0;
          flex-wrap: wrap;
        }
        .box-one,
        .box-two,
        .box-three {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          min-height: 300px;
          border-radius: 1em;
          border: 3px solid #86a8e7;
          margin: 7px;
          padding: 7px;
        }
        .fa-address-card,
        .fa-child,
        .fa-location-arrow {
          width: 80px;
          height: 80px;
          color: #86a8e7;
        }

        // =================
        .icon {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text {
          flex: 3;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          flex-flow: column;
          padding: 0 1em;
        }
        .text b {
          color: #86a8e7;
          font-size: 1.2em;
        }
        // =============================================
        @media (max-width: 1000px) {
          .section {
            height: 100%;
            flex-flow: column;
          }
          .box-one,
          .box-two,
          .box-three {
            width: 400px;
            flex-flow: column;
          }
        }
        @media (max-width: 542px) {
          .box-one,
          .box-two,
          .box-three {
            flex-flow: column;
          }
        }
        @media (max-width: 410px) {
          .section {
            height: 100%;
          }
          .box-one,
          .box-two,
          .box-three {
            width: 100%;
            height: 100%;
          }
          .text h3,
          .text p {
            width: 100%;
            height: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Section;

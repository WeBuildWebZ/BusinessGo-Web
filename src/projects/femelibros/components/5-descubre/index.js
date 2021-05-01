import Left from './left';
import Right from './right';

const Descubre = () => (
  <div className="descubre" id="descubre">
    <h3 data-aos="fade-left">DESCUBRE</h3>
    <h2 data-aos="fade-right">
      NUESTRA <br /> COLECCION
    </h2>
    <span>
      <p data-aos="fade-left">
        "Esta es una mini galeria de imagenes, edita el texto y pone lo que quieras, tewxto de prueba: Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quis nobis dolore."
      </p>
    </span>

    <Left />
    <Right />

    <style jsx>
      {`
        .descubre {
          width: 100vw;
          min-height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 2em 0 3em 0;
        }

        h3 {
          color: #756a6f;
          font-size: 5em;
          padding-left: 3em;
          margin-top: 0.5em;
          position: relative;
          z-index: 100;
        }

        h3::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #756a6f;
          color: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.3s;
          top: 0;
          left: 0;
        }

        // ==========================

        h2 {
          width: 100%;
          color: #756a6f;
          font-size: 5em;
          text-align: right;
          padding-right: 3em;
          margin-bottom: 0.5em;
        }

        // =====================
        span {
          width: 100vw;
        }
        p {
          width: 450px;
          padding: 0.5em;
          background: #f7ead7;
          font-size: 1.5em;
          font-style: italic;
          margin: 0 0 3em 8em;
          border: 3px solid #756a6f;
          border-radius: 1em;
          box-shadow: 0.2em 0.2em 0.2em silver;
        }
      `}
    </style>
  </div>
);

export default Descubre;

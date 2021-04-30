import Left from './left';
import Right from './right';

const Descubre = () => (
  <div className="descubre" id="descubre">
    <h3>DESCUBRE</h3>
    <h2>
      NUESTRA <br /> COLECCION
    </h2>

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
          padding-bottom: 3em;
        }

        h3 {
          // width: 100%;
          color: #756a6f;
          // color: white;
          font-size: 5em;
          padding-left: 3em;
          margin-top: 2em;
          position: relative;
          z-index: 100;
          // -webkit-text-fill-color: transparent;
          // -webkit-text-stroke-width: 2px;
        }

        h3::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #756a6f;
          // -webkit-text-fill-color: transparent;
          // -webkit-text-stroke-width: 2px;
          color: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.3s;
          top: 0;
          left: 0;
        }
        // h3:hover::before {
        //   transform: scaleX(1);
        //   color: white;
        //   z-index: -100;
        // }

        // ==========================

        h2 {
          width: 100%;
          color: #756a6f;
          font-size: 5em;
          text-align: right;
          padding-right: 3em;
          margin-bottom: 2em;
        }

        // =====================
      `}
    </style>
  </div>
);

export default Descubre;

import Left from './left';
import Right from './right';

const Descubre = () => (
  <div className="descubre" id="#descubre">
    <h2>DESCUBRE</h2>
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

        h2:nth-child(1) {
          width: 100%;
          color: #2f2329;
          font-size: 5em;
          padding-left: 3em;
          margin-top: 2em;
        }
        h2:nth-child(2) {
          width: 100%;
          color: #2f2329;
          font-size: 5em;
          text-align: right;
          padding-right: 3em;
          margin-bottom: 2em;
        }
        .arrow {
          width: 100vw;
          display: flex;
          justify-content: center;
        }
        // =====================
      `}
    </style>
  </div>
);

export default Descubre;

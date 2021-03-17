import Left from './left';
import Right from './right';

const Herramientas = () => (
  <div className="herramientas">
    <Left />
    <Right />
    <style jsx>
      {`
        .herramientas {
          width: 100vw;
          min-height: auto;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-image: linear-gradient(to top, #6a85b6 0%, #f5efef 100%);
          padding: 1em 1em 3em 1em;
        }
        // =================================================
        @media (max-width: 970px) {
          .herramientas {
            flex-wrap: wrap;
          }
        }
      `}
    </style>
  </div>
);

export default Herramientas;

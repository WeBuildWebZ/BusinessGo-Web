import Left from './left';
import Right from './right';

const Me = () => (
  <div className="nosotros" id="nosotros">
    <Left />
    <Right />
    <style jsx>
      {`
        .nosotros {
          width: 100vw;
          min-height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5efef;
        }
        // ======================================================
        @media (max-width: 1199px) {
          .nosotros {
            flex-wrap: wrap;
            align-items: center;
            padding: 1em;
          }
        }
      `}
    </style>
  </div>
);

export default Me;

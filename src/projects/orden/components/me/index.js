import Left from './left';
import Right from './right';

const Me = () => (
  <div className="me" id="me">
    <Left />
    <Right />
    <style jsx>
      {`
        .me {
          width: 100vw;
          min-height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #da7c7a;
        }
        // ======================================================
        @media (max-width: 1199px) {
          .me {
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

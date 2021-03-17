import Left from './left';
import Right from './right';

const Solution = () => (
  <div className="solution" id="servicios">
    <Left />
    <Right />
    <style jsx>
      {`
        .solution {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
          flex-wrap: wrap;
          background: #f5efef;
        }
      `}
    </style>
  </div>
);

export default Solution;

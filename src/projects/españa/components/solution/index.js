import Left from './left';
import Right from './right';

const Solution = () => (
  <div className="solution">
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
          background: white;
        }
      `}
    </style>
  </div>
);

export default Solution;

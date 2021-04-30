import Left from './left';
import Right from './right';

const Nosotras = () => (
  <div className="nos" id="nos">
    <Left />
    <Right />
    <style jsx>
      {`
        .nos {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f7ead7;
          flex-wrap: wrap;
        }
      `}
    </style>
  </div>
);

export default Nosotras;

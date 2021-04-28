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
          background: #ebebeb;
        }
      `}
    </style>
  </div>
);

export default Nosotras;

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
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f4edef;
        }
      `}
    </style>
  </div>
);

export default Herramientas;

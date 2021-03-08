import Left from './left';
import Right from './right';

const Me = () => (
  <div className="me">
    <Left />
    <Right />
    <style jsx>
      {`
        .me {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: #da7c7a;
        }
      `}
    </style>
  </div>
);

export default Me;

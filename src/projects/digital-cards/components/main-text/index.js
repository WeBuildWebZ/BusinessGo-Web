import Left from './left';
import Right from './right';

const MainText = () => (
  <div className="main-text">
    <Left />
    <Right />
    <style jsx>
      {`
        .main-text {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2em 0;
          flex-wrap: wrap;
        }
      `}
    </style>
  </div>
);

export default MainText;

import RowOne from './row1';
import RowTwo from './row2';
import RowThree from './row3';
import RowFour from './row4';

const Rigth = () => (
  <div className="rigth">
    <div className="box">
      <RowOne />
      <RowTwo />
      <RowThree />
      <RowFour />
    </div>
    <style jsx>
      {`
        .rigth {
          flex: 3;
          width: 100%;
          height: 100%;
          background: #ebebeb;
        }
        .box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
        }
      `}
    </style>
  </div>
);

export default Rigth;

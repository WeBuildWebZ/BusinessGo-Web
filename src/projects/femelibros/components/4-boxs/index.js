import { ThreeBox } from '../../data/banner-items';

// fake data lean..borralo pal carajo
const boxes = ThreeBox;

const Boxs = () => (
  <div className="boxs">
    {boxes &&
      boxes.map(({ title }, i) => (
        <div className="box" key={i}>
          <h4>{title}</h4>
        </div>
      ))}

    <style jsx>
      {`
        .boxs {
          width: 100vw;
          min-height: 20vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .box {
          width: 300px;
          min-height: 80px;
          margin: 0 5px;
          background: #ffa489;
          color: white;
          padding: 1em;
          border-radius: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4px;
        }
        h4 {
          font-size: 3em;
        }
      `}
    </style>
  </div>
);

export default Boxs;

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
          min-height: 25vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .box {
          width: 350px;
          min-height: 130px;
          margin: 0 5px;
          background: hsla(16, 100%, 66%, 0.2);
          padding: 1em;
          border-radius: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4px;
        }
        h4 {
          font-size: 4em;
        }
      `}
    </style>
  </div>
);

export default Boxs;

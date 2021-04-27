import { ThreeBox } from '../../data/banner-items';

// fake data lean..borralo pal carajo
const boxes = ThreeBox;

const Boxs = () => (
  <div className="boxs">
      {boxes &&
        boxes.map(({ title, desc }, i) => (
          <div className="box">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}

    <style jsx>
      {`
      
        .boxs {
          width: 100vw;
          min-height:25vh;
          background: coral;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .box {
          width: 350px;
          min-height: 170px;
          background: pink;
          margin: 0 5px;
        }
      `}
    </style>
  </div>
);

export default Boxs;

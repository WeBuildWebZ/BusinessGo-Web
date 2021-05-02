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
          padding: 1em;
        }

        .box {
          width: 300px;
          min-height: 80px;
          background: #ffa489;
          color: white;
          padding: 1em;
          border-radius: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4px;
          box-shadow:.5em .3em .9em #ffa489;

        }
        h4 {
          font-size: 3em;
        }
        // ============================================
        @media (max-width: 615px) {
          .box {
            width: 150px;
            min-height: 50px;
          }
          h4 {
            font-size: 1.5em;
          }
        }
      `}
    </style>
  </div>
);

export default Boxs;

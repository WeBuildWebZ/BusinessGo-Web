import { ThreeBox } from '../../data/banner-items';

// fake data lean..borralo pal carajo
const boxes = ThreeBox;

const Boxs = () => (
  <div className="container">
    <div className="content">
      {boxes &&
        boxes.map(({ title }, i) => (
          <div className="box" key={i}>
            <h4>{title}</h4>
          </div>
        ))}
    </div>

    <style jsx>
      {`
        .container {
          overflow-x: hidden;
          padding: 1em 0;
        }
        .content {
          display: flex;
          flex-wrap: nowrap;
          animation: move 15s infinite linear;
          width: 600px;
        }

        .box {
          flex: 0 0 auto;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h4 {
          font-size: 2em;
          background: #ffa489;
          color: white;
          border-radius: 1em;
          box-shadow: 0.5em 0.3em 0.9em #ffa489;
          padding: 0.1em 0.5em;
        }

        @keyframes move {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
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

import { ThreeBox } from '../../data/banner-items';

// fake data lean..borralo pal carajo
const boxes = ThreeBox;

const Servicios = () => (
  <div className="boxs" id="servicios">
    <h2>Nuestros Servicios</h2>
    {boxes &&
      boxes.map(({ title, desc }, i) => (
        <div className="box" key={i}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      ))}

    <style jsx>
      {`
        .boxs {
          width: 100vw;
          min-height: 100vh;
          background: coral;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        h2 {
          width: 100%;
          text-align: center;
        }

        .box {
          width: 300px;
          min-height: 350px;
          background: white;
          margin: 0 5px;
        }
      `}
    </style>
  </div>
);

export default Servicios;

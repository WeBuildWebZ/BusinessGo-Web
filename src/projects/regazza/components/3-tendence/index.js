import { ImagesTendence } from '../../data/tendence';

const tendence = ImagesTendence;

const Tendence = () => (
  <div className="tendence">
    <h2>TENDENCE</h2>
    <div className="container">
      {tendence.map(({ image, alt, i }) => (
        <div key={i}>
          <img src={image} alt={alt} />
        </div>
      ))}
    </div>

    <style jsx>
      {`
        .tendence {
          width: 100vw;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1em;
          background: black;
        }
        h2 {
          width: 100vw;
          color: white;
          font-size: 2em;
          padding: 2em;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        img {
          width: 350px;
          height: 450px;
          margin: 5px;
          object-fit: cover;
          cursor: pointer;
        }
      `}
    </style>
  </div>
);

export default Tendence;

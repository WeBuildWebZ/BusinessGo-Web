import { Items } from '../../utils/items';

const items = Items;

const Bennefits = () => (
  <div className="bennefits">
    {items.map(({ icon, title, description }, i) => (
      <div key={i} className="card">
        <div className="item">
          <img src={icon} alt={icon} />
        </div>
        <div className="text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    ))}

    <style jsx>
      {`
        .bennefits {
          width: 100vw;
          min-height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1em 0;
          position: relative;
        }

        .card {
          width: 300px;
          min-height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(120deg, #8c52ff 0%, #563c7e 100%);
          border-radius: 1em;
          border: 3px solid #563c7e;
          margin: 0.5em;
          padding: 0.5em;
          cursor: pointer;
        }

        // =======================================================

        img {
          width: 40px;
          height: 40px;
        }

        // =======================================================

        .text {
          height: 100%;
          flex: 7;
          padding: 0.5em;
          color: white;
        }
        h4,
        p {
          padding: 0;
          margin: 0;
        }
        // ===========================RESPONSIVE================================================================

        @media (max-width: 250px) {
          .card {
            flex-flow: column;
          }
        }
      `}
    </style>
  </div>
);

export default Bennefits;

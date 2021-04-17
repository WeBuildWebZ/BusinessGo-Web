import { Targets } from '../../utils/targets';

const targets = Targets;

const Services = () => (
  <div className="targets" id="articulos">
    {targets.map(({ photo, description }, i) => (
      <div className="card" key={i}>
        <div
          className="top"
          style={{
            backgroundImage: `url( ${photo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top'
          }}
        />
        <div className="text">
          <h4>{description}</h4>
        </div>
      </div>
    ))}

    <style jsx>
      {`
        .targets {
          width: 100vw;
          min-height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .card {
          width: 350px;
          height: 400px;
          display: flex;
          flex-flow: column;
          margin: 1em;
          border: 1px solid #1c1c1c;
          border-radius: 1em;
        }

        .text {
          flex: 2;
          width: 100%;
          height: 100%;
        }
        .top {
          flex: 8;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </div>
);

export default Services;

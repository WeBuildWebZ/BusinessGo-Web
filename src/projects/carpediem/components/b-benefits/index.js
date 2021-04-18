import { useSelector } from 'react-redux';

const Bennefits = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="benefits">
      {project?.configuration.basic_info.benefits.map((benefit, i) => (
        <div key={i} className="benefit">
          <div className="item">
            <img src={benefit.icon} alt="Benefit" />
          </div>
          <div className="text">
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}

      <style jsx>
        {`
          .benefits {
            width: 100vw;
            min-height: 30vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 1em 0;
            position: relative;
          }
          .benefit {
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
            transition: 0.7s;
          }
          .benefit:hover {
            transform: scale(1.1);
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
            .benefit {
              flex-flow: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Bennefits;

import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

import Left from './left';
import Right from './right';

const Services = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="solution" id="servicios">
      {!project && <Spinner />}
      {project?.configuration.services.services?.map((service, i) => {
        const isPair = !(i % 2);
        const left = <Left service={service}>{i === 0 && <h5>SERVICIOS</h5>}</Left>;
        const right = <Right service={service} />;

        return (
          <div key={i} className="service">
            {isPair ? (
              <>
                {left}
                {right}
              </>
            ) : (
              <>
                {right}
                {left}
              </>
            )}
          </div>
        );
      })}
      <style jsx>
        {`
          .solution {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em;
            margin: 0 0 3em 0;
            flex-wrap: wrap;
            background: #f5efef;
          }
          .service {
            width: 100%;
            display: flex;
            flex-direction: row;
          }
          .service:not(:first-child) {
            margin-top: 8em;
          }
          @media only screen and (max-width: 768px) {
            .service {
              flex-direction: column;
            }
            .service:nth-child(2n) {
              flex-direction: column-reverse;
            }
            .service:not(:first-child) {
              margin-top: 5em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services;

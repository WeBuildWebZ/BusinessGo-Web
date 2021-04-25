import { useSelector } from 'react-redux';

import Offer from './Offer';

const Services = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="targets" id="articulos">
      {project?.configuration.body.offers.map((offer, i) => (
        <Offer key={i} offer={offer} />
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
        `}
      </style>
    </div>
  );
};

export default Services;

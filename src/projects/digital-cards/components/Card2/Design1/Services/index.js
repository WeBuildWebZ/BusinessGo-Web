import Link from 'next/link';
import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const Services = props => {
  const { card } = props;

  return (
    <div className="services">
      {card.products_or_services?.map((service, i) => (
        <div className="service" key={i}>
          {service.photo && <img className="photo" src={service.photo} />}
          <div className="description">
            <b>{service.title}</b>: {service.description}
          </div>
        </div>
      ))}
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .services {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .service {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 7px;
            border-radius: 14px;
            text-align: center;
          }
          .photo {
            max-width: 50px;
            max-height: 50px;
            border-radius: inherit;
          }
          .description {
            text-align: left;
            margin: 7px;
          }
        `}
      </style>
    </div>
  );
};

Services.propTypes = cardPropTypes;

export default Services;

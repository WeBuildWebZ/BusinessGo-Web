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
          <img className="photo" src={service.photo} />
          <div>{service.title}</div>
          <div>{service.price}</div>
        </div>
      ))}
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .services {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100px;
            margin: 7px;
            border-radius: 14px;
            text-align: center;
          }
          .photo {
            max-width: 100%;
            max-height: 80px;
            border-radius: inherit;
          }
        `}
      </style>
    </div>
  );
};

Services.propTypes = cardPropTypes;

export default Services;

import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const BusinessHours = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div>
      <h3 className="title">{language.businessHours}</h3>
      <div className="businessHoursContainer">
        <div className="businessHours">
          {card.business_hours?.map((business_hour, i) => (
            <div key={i} className="businessHour">
              <div>{business_hour.day}</div>
              <div className="hour">{business_hour.hour}</div>
            </div>
          ))}
        </div>
        <img className="businessPhoto" src={card.business_photo} />
      </div>
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .title {
            font-weight: bold;
          }
          .businessHoursContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .businessHours {
            flex: 0.8;
          }
          .businessHour {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .hour {
            margin-left: 7px;
          }
          .businessPhoto {
            width: 50%;
          }
        `}
      </style>
    </div>
  );
};

BusinessHours.propTypes = cardPropTypes;

export default BusinessHours;

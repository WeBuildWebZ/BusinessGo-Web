import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const BusinessHours = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div>
      <div className="businessHoursContainer">
        <div className="businessHours">
          {Object.keys(card.business_hours || {})
            .filter(day => card.business_hours[day].enabled)
            .map((day, i) => {
              const business_hour = card.business_hours[day];
              const openingDate = new Date(business_hour.opening_date);
              const closingDate = new Date(business_hour.closing_date);
              const openingHours = `${`${openingDate.getHours()}`.padStart(
                2,
                '0'
              )}:${`${openingDate.getMinutes()}`.padStart(2, '0')}`;
              const closingHours = `${`${closingDate.getHours()}`.padStart(
                2,
                '0'
              )}:${`${closingDate.getMinutes()}`.padStart(2, '0')}`;

              return (
                <div key={i} className="businessHour">
                  <div>{language.days[day]}</div>
                  <div className="hour">
                    {openingHours}-{closingHours}
                  </div>
                </div>
              );
            })}
        </div>
        <img className="businessPhoto" src={card.business_photo} />
      </div>
      <style jsx>
        {`
          * {
            color: #686464;
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
            font-size: 12px;
          }
          .hour {
            margin-left: 7px;
          }
          .businessPhoto {
            width: 50%;
            height: auto;
          }
        `}
      </style>
    </div>
  );
};

BusinessHours.propTypes = cardPropTypes;

export default BusinessHours;

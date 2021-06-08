import { useSelector } from 'react-redux';

import { getFormattedHour } from '../../../../../../../utils/dates';

import { getLanguage } from './lang';

const BusinessHours = () => {
  const card = useSelector(store => store.card);
  const businessHours = card.business_hours || {};
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div>
      {Object.keys(language.days).map((dayKey, i) => {
        const businessHour = businessHours[dayKey];
        const isEnabled = !!businessHour?.enabled;
        const openingDate = new Date(businessHour?.opening_date);
        const closingDate = new Date(businessHour?.closing_date);
        const calendarPath = `miniweb_assets/design2/calendar_${isEnabled ? 'enabled' : 'disabled'}.png`;

        return (
          <div key={i} className="businessHour">
            <img className="photo" src={window.getAssetUrl(calendarPath)} />
            <p className="day">{language.days[dayKey]}</p>
            <p className="hours">
              {isEnabled
                ? `${getFormattedHour(openingDate)} ${getFormattedHour(closingDate)}`
                : language.closed}
            </p>
          </div>
        );
      })}
      <style jsx>
        {`
          .businessHour {
            display: flex;
            align-items: center;
            margin-left: 10px;
            flex-direction: row;
            color: #373737;
          }
          .day {
            margin: 0 0 0 10px;
            font-weight: bold;
          }
          .hours {
            margin: 0 0 auto 10px;
            flex-grow: 3;
            color: #807c7c;
            text-align: left;
          }
        `}
      </style>
    </div>
  );
};

export default BusinessHours;

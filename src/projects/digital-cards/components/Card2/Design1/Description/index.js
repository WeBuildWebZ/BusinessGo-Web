import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const Description = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));
  const title = card.business_description ? language.aboutBusiness : language.aboutMe;
  const description = card.business_description || card.person_description;

  return (
    <div className="descriptionContainer">
      <h2 className="title">{title}</h2>
      {description}
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .title {
            font-weight: bold;
          }
          .description {
          }
        `}
      </style>
    </div>
  );
};

Description.propTypes = cardPropTypes;

export default Description;

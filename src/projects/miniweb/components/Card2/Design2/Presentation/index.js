import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import Button1 from '../Button1';

import SocialNetworks from './SocialNetworks';
import { getLanguage } from './lang';

const Presentation = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="presentation">
      <h3>{card.title}</h3>
      <p className="description">{card.description}</p>
      <SocialNetworks card={card} />
      <Button1 text={language.addToContacts} />
      <style jsx>
        {`
          .presentation {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 50vh;
            padding-top: 25px;
            background-color: ${card.border_color};
            color: whitesmoke;
          }
          .description {
            max-width: 75%;
            font-size: 14px;
            text-align: center;
            line-height: 15px;
          }
        `}
      </style>
    </div>
  );
};

Presentation.propTypes = cardPropTypes;

export default Presentation;

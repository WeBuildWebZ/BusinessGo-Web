import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import Dropdown from '../Dropdown';

import AboutCompany from './AboutCompany';
import { getLanguage } from './lang';

const Information = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div id="information" className="information">
      <Dropdown title={language.company}>
        <AboutCompany card={card} />
      </Dropdown>
      <Dropdown title={language.productsServices}>Content...</Dropdown>
      <Dropdown title={language.businessHours}>Content...</Dropdown>
      <Dropdown title={language.address}>Content...</Dropdown>
      <style jsx>
        {`
          .information {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 50vh;
            padding-top: 25px;
            background-color: ${card.border_color};
            background-image: url(${window.getAssetUrl('miniweb_assets/design2/background.svg')});
            height: 200vh;
            background-size: contain;
            color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

Information.propTypes = cardPropTypes;

export default Information;

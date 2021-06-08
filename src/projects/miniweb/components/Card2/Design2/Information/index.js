import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import Dropdown from '../Dropdown';

import AboutCompany from './AboutCompany';
import ProductsServices from './ProductsServices';
import BusinessHours from './BusinessHours';
import Address from './Address';
import { getLanguage } from './lang';

const Information = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div id="information" className="information">
      <Dropdown title={language.company}>
        <AboutCompany card={card} />
      </Dropdown>
      <Dropdown title={language.productsServices}>
        <ProductsServices card={card} />
      </Dropdown>
      <Dropdown title={language.businessHours}>
        <BusinessHours card={card} />
      </Dropdown>
      <Dropdown
        title={language.address}
        beforeContent={<Address.Location card={card} />}
        withoutPadding
        additionalBlocks={[<Address.GoogleMap card={card} />]}
      >
        <Address card={card} />
      </Dropdown>
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

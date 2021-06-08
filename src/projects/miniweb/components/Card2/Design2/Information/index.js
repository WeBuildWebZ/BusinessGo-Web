import { useSelector } from 'react-redux';

import Dropdown from '../Dropdown';

import AboutCompany from './AboutCompany';
import ProductsServices from './ProductsServices';
import BusinessHours from './BusinessHours';
import Address from './Address';
import { getLanguage } from './lang';

const Information = () => {
  const card = useSelector(store => store.card);
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div id="information" className="information">
      <Dropdown title={language.company}>
        <AboutCompany />
      </Dropdown>
      <Dropdown title={language.productsServices}>
        <ProductsServices />
      </Dropdown>
      <Dropdown title={language.businessHours}>
        <BusinessHours />
      </Dropdown>
      <Dropdown
        title={language.address}
        beforeContent={<Address.Location />}
        withoutPadding
        additionalBlocks={[<Address.GoogleMap />]}
      >
        <Address />
      </Dropdown>
      <style jsx>
        {`
          .information {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            padding-top: 25px;
            background-color: ${card.border_color};
            background-image: url(${window.getAssetUrl('miniweb_assets/design2/background.svg')});
            background-size: contain;
            color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

export default Information;

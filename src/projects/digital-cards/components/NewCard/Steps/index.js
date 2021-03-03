import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getProductCodeTranslation } from '../../../../../translations/productsCodes';

import Options from './Options';

const Steps = props => {
  const languageCode = useSelector(store => store.language);
  const productTranslation = getProductCodeTranslation(languageCode);
  const selectedProduct = props.products.find(product => product.code === props.data.card_type);

  switch (props.step) {
    case 1: {
      const handleSelectProductOption = optionIndex => {
        const product = props.products[optionIndex];
        const newData = { card_type: product.code };
        props.onDataAdded(newData, 2);
      };

      const options = props.products.map(product => {
        const translation = productTranslation[product.code];
        return { title: translation.name, description: translation.description };
      });
      return <Options options={options} onOptionSelected={handleSelectProductOption} />;
    }
    case 2: {
      const handleSelectTemplateOption = optionIndex => {
        const product = props.products[optionIndex];
        const newData = { card_type: product.code };
        props.onDataAdded(newData, 3);
      };
      const options = selectedProduct.data.template_codes.map(templateCode => {
        const translation = productTranslation[selectedProduct.code];
        const template = translation.templates[templateCode];
        return { title: template.name, description: template.description };
      });
      return <Options options={options} onOptionSelected={handleSelectTemplateOption} />;
    }
    default: {
      throw new Error(`Wrong step ${props.step}`);
    }
  }
};

Steps.propTypes = {
  step: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDataAdded: PropTypes.func.isRequired
};

export default Steps;

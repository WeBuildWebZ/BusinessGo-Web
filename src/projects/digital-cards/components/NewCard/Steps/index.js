import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getProductCodeTranslation } from '../../../../../translations/productsCodes';

import Options from './Options';
import Form from './Form';

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
        const template_code = selectedProduct.data.template_codes[optionIndex];
        const newData = { template_code };
        props.onDataAdded(newData, 3);
      };
      const options = selectedProduct.data.template_codes.map(templateCode => {
        const translation = productTranslation[selectedProduct.code];
        const template = translation.templates[templateCode];
        return { title: template.name, description: template.description };
      });
      return <Options options={options} onOptionSelected={handleSelectTemplateOption} />;
    }
    case 3: {
      const handleDataChange = (newData, newStep) => {
        console.log('newStep', newStep);
        props.onDataAdded(newData, newStep);
      };
      return (
        <Form
          data={props.data}
          onDataAdded={newData => handleDataChange(newData)}
          onSubmit={newData => handleDataChange(newData, 4)}
        />
      );
    }
    default: {
      throw new Error(`Wrong step ${props.step}`);
    }
  }
};

Steps.propTypes = {
  step: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDataAdded: PropTypes.func.isRequired
};

export default Steps;

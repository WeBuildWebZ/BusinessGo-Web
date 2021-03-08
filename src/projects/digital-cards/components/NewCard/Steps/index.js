import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getProductCodeTranslation } from '../../../../../translations/productsCodes';
import { createClientDocument } from '../../../../../services/api/clientDocument';
import usePushAlert from '../../../../../shared/hooks/usePushAlert';

import Options from './Options';
import Form from './Form';
import { getLanguage } from './lang';

const Steps = props => {
  const languageCode = useSelector(store => store.language);
  const project = useSelector(store => store.project);
  const language = getLanguage(languageCode);
  const productTranslation = getProductCodeTranslation(languageCode);
  const pushAlert = usePushAlert();
  const selectedProduct = props.products.find(product => product.code === props.data.card_type);

  switch (props.step) {
    case 'plan': {
      const handleSelectProductOption = optionIndex => {
        const product = props.products[optionIndex];
        const newData = { card_type: product.code };
        props.onDataAdded(newData, 'template');
      };

      const options = props.products.map(product => {
        const translation = productTranslation[product.code];
        return { title: translation.name, description: translation.description };
      });
      return <Options options={options} onOptionSelected={handleSelectProductOption} />;
    }
    case 'template': {
      const handleSelectTemplateOption = optionIndex => {
        const template_code = selectedProduct.data.template_codes[optionIndex];
        const newData = { template_code };
        props.onDataAdded(newData, 'personal_data');
      };
      const options = selectedProduct.data.template_codes.map(templateCode => {
        const translation = productTranslation[selectedProduct.code];
        const template = translation.templates[templateCode];
        return { title: template.name, description: template.description };
      });
      return <Options options={options} onOptionSelected={handleSelectTemplateOption} />;
    }
    case 'personal_data': {
      const handleDataChange = (newData, newStep) => {
        props.onDataAdded(newData, newStep);
      };
      return (
        <Form
          formCode={`${props.data.card_type}_card_creation_personal_data`}
          data={props.data}
          onDataAdded={newData => handleDataChange(newData)}
          onGoBack={() => props.onDataAdded({}, 'template')}
          onSubmit={newData => handleDataChange(newData, 'photos')}
        />
      );
    }
    case 'photos': {
      const handleDataChange = (newData, newStep) => {
        props.onDataAdded(newData, newStep);
      };
      return (
        <Form
          formCode={`${props.data.card_type}_card_creation_photos`}
          data={props.data}
          onDataAdded={newData => handleDataChange(newData)}
          onGoBack={() => props.onDataAdded({}, 'personal_data')}
          onSubmit={newData => handleDataChange(newData, 'business_data')}
        />
      );
    }
    case 'business_data': {
      const handleDataChange = (newData, newStep) => {
        props.onDataAdded(newData, newStep);
      };
      return (
        <Form
          formCode={`${props.data.card_type}_card_creation_business_data`}
          data={props.data}
          onDataAdded={newData => handleDataChange(newData)}
          onGoBack={() => props.onDataAdded({}, 'photos')}
          onSubmit={newData => handleDataChange(newData, 'social_networks')}
        />
      );
    }
    case 'social_networks': {
      const handleDataChange = (newData, newStep) => {
        props.onDataAdded(newData, newStep);
      };
      return (
        <Form
          formCode={`${props.data.card_type}_card_creation_social_networks`}
          data={props.data}
          onDataAdded={newData => handleDataChange(newData)}
          onGoBack={() => props.onDataAdded({}, 'business_data')}
          onSubmit={newData => handleDataChange(newData, 'final')}
        />
      );
    }
    case 'final': {
      createClientDocument('card', project.code, props.data).then(({ data: newClientDocument }) => {
        window.location.href = `/cards/${encodeURIComponent(newClientDocument._id)}`;
        pushAlert({
          type: 'info',
          title: language.cardCreated.title,
          message: language.cardCreated.message
        });
      });

      return <div>{language.creatingCard}</div>;
    }
    default: {
      throw new Error(`Wrong step ${props.step}`);
    }
  }
};

Steps.propTypes = {
  step: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDataAdded: PropTypes.func.isRequired
};

export default Steps;

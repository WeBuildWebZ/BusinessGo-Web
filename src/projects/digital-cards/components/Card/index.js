import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Spinner from '../../../../components/Spinner';
import { showClientDocument } from '../../../../services/api/clientDocument';

import Free1 from './Free1/Real';

const Card = props => {
  const [card, setCard] = useState({});
  const [templateCode, setTemplateCode] = useState(null);

  useEffect(() => {
    if (props.showAsTemplate) return;
    showClientDocument(props.id).then(({ data: givenCard }) => {
      setCard(givenCard);
      setTemplateCode(givenCard.template_code);
    });
  }, []);

  if (!templateCode) return <Spinner />;

  switch (templateCode) {
    case 'free1': {
      return <Free1 card={card} />;
    }
    default: {
      throw new Error(`Unknown card template code ${templateCode}`);
    }
  }
};

Card.propTypes = {
  showAsTemplate: PropTypes.bool.isRequired,
  templateCode: PropTypes.string,
  id: PropTypes.string
};

Card.defaultProps = {
  templateCode: ''
};

export default Card;

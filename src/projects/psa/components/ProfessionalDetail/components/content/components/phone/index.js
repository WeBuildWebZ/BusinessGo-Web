import React from 'react';
import PropTypes from 'prop-types';

import { copyNumbers } from '../../../../../../../../utils/html';

import './style.css';
import PhoneIcon from './phone-gray.svg';
import CopyIcon from './copy.svg';

const Phone = props => {
  const { professional } = props;

  const handleCopyPhone = () => {
    copyNumbers(professional.phone);
  };

  return (
    <div className="ProfessionalDetail-Content-Phone-container">
      <PhoneIcon className="ProfessionalDetail-Content-Phone-icon" />
      <div className="ProfessionalDetail-Content-Phone-text">{professional.phone}</div>
      <CopyIcon className="ProfessionalDetail-Content-Phone-copyIcon" onClick={handleCopyPhone} />
    </div>
  );
};

Phone.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Phone;

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import EmailIcon from './email.svg';

const Email = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Email-container">
      <EmailIcon className="ProfessionalDetail-Content-Email-icon" />
      <div className="ProfessionalDetail-Content-Email-text">{professional.email}</div>
    </div>
  );
};

Email.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Email;

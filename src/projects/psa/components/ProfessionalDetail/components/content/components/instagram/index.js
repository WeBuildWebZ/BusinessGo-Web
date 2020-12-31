import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import InstragramIcon from './instagram.svg';

const Instagram = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Instagram-container">
      <InstragramIcon className="ProfessionalDetail-Content-Instagram-icon" />
      <div className="ProfessionalDetail-Content-Instagram-text">
        <a
          className="ProfessionalDetail-Content-Instagram-link"
          target="blank"
          href={professional.instagram_url}
        >
          {professional.instagram_user}
        </a>
      </div>
    </div>
  );
};

Instagram.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Instagram;

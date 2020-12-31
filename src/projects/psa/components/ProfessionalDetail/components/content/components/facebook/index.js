import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import FacebookIcon from './facebook.svg';

const Facebook = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Facebook-container">
      <FacebookIcon className="ProfessionalDetail-Content-Facebook-icon" />
      <div className="ProfessionalDetail-Content-Facebook-text">
        <a
          className="ProfessionalDetail-Content-Facebook-link"
          target="blank"
          href={professional.facebook_url}
        >
          {professional.facebook_user}
        </a>
      </div>
    </div>
  );
};

Facebook.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Facebook;

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import LocationIcon from './location.svg';

const Address = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Address-container">
      <LocationIcon className="ProfessionalDetail-Content-Address-addressIcon" />
      <div className="ProfessionalDetail-Content-Address-text">
        {professional.address}
        ,&nbsp;
        {professional.city}
      </div>
    </div>
  );
};

Address.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Address;

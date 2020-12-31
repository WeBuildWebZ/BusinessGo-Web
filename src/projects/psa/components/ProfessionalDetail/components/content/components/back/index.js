import React from 'react';
import PropTypes from 'prop-types';

import BackIcon from './back.svg';
import './style.css';

const Back = props => (
  <div className="ProfessionalDetail-Content-Back-container" onClick={props.onClick}>
    <BackIcon className="ProfessionalDetail-Content-Back-icon" />
    <div className="ProfessionalDetail-Content-Back-text">Volver</div>
  </div>
);

Back.propTypes = {
  onClick: PropTypes.func
};

Back.defaultProps = {
  onClick: () => {}
};

export default Back;

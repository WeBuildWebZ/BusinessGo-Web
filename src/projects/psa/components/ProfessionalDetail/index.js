import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import Content from './components/content';

const ProfessionalDetail = props => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <>
      <div className="ProfessionalDetail-overlay" onClick={props.onClose} />
      <div className="ProfessionalDetail">
        <Content professional={props.professional} onClose={props.onClose} />
      </div>
    </>
  );
};

ProfessionalDetail.propTypes = {
  professional: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

ProfessionalDetail.defaultProps = {
  onClose: () => {}
};

export default ProfessionalDetail;

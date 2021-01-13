import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
      <style jsx>
        {`
          .ProfessionalDetail {
            position: fixed;
            left: 100%;
            top: 0;
            transform: translate(-100%);
            width: 400px;
            height: 100%;
            z-index: 2;
            background-color: #32363d;
            overflow-x: auto;
          }

          .ProfessionalDetail-overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba(32, 34, 33, 0.7);
          }

          @media only screen and (max-width: 768px) {
            .ProfessionalDetail {
              width: 100%;
            }
          }
        `}
      </style>
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

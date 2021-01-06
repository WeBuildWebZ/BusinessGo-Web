import React from 'react';
import PropTypes from 'prop-types';

const Back = props => (
  <div className="ProfessionalDetail-Content-Back-container" onClick={props.onClick} style={props.style}>
    <img className="ProfessionalDetail-Content-Back-icon" src="icons/back.svg" alt="backIcon" />
    <div className="ProfessionalDetail-Content-Back-text">Volver</div>
    <style jsx>
      {`
        .ProfessionalDetail-Content-Back-container {
          width: fit-content;
          cursor: pointer;
          user-select: none;
        }

        .ProfessionalDetail-Content-Back-text {
          display: inline-block;
          font-size: 16px;
          font-weight: 900;
          margin-left: 12px;
        }
      `}
    </style>
  </div>
);

Back.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func
};

Back.defaultProps = {
  style: {},
  onClick: () => {}
};

export default Back;

import React from 'react';
import PropTypes from 'prop-types';

const Back = props => (
  <div className="ProfessionalDetail-Content-Back-container" onClick={props.onClick}>
    <img className="ProfessionalDetail-Content-Back-icon" src="icons/back.svg" alt="backIcon" />
    <div className="ProfessionalDetail-Content-Back-text">Volver</div>
    <style jsx>
      {`
        .ProfessionalDetail-Content-Back-container {
          margin: 37px 0 0 36px;
          width: fit-content;
          cursor: pointer;
          user-select: none;
        }

        .ProfessionalDetail-Content-Back-text {
          display: inline-block;
          font-size: 16px;
          margin-left: 12px;
        }
      `}
    </style>
  </div>
);

Back.propTypes = {
  onClick: PropTypes.func
};

Back.defaultProps = {
  onClick: () => {}
};

export default Back;

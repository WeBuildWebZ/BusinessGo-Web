import React from 'react';
import PropTypes from 'prop-types';

import { copyNumbers } from '../../../../../../../../utils/html';

const Phone = props => {
  const { professional } = props;

  const handleCopyPhone = () => {
    copyNumbers(professional.phone);
  };

  return (
    <div className="ProfessionalDetail-Content-Phone-container">
      <img className="ProfessionalDetail-Content-Phone-icon" src="icons/phone-gray.svg" alt="phoneGrayIcon" />
      <div className="ProfessionalDetail-Content-Phone-text">{professional.phone}</div>
      <img
        className="ProfessionalDetail-Content-Phone-copyIcon"
        src="icons/copy.svg"
        alt="copyIcon"
        onClick={handleCopyPhone}
      />
      <style jsx>
        {`
          .ProfessionalDetail-Content-Phone-container {
            width: 100%;
            float: left;
            margin-top: 10px;
          }

          .ProfessionalDetail-Content-Phone-icon {
            float: left;
          }

          .ProfessionalDetail-Content-Phone-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 15px;
          }

          .ProfessionalDetail-Content-Phone-copyIcon {
            float: left;
            margin: 2px 0 0 8px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

Phone.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Phone;

import React from 'react';
import PropTypes from 'prop-types';

import { copyNumbers } from '../../../../../../../../utils/html';

const Phone = props => {
  const { professional } = props;

  const handleCopyPhone = () => {
    copyNumbers(professional.phone);
  };

  if (!professional.phone) return <div />;

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
            float: left;
            margin: 10px 0 0 20px;
            width: calc(100% - 20px);
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

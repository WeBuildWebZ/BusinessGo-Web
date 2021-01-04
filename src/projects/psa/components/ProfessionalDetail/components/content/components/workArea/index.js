import React from 'react';
import PropTypes from 'prop-types';

const WorkArea = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-WorkArea-container">
      <img
        className="ProfessionalDetail-Content-WorkArea-workshopIcon"
        src="icons/workshop.svg"
        alt="workshopIcon"
      />
      <div className="ProfessionalDetail-Content-WorkArea-text">{professional.work_area}</div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-WorkArea-container {
            width: 100%;
            float: left;
            margin: 2px 0 0 -2px;
          }

          .ProfessionalDetail-Content-WorkArea-workshopIcon {
            float: left;
            width: 22px;
          }

          .ProfessionalDetail-Content-WorkArea-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 17px;
          }
        `}
      </style>
    </div>
  );
};

WorkArea.propTypes = {
  professional: PropTypes.object.isRequired
};

export default WorkArea;

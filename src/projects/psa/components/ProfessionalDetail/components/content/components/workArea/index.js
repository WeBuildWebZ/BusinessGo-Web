import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import WorkshopIcon from './workshop.svg';

const WorkArea = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-WorkArea-container">
      <WorkshopIcon className="ProfessionalDetail-Content-WorkArea-workshopIcon" />
      <div className="ProfessionalDetail-Content-WorkArea-text">{professional.work_area}</div>
    </div>
  );
};

WorkArea.propTypes = {
  professional: PropTypes.object.isRequired
};

export default WorkArea;

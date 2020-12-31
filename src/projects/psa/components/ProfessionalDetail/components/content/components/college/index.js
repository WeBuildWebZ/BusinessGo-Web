import React from 'react';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../components/OpenableImage';

import './style.css';
import CollegeIcon from './college.svg';

const College = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-College-container">
      <CollegeIcon className="ProfessionalDetail-Content-College-university" />
      <div className="ProfessionalDetail-Content-College-textContainer">
        <div className="ProfessionalDetail-Content-College-collage">{professional.college}</div>
        <div className="ProfessionalDetail-Content-College-collegeDegree">{professional.college_degree}</div>
        <OpenableImage
          className="ProfessionalDetail-Content-College-collegeDegreePhoto"
          title={professional.college_degree}
          src={professional.college_degree_photo}
        />
      </div>
    </div>
  );
};

College.propTypes = {
  professional: PropTypes.object.isRequired
};

export default College;

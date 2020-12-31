import React from 'react';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../components/OpenableImage';
import './style.css';

const Profile = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Profile">
      <OpenableImage
        className="ProfessionalDetail-Content-Profile-image"
        title={professional.name}
        src={professional.photo}
      />
      <div className="ProfessionalDetail-Content-Profile-name">{professional.name}</div>
      <div className="ProfessionalDetail-Content-Profile-workshopName">{professional.workshop_name}</div>
    </div>
  );
};

Profile.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../components/OpenableImage';

const Profile = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Profile">
      <OpenableImage style={{ width: 96, height: 96 }} title={professional.name} src={professional.photo} />
      <div className="ProfessionalDetail-Content-Profile-name">{professional.name}</div>
      <div className="ProfessionalDetail-Content-Profile-workshopName">{professional.workshop_name}</div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-Profile-name {
            margin-top: 10px;
            font-size: 22px;
          }

          .ProfessionalDetail-Content-Profile-workshopName {
            margin-top: 4px;
            font-size: 16px;
            color: #cccdce;
          }
        `}
      </style>
    </div>
  );
};

Profile.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Profile;

import React from 'react';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../components/OpenableImage';

const SIIPhoto = props => {
  const { professional } = props;

  if (!professional.college_degree) return <div />;

  return (
    <div className="SIIPhoto-container">
      <img className="SIIPhoto-icon" src="icons/document.png" alt="SIIPhotoIcon" />
      <div className="SIIPhoto-textContainer">
        <div className="ProfessionalDetail-Content-College-collage">Foto de SII</div>
        {professional.patent_photo && (
          <OpenableImage
            style={{ float: 'left', width: 100, marginLeft: 11 }}
            title="Foto de SII"
            src={professional.sii_photo}
          />
        )}
      </div>
      <style jsx>
        {`
          .SIIPhoto-container {
            float: left;
            margin: 10px 0 0 18px;
            width: calc(100% - 18px);
          }

          .SIIPhoto-icon {
            float: left;
            width: 18px;
            height: 20px;
          }

          .SIIPhoto-textContainer {
            position: relative;
            top: -3px;
            margin-left: 6px;
            float: left;
          }

          .ProfessionalDetail-Content-College-collage {
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 11px;
          }
        `}
      </style>
    </div>
  );
};

SIIPhoto.propTypes = {
  professional: PropTypes.object.isRequired
};

export default SIIPhoto;

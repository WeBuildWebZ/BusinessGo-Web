import React from 'react';
import PropTypes from 'prop-types';

import OpenableImage from '../../../../../../../../components/OpenableImage';

const PatentPhoto = props => {
  const { professional } = props;

  if (!professional.college_degree) return <div />;

  return (
    <div className="patentPhoto-container">
      <img className="patentPhoto-icon" src="icons/patent.png" alt="patentIcon" />
      <div className="patentPhoto-textContainer">
        <div className="patentPhoto-title">Patente</div>
        {professional.patent_photo && (
          <OpenableImage
            style={{ float: 'left', width: 100, marginLeft: 11 }}
            title="Patente"
            src={professional.patent_photo}
          />
        )}
      </div>
      <style jsx>
        {`
          .patentPhoto-container {
            float: left;
            margin: 10px 0 0 16px;
            width: calc(100% - 16px);
          }

          .patentPhoto-icon {
            float: left;
            width: 22px;
          }

          .patentPhoto-textContainer {
            position: relative;
            top: -3px;
            margin-left: 6px;
            float: left;
          }

          .patentPhoto-title {
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 11px;
          }
        `}
      </style>
    </div>
  );
};

PatentPhoto.propTypes = {
  professional: PropTypes.object.isRequired
};

export default PatentPhoto;

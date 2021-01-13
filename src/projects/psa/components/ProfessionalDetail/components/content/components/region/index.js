import React from 'react';
import PropTypes from 'prop-types';

const Region = props => {
  const { professional } = props;

  if (!professional.address) return <div />;

  return (
    <div className="region-container">
      <img className="region-icon" src="icons/region.png" alt="locationIcon" />
      <div className="region-text">{professional.region}</div>
      <style jsx>
        {`
          .region-container {
            float: left;
            margin: 10px 0 0 20px;
            width: calc(100% - 20px);
          }

          .region-icon {
            float: left;
            width: 18px;
          }

          .region-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 21px;
          }
        `}
      </style>
    </div>
  );
};

Region.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Region;

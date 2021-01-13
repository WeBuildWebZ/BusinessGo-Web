import React from 'react';
import PropTypes from 'prop-types';

const Address = props => {
  const { professional } = props;

  if (!professional.address) return <div />;

  return (
    <div className="ProfessionalDetail-Content-Address-container">
      <img
        className="ProfessionalDetail-Content-Address-addressIcon"
        src="icons/location.svg"
        alt="locationIcon"
      />
      <div className="ProfessionalDetail-Content-Address-text">
        {professional.address}
        ,&nbsp;
        {professional.city}
      </div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-Address-container {
            float: left;
            margin: 10px 0 0 20px;
            width: calc(100% - 20px);
          }

          .ProfessionalDetail-Content-Address-addressIcon {
            float: left;
          }

          .ProfessionalDetail-Content-Address-text {
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

Address.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Address;

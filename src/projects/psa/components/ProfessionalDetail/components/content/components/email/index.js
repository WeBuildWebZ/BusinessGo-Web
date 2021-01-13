import React from 'react';
import PropTypes from 'prop-types';

const Email = props => {
  const { professional } = props;

  if (!professional.email) return <div />;

  return (
    <div className="ProfessionalDetail-Content-Email-container">
      <img className="ProfessionalDetail-Content-Email-icon" src="icons/email.svg" alt="emailIcon" />
      <div className="ProfessionalDetail-Content-Email-text">{professional.email}</div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-Email-container {
            float: left;
            margin: 10px 0 0 20px;
            width: calc(100% - 20px);
          }

          .ProfessionalDetail-Content-Email-icon {
            float: left;
          }

          .ProfessionalDetail-Content-Email-text {
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

Email.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Email;

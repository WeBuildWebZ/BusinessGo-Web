import React from 'react';
import PropTypes from 'prop-types';

const Facebook = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Facebook-container">
      <img className="ProfessionalDetail-Content-Facebook-icon" src="icons/facebook.svg" alt="facebookIcon" />
      <div className="ProfessionalDetail-Content-Facebook-text">
        <a
          className="ProfessionalDetail-Content-Facebook-link"
          target="blank"
          href={professional.facebook_url}
        >
          {professional.facebook_user}
        </a>
      </div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-Facebook-container {
            width: 100%;
            float: left;
            margin-top: 12px;
          }

          .ProfessionalDetail-Content-Facebook-icon {
            float: left;
          }

          .ProfessionalDetail-Content-Facebook-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 25px;
            color: white;
          }

          .ProfessionalDetail-Content-Facebook-link {
            color: #0cc44a;
          }

          .ProfessionalDetail-Content-Facebook-link:hover {
            color: #14a042;
          }
        `}
      </style>
    </div>
  );
};

Facebook.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Facebook;

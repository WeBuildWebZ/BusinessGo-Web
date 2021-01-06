import React from 'react';
import PropTypes from 'prop-types';

const Instagram = props => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-Instagram-container">
      <img
        className="ProfessionalDetail-Content-Instagram-icon"
        src="icons/instagram.svg"
        alt="instagramIcon"
      />
      <div className="ProfessionalDetail-Content-Instagram-text">
        <a
          className="ProfessionalDetail-Content-Instagram-link"
          target="blank"
          href={professional.instagram_url}
        >
          {professional.instagram_user}
        </a>
      </div>
      <style jsx>
        {`
          .ProfessionalDetail-Content-Instagram-container {
            float: left;
            margin-left: 20px;
          }

          .ProfessionalDetail-Content-Instagram-icon {
            float: left;
          }

          .ProfessionalDetail-Content-Instagram-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 15px;
            color: white;
          }

          .ProfessionalDetail-Content-Instagram-link {
            color: #0cc44a;
          }

          .ProfessionalDetail-Content-Instagram-link:hover {
            color: #14a042;
          }
        `}
      </style>
    </div>
  );
};

Instagram.propTypes = {
  professional: PropTypes.object.isRequired
};

export default Instagram;

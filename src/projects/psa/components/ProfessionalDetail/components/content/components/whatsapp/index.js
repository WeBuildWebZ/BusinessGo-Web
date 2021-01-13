import React from 'react';
import PropTypes from 'prop-types';

const Facebook = props => {
  const { professional } = props;

  if (!professional.facebook_url || !professional.facebook_user) return <div />;

  return (
    <div className="whatsapp-container">
      <img className="whatsapp-icon" src="icons/whatsapp.png" alt="whatsappIcon" />
      <div className="whatsapp-text">
        <a
          className="whatsapp-link"
          target="blank"
          href={`https://api.whatsapp.com/send?phone=${professional.whatsapp_number}`}
        >
          {professional.whatsapp_number}
        </a>
      </div>
      <style jsx>
        {`
          .whatsapp-container {
            float: left;
            margin: 10px 0 0 17px;
            width: calc(100% - 17px);
          }

          .whatsapp-icon {
            float: left;
            width: 22px;
          }

          .whatsapp-text {
            float: left;
            font-size: 16px;
            text-align: left;
            margin: 0 0 0 17px;
            color: white;
          }

          .whatsapp-link {
            color: #0cc44a;
          }

          .whatsapp-link:hover {
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

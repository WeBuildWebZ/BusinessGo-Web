import React from 'react';
import PropTypes from 'prop-types';

const EmailButton = props => {
  const { professional } = props;

  if (!professional.email) return <div />;

  return (
    <div className="ProfessionalDetail-Content-EmailButton">
      <a
        className="ProfessionalDetail-Content-EmailButton-link"
        target="blank"
        href={`mailto:${professional.email}`}
      >
        <span className="ProfessionalDetail-Content-EmailButton-text">Enviar email</span>
      </a>
      <style jsx>
        {`
          .ProfessionalDetail-Content-EmailButton {
            position: relative;
            float: left;
            width: 84%;
            margin: 20px 0 0 8%;
            height: 46px;
            background-color: #0cc44a;
            font-size: 16px;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            user-select: none;
          }

          .ProfessionalDetail-Content-EmailButton-text {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
          }

          .ProfessionalDetail-Content-EmailButton-link {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            color: #ffffff;
          }

          .ProfessionalDetail-Content-EmailButton-link:hover {
            color: #dddddd;
          }
        `}
      </style>
    </div>
  );
};

EmailButton.propTypes = {
  professional: PropTypes.object.isRequired
};

export default EmailButton;

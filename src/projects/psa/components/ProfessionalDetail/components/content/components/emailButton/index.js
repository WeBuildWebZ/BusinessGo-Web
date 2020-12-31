import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const EmailButton = (props) => {
  const { professional } = props;

  return (
    <div className="ProfessionalDetail-Content-EmailButton">
      <a
        className="ProfessionalDetail-Content-EmailButton-link"
        target="blank"
        href={`mailto:${professional.email}`}
      >
        <span className="ProfessionalDetail-Content-EmailButton-text">
          Enviar email
        </span>
      </a>
    </div>
  );
};

EmailButton.propTypes = {
  professional: PropTypes.object.isRequired,
};

export default EmailButton;

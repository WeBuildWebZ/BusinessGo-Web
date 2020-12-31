import React from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

import "./style.css";
import Card from "./components/card";

const Professionals = (props) => {
  const { professionals, loading } = props;

  return (
    <div className="Professionals">
      {loading && (
        <Spinner animation="grow" className="Professionals-spinner" />
      )}
      {professionals.map((professional, i) => (
        <Card
          key={i}
          professional={professional}
          onClick={() => props.onClick(professional)}
        />
      ))}
    </div>
  );
};

Professionals.propTypes = {
  professionals: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Professionals.defaultProps = {
  onClick: () => {},
};

export default Professionals;

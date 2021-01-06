import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => (
  <div className="spinner" style={props.style}>
    <div className="subspinner" />
    <style jsx>
      {`
        .spinner {
          float: left;
          width: 40px;
          height: 40px;
          border-style: solid;
          border-width: 1px;
          animation: main-rotation 1s linear infinite;
        }

        .subspinner {
          float: left;
          width: 30%;
          height: 30%;
          border-style: solid;
          border-width: 1px;
          border-radius: 50%;
          animation: child-rotation 1s linear infinite;
        }

        @keyframes main-rotation {
          0% {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            border-radius: 0;
            background-color: rgba(0, 0, 0, 0);
          }
          50% {
            border-radius: 50px;
            background-color: rgba(0, 0, 0, 0.5);
          }
          100% {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes child-rotation {
          0% {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
          100% {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
          }
        }
      `}
    </style>
  </div>
);

Spinner.propTypes = {
  style: PropTypes.object
};

Spinner.defaultProps = {
  style: {}
};

export default Spinner;

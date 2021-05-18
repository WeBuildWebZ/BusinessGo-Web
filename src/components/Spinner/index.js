import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => (
  <svg style={props.style}>
    <circle cx="70" cy="70" r="70" />

    <style jsx>
      {`
        svg {
          position: relative;
          width: 40px;
          height: 40px;
          animation: rotate 2s linear infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        svg circle {
          width: 100%;
          height: 100%;
          fill: none;
          stroke-width: 10;
          stroke: #00a1ff;
          stroke-linecap: round;
          transform: translate(5px, 5px);
          stroke-dashoffset: 440;
          stroke-dasharray: 440;
          animation: animate 4s linear infinite;
        }
        @keyframes animate {
          0%,
          100% {
            stroke-dashoffset: 440;
          }
          50% {
            stroke-dashoffset: 0;
          }
          50.1% {
            stroke-dashoffset: 880;
          }
        }
      `}
    </style>
  </svg>
);

Spinner.propTypes = {
  style: PropTypes.object
};

Spinner.defaultProps = {
  style: {}
};

export default Spinner;

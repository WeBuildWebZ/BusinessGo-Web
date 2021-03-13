import React from 'react';
import PropTypes from 'prop-types';

const Split = props => (
  <div className="split" style={props.style}>
    <style jsx>
      {`
        .split {
          float: left;
          width: 100%;
          height: 1px;
          margin: 10px 0 5px 5%;
          background: rgba(128, 128, 128, 0.5);
        }
      `}
    </style>
  </div>
);

Split.propTypes = {
  style: PropTypes.object
};

Split.defaultProps = {
  style: {}
};

export default Split;

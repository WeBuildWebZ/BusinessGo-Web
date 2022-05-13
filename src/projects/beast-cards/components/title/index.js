import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div className="text">
    {title}
    <style jsx>
      {`
        .text {
          width: 100vw;
          font-size: 50px;
          color: white;
          font-weight: bold;
          margin: 0;
          padding: 0;
          padding-left: 2em;
        }
      `}
    </style>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;

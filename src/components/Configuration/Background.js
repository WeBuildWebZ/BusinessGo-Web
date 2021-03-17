import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ backgroundImage }) => (
  <div className="background">
    <style jsx>
      {`
        .background {
          position: fixed;
          background-image: url(${backgroundImage});
          width: 100vw;
          min-height: 100vh;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: -1;
        }
      `}
    </style>
  </div>
);

Background.propTypes = {
  backgroundImage: PropTypes.string
};
Background.defaultProps = {
  backgroundImage: ''
};

export default Background;

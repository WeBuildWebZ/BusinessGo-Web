import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ backgroundImage }) => (
  <div
    style={{
      position: 'absolute',
      backgroundImage: `url(${backgroundImage})`,
      width: '100vw',
      minHeight: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -1
    }}
  />
);

Background.propTypes = {
  backgroundImage: PropTypes.string
};
Background.defaultProps = {
  backgroundImage: ''
};

export default Background;

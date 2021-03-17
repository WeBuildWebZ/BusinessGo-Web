import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <h2 className="title">
    {props.title}
    <style jsx>
      {`
        .title {
          margin: 7px;
          color: whitesmoke;
        }
      `}
    </style>
  </h2>
);

Title.propTypes = {
  title: PropTypes.string
};
Title.defaultProps = {
  title: ''
};

export default Title;

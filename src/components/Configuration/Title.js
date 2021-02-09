import React from 'react';
import { ModalTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Title = props => (
  <ModalTitle
    style={{
      color: 'white'
    }}
  >
    {props.title}
  </ModalTitle>
);

Title.propTypes = {
  title: PropTypes.string
};
Title.defaultProps = {
  title: ''
};

export default Title;

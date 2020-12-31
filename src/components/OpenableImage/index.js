import React, { useState } from 'react';
import { Modal, Paper } from '@material-ui/core';
import { HighlightOff } from '@material-ui/icons';
import PropTypes from 'prop-types';

import './style.css';

const OpenableImage = props => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img
        alt={props.title}
        src={props.src}
        className={`OpenableImage ${props.className}`}
        onClick={handleImageClick}
      />
      {isOpen && (
        <Modal
          open
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Paper className="OpenableImage-modalPaper">
            <HighlightOff className="OpenableImage-modalClose" onClick={handleClose} />
            <h4 className="OpenableImage-modalTitle">{props.title}</h4>
            <center>
              <img alt={props.title} src={props.src} className="OpenableImage-modalImage" />
            </center>
          </Paper>
        </Modal>
      )}
    </>
  );
};

OpenableImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string
};

OpenableImage.defaultProps = {
  className: '',
  title: ''
};

export default OpenableImage;

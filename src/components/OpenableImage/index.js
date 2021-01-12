import React, { useState } from 'react';
import { Modal, Paper } from '@material-ui/core';
import { HighlightOff } from '@material-ui/icons';
import PropTypes from 'prop-types';

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
        className="OpenableImage"
        style={props.style}
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
      <style jsx global>
        {`
          .OpenableImage {
            cursor: pointer;
          }

          .OpenableImage-modalPaper {
            position: absolute;
            transform: translate(-50%);
            left: 50%;
            width: 70%;
            margin-top: 15px;
          }

          .OpenableImage-modalTitle {
            text-align: center;
          }

          .OpenableImage-modalClose {
            float: right;
            margin: 8px 8px 0 0;
            cursor: pointer;
          }

          .OpenableImage-modalImage {
            width: 80%;
            margin-bottom: 10px;
          }
        `}
      </style>
    </>
  );
};

OpenableImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  style: PropTypes.object
};

OpenableImage.defaultProps = {
  title: '',
  style: {}
};

export default OpenableImage;

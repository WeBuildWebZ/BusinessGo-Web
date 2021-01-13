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
          style={{ overflowY: 'auto' }}
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
      <style jsx>
        {`
          .OpenableImage {
            border-radius: 5px;
            cursor: pointer;
            transition: 0.2s;
            animation: arrive 1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }
          .OpenableImage:hover {
            border-radius: 8px;
            box-shadow: 0 0 1px 1px #dddddd;
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

          @keyframes arrive {
            0% {
              opacity: 0;
              box-shadow: 0 0 3px 3px rgb(41, 190, 41);
            }
            100% {
              opacity: 1;
            }
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

import { Modal } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Items from './Items';
import { getLanguage } from './lang';

const CartModal = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <>
      <Modal open={props.show} onClose={props.onClose} disableBackdropClick>
        <div className="modalContent">
          <div className="navbar">
            <h4>{language.thisIsYourCart}</h4>
            <i className="fa fa-window-close" onClick={props.onClose} />
          </div>
          <Items />
        </div>
      </Modal>
      <style jsx>
        {`
          .modalContent {
            margin: 21px;
            padding: 14px;
            background-color: white;
            outline: none;
            border-radius: 14px;
            clip-path: circle(100%);
            animation: modalAppear 1.5s ease;
          }
          .navbar {
            display: flex;
          }
          .fa-window-close {
            margin: 7px 7px 0 auto;
            cursor: pointer;
          }
          @keyframes modalAppear {
            0% {
              clip-path: circle(0);
            }
          }
        `}
      </style>
    </>
  );
};

CartModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CartModal;

import { Modal, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLanguage } from './lang';

const ConfirmModal = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Modal open={props.show} onClose={() => props.onPrompt(false)}>
      <div className="modalContainer">
        <h2 className="title">{props.title}</h2>
        <p className="message">{props.message}</p>
        <Button
          key="cancel"
          onClick={() => props.onPrompt(false)}
          style={{ backgroundColor: 'red', borderColor: 'red' }}
        >
          {language.cancel}
        </Button>
        <Button key="confirm" onClick={() => props.onPrompt(true)}>
          {language.confirm}
        </Button>
        <style jsx>
          {`
            .modalContainer {
              width: 80%;
              margin: 20px 0 0 10%;
              padding: 14px;
              border-radius: 5px;
              background-color: #ebebeb;
            }
            .title {
              width: 100%;
              padding: 10px;
            }
            .message {
              width: 100%;
              padding: 12px;
            }
          `}
        </style>
      </div>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.any,
  onPrompt: PropTypes.func
};

ConfirmModal.defaultProps = {
  title: '',
  message: '',
  onPrompt: () => {}
};

export default ConfirmModal;

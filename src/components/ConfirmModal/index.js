import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLanguage } from './lang';

const ConfirmModal = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Modal show={props.show} onHide={() => props.onPrompt(false)}>
      <Modal.Header closeButton>{props.title}</Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
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
      </Modal.Footer>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onPrompt: PropTypes.func
};

ConfirmModal.defaultProps = {
  title: '',
  onPrompt: () => {}
};

export default ConfirmModal;

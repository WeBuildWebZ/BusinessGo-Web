import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLanguage } from './lang';

const ConfirmModal = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Modal show={props.show}>
      {props.title && <Modal.Header>{props.title}</Modal.Header>}
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button key="confirm" onClick={() => props.onPrompt(true)}>
          {language.confirm}
        </Button>
        <Button key="cancel" onClick={() => props.onPrompt(true)}>
          {language.cancel}
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

export default PropTypes;

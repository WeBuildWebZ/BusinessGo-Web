import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const WelcomeModal = () => {
  const [show, setShow] = useState(true);
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const [currentModalPage, setCurrentModalPage] = useState(0);

  const handleHide = () => {
    setShow(false);
  };

  const changeModalPage = amount => {
    setCurrentModalPage(currentModalPage + amount);
  };

  return (
    <Modal
      backdrop="static"
      onHide={handleHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {language.modals[currentModalPage].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{language.modals[currentModalPage].message(user)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={currentModalPage <= 0} onClick={() => changeModalPage(-1)}>
          {language.back}
        </Button>
        <Button disabled={currentModalPage >= language.modals.length - 1} onClick={() => changeModalPage(1)}>
          {language.next}
        </Button>
        <Button disabled onClick={handleHide}>
          {language.close}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;

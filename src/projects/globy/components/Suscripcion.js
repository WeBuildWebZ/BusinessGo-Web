import { useState, useEffect } from 'react';
import { Button, Modal, PopoverTitle } from 'react-bootstrap';

import FieldRenderer from '../../../components/FieldRenderer';
import Spinner from '../../../components/Spinner';
import { PROJECT_CODE } from '../constants';
import { showForm } from '../../../services/api/form';

const Suscripcion = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [suscriptionForm, setSuscriptionForm] = useState(null);

  useEffect(() => {
    showForm(PROJECT_CODE, 'email_suscription').then(({ data: givenForm }) => {
      setSuscriptionForm(givenForm);
    });
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && suscriptionForm && (
        <Modal show onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <PopoverTitle>Suscríbete a nuestras últimas novedades!</PopoverTitle>
          </Modal.Header>
          <Modal.Body>
            <FieldRenderer fields={suscriptionForm.fields} />
          </Modal.Body>
          <Modal.Footer>
            <Button>Suscribirse</Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="subs">
        {!suscriptionForm && <Spinner />}
        {suscriptionForm && <h4 onClick={handleOpenModal}>Suscríbete Gratis!</h4>}
        <style jsx>{`
          .subs {
            width: 100vw;
            height: 0vh;
            margin: 2em 0;
            padding: 0 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
          h4 {
            color: #86a8e7;
            padding: 1em 2em;
            border: 4px solid #ebebeb;
            border-radius: 1em;
          }
          h4:hover {
            color: white;
            background: #86a8e7;
          }
        `}</style>
      </div>
    </>
  );
};

export default Suscripcion;

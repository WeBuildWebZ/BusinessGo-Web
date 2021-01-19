import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, PopoverTitle } from 'react-bootstrap';

import FieldRenderer from '../../../components/FieldRenderer';
import Spinner from '../../../components/Spinner';
import { PROJECT_CODE } from '../constants';
import { showForm } from '../../../services/api/form';
import { createFormResponse } from '../../../services/api/formResponse';
import { pushAlert } from '../../../shared/actions/alerts';

const Suscripcion = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const [modalOpen, setModalOpen] = useState(false);
  const [suscriptionForm, setSuscriptionForm] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

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

  const handleSubmitForm = () => {
    setIsSubmiting(true);
    createFormResponse(PROJECT_CODE, 'email_suscription', formData).then(() => {
      setIsSubmiting(false);
      setModalOpen(false);
      dispatch(
        pushAlert({
          title: project.configuration.subscriptions.answer_title,
          message: project.configuration.subscriptions.answer_message
        })
      );
    });
  };

  return (
    <>
      {modalOpen && suscriptionForm && (
        <Modal show onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <PopoverTitle>Suscríbete a nuestras últimas novedades!</PopoverTitle>
          </Modal.Header>
          <Modal.Body>
            <FieldRenderer fields={suscriptionForm.fields} onChange={setFormData} />
          </Modal.Body>
          <Modal.Footer>
            <Button disabled={isSubmiting} onClick={handleSubmitForm}>
              Suscribirse
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="subs">
        {!suscriptionForm && <Spinner />}
        {suscriptionForm && <h4 onClick={handleOpenModal}>Suscríbete Gratis!</h4>}
        <style jsx>
          {`
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
          `}
        </style>
      </div>
    </>
  );
};

export default Suscripcion;

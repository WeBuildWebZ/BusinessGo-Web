import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, PopoverTitle } from 'react-bootstrap';
import { Button } from '@material-ui/core';

import FieldRenderer from '../../../../components/FieldRenderer';
import Spinner from '../../../../components/Spinner';
import { createFormResponse } from '../../../../services/api/formResponse';
import { pushAlert } from '../../../../shared/actions/alerts';
import { PROJECT_CODE } from '../../constants';
import { showForm } from '../../../../services/api/form';

const Frase = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const [suscriptionForm, setSuscriptionForm] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmitForm = () => {
    setIsSubmiting(true);
    createFormResponse(PROJECT_CODE, 'email_subscription', formData).then(() => {
      setIsSubmiting(false);
      setModalOpen(false);
      dispatch(
        pushAlert({
          title: project.configuration.email_subscription_info.answer_title,
          message: project.configuration.email_subscription_info.answer_message
        })
      );
    });
  };

  useEffect(() => {
    showForm(PROJECT_CODE, 'email_subscription').then(({ data: givenForm }) => {
      setSuscriptionForm(givenForm);
    });
  }, []);

  return (
    <div className="frase">
      {!project && <Spinner />}
      {project && (
        <>
          <h2>{project.configuration.email_subscription_info.title}</h2>
          <h5>{project.configuration.email_subscription_info.description}</h5>
          <button onClick={() => setModalOpen(true)}>
            {project.configuration.email_subscription_info.subscription_button}
          </button>
          {modalOpen && suscriptionForm && project && (
            <Modal show onHide={() => setModalOpen(false)}>
              <Modal.Header closeButton>
                <PopoverTitle>{project.configuration.email_subscription_info.title}</PopoverTitle>
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
        </>
      )}

      <style jsx>
        {`
          .frase {
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            justify-content: center;
            width: 100vw;
            height: 60vh;
            background-attachment: fixed;
            background-image: url(/images/frase.jpg);
            background-position: 0 -150px;
            background-size: cover;
            background-repeat: no-repeat;
            margin: 5em 0;
            padding: 0 3em;
            white-space: pre-line;
          }
          h2,
          h5 {
            color: white;
            background: hsla(0, 0%, 0%, 0.8);
            padding: 0.5em;
            border-radius: 0.5em;
          }
          button {
            border: none;
            outline: none;
            border-radius: 1em;
            cursor: pointer;
            background: linear-gradient(to right, yellow, #ffa51d);
            color: #191a35;
            font-weight: 900;
            padding: 0.5em 1.5em;
          }
        `}
      </style>
    </div>
  );
};

export default Frase;

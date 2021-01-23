import { Button, Modal, PopoverTitle } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';
import FieldRenderer from '../../../../components/FieldRenderer';
import { showForm } from '../../../../services/api/form';
import { PROJECT_CODE } from '../../constants';
import { createFormResponse } from '../../../../services/api/formResponse';
import { pushAlert } from '../../../../shared/actions/alerts';

const Subscribe = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const [suscriptionForm, setSuscriptionForm] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    showForm(PROJECT_CODE, 'email_subscription').then(({ data: givenForm }) => {
      setSuscriptionForm(givenForm);
    });
  }, []);

  const handleSubmitForm = () => {
    setIsSubmiting(true);
    createFormResponse(PROJECT_CODE, 'email_subscription', formData).then(() => {
      setIsSubmiting(false);
      setModalOpen(false);
      dispatch(
        pushAlert({
          title: project.configuration.email_subscription_config.answer_title,
          message: project.configuration.email_subscription_config.answer_message
        })
      );
    });
  };

  return (
    <section className="subscribe">
      {modalOpen && suscriptionForm && project && (
        <Modal show onHide={() => setModalOpen(false)}>
          <Modal.Header closeButton>
            <PopoverTitle>{project.configuration.email_subscription_config.title}</PopoverTitle>
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
      <div className="container">
        <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
          {!project && <Spinner />}
          {project && (
            <>
              <h4>{project.configuration.email_subscription_config.title}</h4>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow"
                onClick={() => setModalOpen(true)}
              >
                {project.configuration.email_subscription_config.subscription_button}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal } from '@material-ui/core';

import usePushAlert from '../../../../shared/hooks/usePushAlert';
import { showForm } from '../../../../services/api/form';
import { createFormResponse } from '../../../../services/api/formResponse';
import { PROJECT_CODE } from '../../constants';
import Spinner from '../../../../components/Spinner';
import FieldRenderer from '../../../../components/FieldRenderer';

const Subscription = () => {
  const pushAlert = usePushAlert();
  const project = useSelector(store => store.project);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [suscriptionForm, setSuscriptionForm] = useState(null);
  // const [formData, setFormData] = useState({});
  // const [isSubmiting, setIsSubmiting] = useState(false);

  // useEffect(() => {
  //   showForm(PROJECT_CODE, 'email_suscription').then(({ data: givenForm }) => {
  //     setSuscriptionForm(givenForm);
  //   });
  // }, []);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  // const handleSubmitForm = () => {
  //   setIsSubmiting(true);
  //   createFormResponse(PROJECT_CODE, 'email_suscription', formData).then(() => {
  //     setIsSubmiting(false);
  //     setModalOpen(false);
  //     pushAlert({
  //       type: 'info',
  //       title: project.configuration.subscriptions.answer_title,
  //       message: project.configuration.subscriptions.answer_message
  //     });
  //   });
  // };

  return (
    <div className="subs">
      {/* <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="modal">
          <h3>Suscríbete a nuestras últimas novedades!</h3>
          <FieldRenderer fields={suscriptionForm?.fields} onChange={setFormData} />
          <Button disabled={isSubmiting} onClick={handleSubmitForm}>
            Suscribirse
          </Button>
        </div>
      </Modal> */}
      <div className="left">
        {/* {!suscriptionForm && <Spinner />}
        {suscriptionForm && <button onClick={handleOpenModal}>Suscríbete Gratis!</button>} */}
      </div>
      <div className="right">
        <h2>Queremos</h2>
        <h2>Brindarte</h2>
        <h2>Comfort</h2>
      </div>

      <style jsx>
        {`
          .subs {
            width: 100vw;
            min-height: 30vh;
            margin: 2em 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .left,
          .right {
            width: 500px;
            padding: 0 1em;
          }

          button {
            width: 400px;
            color: white;
            padding: 1em 2em;
            border-radius: 1em;
            background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
            cursor: pointer;
            border: none;
            outline: none;
            font-size: 2em;
          }
          h2 {
            background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            font-size: 2.5em;
            font-family: playfair display;
          }
          h2:nth-child(2) {
            padding-left: 1em;
          }
          h2:nth-child(3) {
            padding-left: 2em;
          }
          .modal {
            width: 80%;
            margin: 21px 0 0 10%;
            padding: 21px;
            background-color: whitesmoke;
          }
          @media (max-width: 970px) {
            .subs {
              margin: 2em 0;
            }
            .left,
            .right {
              width: 100vw;
            }
          }
          @media (max-width: 710px) {
            .subs {
              flex-wrap: wrap;
            }
            .left,
            .right {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
            }
          }
          @media (max-width: 434px) {
            button {
              width: auto;
            }
          }
          @media (max-width: 294px) {
            button {
              border-radius: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Subscription;

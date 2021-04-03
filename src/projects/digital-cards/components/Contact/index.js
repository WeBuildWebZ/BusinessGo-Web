import { useEffect, useState } from 'react';

import FieldRenderer from '../../../../components/FieldRenderer';
import { showForm } from '../../../../services/api/form';
import * as constants from '../../constants';
import { createFormResponse } from '../../../../services/api/formResponse';
import usePushAlert from '../../../../shared/hooks/usePushAlert';
import RedesSvg from '../redes-svg';

const Contact = () => {
  const pushAlert = usePushAlert();
  const [form, setForm] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    showForm(constants.PROJECT_CODE, 'contact').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  const handleSubmitForm = formData => {
    setIsSubmiting(true);
    createFormResponse(constants.PROJECT_CODE, 'contact', formData).then(() => {
      setIsSubmiting(false);
      pushAlert({
        title: 'Email enviado correctamente',
        message: 'Gracias por contactarte con nosotros! Hemos recibido tu mensaje correctamente.'
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    });
  };

  return (
    <div className="contact" id="contact">
      <h3 className="title">Contacto</h3>
      <div className="formContainer">
        {form && (
          <FieldRenderer
            fields={form.fields}
            saveButton
            saveButtonText="Enviar"
            onChange={handleSubmitForm}
          />
        )}
      </div>
      <RedesSvg />
      <style jsx>
        {`
          .contact {
            width: 100vw;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .title {
            margin-top: 100px;
            color: #c800cd;
          }
          .formContainer {
            width: 80%;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;

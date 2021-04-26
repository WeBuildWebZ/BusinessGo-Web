import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import CaptchaScript from '../../../../components/CaptchaScript';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Text from '../../components/Text';
import FilePicker from '../../components/FilePicker';
import Button from '../../components/Button';
import { PROJECT_CODE } from '../../constants';
import { createFormResponse } from '../../../../services/api/formResponse';
import usePushAlert from '../../../../shared/hooks/usePushAlert';

import { getLanguage } from './lang';

const Contact = () => {
  const pushAlert = usePushAlert();
  const language = getLanguage(useSelector(store => store.language));
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [data, setData] = useState({});
  const [uploading, setUploading] = useState(false);
  const dataRef = useRef();
  dataRef.current = data;

  const handleSubmitForm = () => {
    createFormResponse(PROJECT_CODE, 'contact', data).then(() => {
      pushAlert({
        type: 'info',
        ...language.emailSent
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    });
  };

  const handleSubmit = () => {
    if (!captchaLoaded) return;
    setIsSubmiting(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LcVl6caAAAAAGUToo3Ajh7UcJ9rzJ3Y-HZ5Bs7P', { action: 'submit' })
        .then(token => {
          handleSubmitForm();
        });
    });
  };

  const handleChange = (key, value) => {
    setData({ ...dataRef.current, [key]: value });
  };

  const handleFinishUpload = fileUrl => {
    setUploading(false);
    handleChange('photo', fileUrl);
  };

  return (
    <Layout page="contact">
      <Title title={language.title} />
      <div className="container">
        <Text
          title={language.name.title}
          placeholder={language.name.placeholder}
          onChange={value => handleChange('name', value)}
        />
        <Text
          title={language.email.title}
          placeholder={language.email.placeholder}
          onChange={value => handleChange('email', value)}
        />
        <Text
          title={language.url.title}
          placeholder={language.url.placeholder}
          onChange={value => handleChange('url', value)}
        />
        <Text
          title={language.message.title}
          placeholder={language.message.placeholder}
          large
          onChange={value => handleChange('message', value)}
        />
        <FilePicker
          title={language.image}
          onChange={value => handleChange('photo', value)}
          onUploadStart={() => setUploading(true)}
          onUploadEnd={handleFinishUpload}
        />
        <Button text={language.send} onClick={handleSubmit} disabled={isSubmiting || uploading} />
        <CaptchaScript onLoad={() => setCaptchaLoaded(true)} />
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </Layout>
  );
};

export default Contact;

import { useSelector } from 'react-redux';
import { useState } from 'react';

import CaptchaScript from '../../../../components/CaptchaScript';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Text from '../../components/Text';
import FilePicker from '../../components/FilePicker';
import Button from '../../components/Button';

import { getLanguage } from './lang';

const Contact = () => {
  const language = getLanguage(useSelector(store => store.language));
  const [captchaLoaded, setCaptchaLoaded] = useState(false);

  const handleSubmit = () => {
    if (!captchaLoaded) return;
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LcVl6caAAAAAGUToo3Ajh7UcJ9rzJ3Y-HZ5Bs7P', { action: 'submit' })
        .then(token => {
          console.log('submit');
          // Add your logic to submit to your backend server here.
        });
    });
  };

  return (
    <Layout page="contact">
      <Title title={language.title} />
      <Text title={language.name.title} placeholder={language.name.placeholder} />
      <Text title={language.email.title} placeholder={language.email.placeholder} />
      <Text title={language.url.title} placeholder={language.url.placeholder} />
      <Text title={language.message.title} placeholder={language.message.placeholder} large />
      <FilePicker title={language.image} />
      <Button text={language.send} onClick={handleSubmit} />
      <CaptchaScript onLoad={() => setCaptchaLoaded(true)} />
    </Layout>
  );
};

export default Contact;

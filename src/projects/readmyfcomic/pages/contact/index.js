import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Text from '../../components/Text';
import FilePicker from '../../components/FilePicker';

import { getLanguage } from './lang';

const Contact = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout page="contact">
      <Title title={language.title} />
      <Text title={language.name.title} placeholder={language.name.placeholder} />
      <Text title={language.email.title} placeholder={language.email.placeholder} />
      <Text title={language.url.title} placeholder={language.url.placeholder} />
      <Text title={language.message.title} placeholder={language.message.placeholder} large />
      <FilePicker title={language.image} />
    </Layout>
  );
};

export default Contact;

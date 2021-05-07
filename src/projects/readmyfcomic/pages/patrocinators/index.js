import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import PatrocinatorsComponent from '../../components/PatrocinatorsComponent';

import { getLanguage } from './lang';

const PatrocinatorsPage = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout page="frontPage">
      <Title title={language.title} subtitle={language.subtitle} />
      <PatrocinatorsComponent />
    </Layout>
  );
};

export default PatrocinatorsPage;

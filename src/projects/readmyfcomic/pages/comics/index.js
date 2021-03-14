import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';

import Filters from './Filters';
import { getLanguage } from './lang';

const Comics = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout page="findComic">
      <Title title="FIND COMIC" />
      <Filters />
    </Layout>
  );
};

export default Comics;

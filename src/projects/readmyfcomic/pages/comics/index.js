import { useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';

import Filters from './Filters';
import ComicList from './ComicList';
import { getLanguage } from './lang';

const Comics = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout page="findComic">
      <Title title={language.title} />
      <Filters />
      <ComicList />
    </Layout>
  );
};

export default Comics;

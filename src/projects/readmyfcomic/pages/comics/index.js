import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';
import { setComicPagination } from '../../actions/comicPagination';

import Filters from './Filters';
import ComicList from './ComicList';
import { getLanguage } from './lang';

const Comics = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const pagination = useSelector(store => store.comicPagination);

  const handleChangePage = pageNumber => {
    const newPagination = { ...pagination, pageNumber };
    dispatch(setComicPagination(newPagination));
  };

  return (
    <Layout page="findComic">
      <Title title={language.title} />
      <Filters />
      <ComicList />
      {pagination && <Pagination pagination={pagination} onPageChanged={handleChangePage} />}
    </Layout>
  );
};

export default Comics;

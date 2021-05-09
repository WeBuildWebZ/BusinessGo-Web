import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';
import { setForumPagination } from '../../actions/forumPagination';
import ForumList from '../../components/ForumList';
import ForumFilters from '../../components/ForumFilters';

import { getLanguage } from './lang';

const Proflies = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const pagination = useSelector(store => store.forumPagination);

  const handleChangePage = pageNumber => {
    const newPagination = { ...pagination, pageNumber };
    dispatch(setForumPagination(newPagination));
  };

  return (
    <Layout page="forums">
      <Title title={language.title} />
      <ForumFilters />
      <ForumList />
      {pagination && <Pagination pagination={pagination} onPageChanged={handleChangePage} />}
    </Layout>
  );
};

export default Proflies;

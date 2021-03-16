import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';
import { setProfilePagination } from '../../actions/profilePagination';

import Filters from './Filters';
import ForumList from './ForumList';
import { getLanguage } from './lang';

const Proflies = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const pagination = useSelector(store => store.profilePagination);

  const handleChangePage = pageNumber => {
    const newPagination = { ...pagination, pageNumber };
    dispatch(setProfilePagination(newPagination));
  };

  return (
    <Layout page="forums">
      <Title title={language.title} />
      <Filters />
      <ForumList />
      {pagination && <Pagination pagination={pagination} onPageChanged={handleChangePage} />}
    </Layout>
  );
};

export default Proflies;

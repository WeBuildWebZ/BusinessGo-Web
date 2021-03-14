import { useSelector } from 'react-redux';
import qs from 'qs';

const useChangeQuery = () => {
  const query = useSelector(store => store.queryParams);

  return queryChange => {
    const newQuery = qs.stringify({ ...query, ...queryChange });
    window.location.href = `${window.location.pathname}?${newQuery}`;
  };
};

export default useChangeQuery;

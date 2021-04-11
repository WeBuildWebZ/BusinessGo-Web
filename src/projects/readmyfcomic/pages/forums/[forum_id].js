import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Forum from '../../components/Forum';
import { showClientDocument } from '../../../../services/api/clientDocument';

const Proflies = () => {
  const [forum, setForum] = useState(null);
  const query = useSelector(store => store.queryParams);

  useEffect(() => {
    if (!query.forum_id) return;
    showClientDocument(query.forum_id).then(({ data: givenForum }) => {
      setForum(givenForum);
    });
  }, [query.forum_id]);

  return <Layout page="forums">{forum && <Forum forum={forum} />}</Layout>;
};

export default Proflies;

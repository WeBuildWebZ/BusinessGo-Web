import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';
import Card from '../../components/Card';

const Cards = () => {
  const query = useSelector(store => store.queryParams);

  return (
    <>
      {!query.card_id && <Spinner />}
      {query.card_id && <Card id={query.card_id} />}
    </>
  );
};

export default Cards;

import { useSelector } from 'react-redux';

import Card from '../../components/Card';

const Cards = () => {
  const query = useSelector(store => store.queryParams);

  return (
    <>
      <Card />
    </>
  );
};

export default Cards;

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';
import Card from '../../components/Card2';
import { showClientDocument } from '../../../../services/api/clientDocument';

const Cards = () => {
  const query = useSelector(store => store.queryParams);
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (!query.card_id) return;

    showClientDocument(query.card_id).then(({ data: givenCard }) => {
      setCard(givenCard);
    });
  }, [query.card_id]);

  return (
    <>
      {!card && <Spinner />}
      {card && <Card card={card} />}
    </>
  );
};

export default Cards;

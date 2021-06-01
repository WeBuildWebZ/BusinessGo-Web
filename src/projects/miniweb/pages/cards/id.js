import { useEffect, useState } from 'react';

import Spinner from '../../../../components/Spinner';
import Card from '../../components/Card2';
import { showItem } from '../../../../services/api/item';
import { getQuery } from '../../../../utils/query';

const Cards = () => {
  const [card, setCard] = useState(null);
  const cardId = typeof window === 'object' ? window.location.pathname.substr('/cards/'.length) : null;
  const { card: cardFromQuery } = getQuery();

  useEffect(() => {
    if (!cardId) return;
    if (cardFromQuery) return setCard(JSON.parse(cardFromQuery));
    showItem(cardId).then(({ data: givenCard }) => {
      setCard(givenCard);
    });
  }, [cardId, cardFromQuery]);

  return card ? <Card card={card} /> : <Spinner />;
};

export default Cards;

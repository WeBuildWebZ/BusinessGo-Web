import { useEffect, useState } from 'react';

import Spinner from '../../../../components/Spinner';
import Card from '../../components/Card2';
import { showClientDocument } from '../../../../services/api/clientDocument';
import { getQuery } from '../../../../utils/query';

const Cards = () => {
  const [card, setCard] = useState(null);
  const cardId = typeof window === 'object' ? window.location.pathname.substr('/cards/'.length) : null;
  const { card: cardFromQuery } = getQuery();

  // if (!card && cardFromQuery) setCard(JSON.parse(cardFromQuery));

  console.log('card', card);

  useEffect(() => {
    if (!cardId) return;
    // if (cardFromQuery) return;
    showClientDocument(cardId).then(({ data: givenCard }) => {
      setCard(givenCard);
    });
  }, [cardId, cardFromQuery]);

  return card ? <Card card={card} /> : <Spinner />;
};

export default Cards;

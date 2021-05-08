import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { listItems } from '../../../../services/api/item';
import { formatCard } from '../../utils/card';

import Card from './Card';

const CardList = () => {
  const project = useSelector(store => store.project);
  const user = useSelector(store => store.user);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (!project || !user) return;
    listItems('card', project, 100, 1, { user_id: user._id }).then(({ data: givenCards }) => {
      setCards(givenCards.map(formatCard));
    });
  }, [project]);

  return (
    <div className="cardList">
      {cards?.map((card, i) => (
        <Card key={i} card={card} />
      ))}
      <style jsx>
        {`
          .cardList {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
};

export default CardList;

// import { useEffect, useState } from 'react';

// import Spinner from '../../../../components/Spinner';
// import Card from '../../components/Card2';
// import { showClientDocument } from '../../../../services/api/clientDocument';

// const Cards = () => {
//   const [card, setCard] = useState(null);
//   const cardId = typeof window === 'object' ? window.location.pathname.substr('/cards/'.length) : null;

//   console.log('card', card);

//   useEffect(() => {
//     if (!cardId) return;
//     showClientDocument(cardId).then(({ data: givenCard }) => {
//       setCard(givenCard);
//     });
//   }, [cardId]);

//   return (
//     <>
//       {!card && <Spinner />}
//       {card && <Card card={card} />}
//     </>
//   );
// };

// export default Cards;
const Card = () => <div>test</div>;

export default Card;

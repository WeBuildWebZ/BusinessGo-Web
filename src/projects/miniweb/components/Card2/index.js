import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import { formatCard } from '../../utils/card';
import { setCard } from '../../actions/card';

import Design1 from './Design1';
import Design2 from './Design2';
import { cardPropTypes } from './constants';

const Card = props => {
  const { card } = props;
  const dispatch = useDispatch();
  const storedCard = useSelector(store => store.card);

  const formattedCard = formatCard(card);
  console.log('formattedCard', formattedCard);

  if (!storedCard) dispatch(setCard(formattedCard));

  return <>{formattedCard.design === 'design2' ? <Design2 /> : <Design1 card={formattedCard} />}</>;
};

Card.propTypes = cardPropTypes;

export default Card;

import Head from 'next/head';

import { formatCard } from '../../utils/card';

import Design1 from './Design1';
import Design2 from './Design2';
import { cardPropTypes } from './constants';

const Card = props => {
  const { card } = props;

  const formattedCard = formatCard(card);

  console.log('formattedCard', formattedCard);

  return (
    // TODO make switch with different card designs
    <>
      {formattedCard.design === 'design2' ? (
        <Design2 card={formattedCard} />
      ) : (
        <Design1 card={formattedCard} />
      )}
      <Head>
        {/* <script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHIcjOKvD_-9nkTujgWNLr5fzQQPrn0D4&callback=initMap&libraries=&v=weekly"
          async
        /> */}
      </Head>
    </>
  );
};

Card.propTypes = cardPropTypes;

export default Card;

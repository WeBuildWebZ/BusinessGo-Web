import Head from 'next/head';

import Design1 from './Design1';
import { cardPropTypes } from './constants';

const Card = props => {
  const { card } = props;

  const primary_photo = card.profile_photo || card.logo;
  const modifiedCard = {
    ...card,
    is_person: card.destination === 'person',
    is_business: card.destination === 'business',
    primary_photo,
    secondary_photo: primary_photo ? card.logo : null,
    photo_or_logo: card.profile_photo || card.logo,
    border_color: card.border_color || 'green',
    completeName: card.name && card.surnames ? `${card.name}${card.surnames ? ` ${card.surnames}` : ''}` : '',

    completeAddress: [card.state, card.municipality, card.country].join(', ')
  };

  return (
    // TODO make switch with different card designs
    <>
      <Design1 card={modifiedCard} />
      <Head>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHIcjOKvD_-9nkTujgWNLr5fzQQPrn0D4&callback=initMap&libraries=&v=weekly"
          async
        />
      </Head>
    </>
  );
};

Card.propTypes = cardPropTypes;

export default Card;

import Head from 'next/head';

import Design1 from './Design1';
import { cardPropTypes } from './constants';

const Card = props => (
  // TODO make switch with different card designs
  <>
    <Design1 {...props} />
    <Head>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=default" />
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHIcjOKvD_-9nkTujgWNLr5fzQQPrn0D4&callback=initMap&libraries=&v=weekly"
        async
      />
    </Head>
  </>
);

Card.propTypes = cardPropTypes;

export default Card;

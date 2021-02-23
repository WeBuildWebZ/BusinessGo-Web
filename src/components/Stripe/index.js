import Head from 'next/head';
import PropTypes from 'prop-types';

import ProductShape from '../../shapes/Product';

const Stripe = () => (
  <>
    <Head>
      <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch" />
      <script src="https://js.stripe.com/v3" />
    </Head>

    <section>
      <div className="product">
        <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button type="button" id="checkout-button">
        Checkout
      </button>
    </section>
  </>
);

Stripe.propTypes = {
  product: PropTypes.shape(ProductShape).isRequired
};

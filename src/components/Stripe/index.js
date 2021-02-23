import Head from 'next/head';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ProductShape from '../../shapes/Product';
import { getProductCodeTranslation } from '../../translations/productsCodes';

import { getLanguage } from './lang';

const Stripe = ({ product }) => {
  const languageCode = useSelector(store => store.language);
  const langauge = getLanguage(languageCode);
  const translatedProduct = getProductCodeTranslation(languageCode)[product.code];

  return (
    <>
      <Head>
        <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch" />
        <script src="https://js.stripe.com/v3" />
      </Head>

      <section>
        <div className="product">
          <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
          <div className="description">
            <h3>{translatedProduct.name}</h3>
            <h5>
              ${product.price} {product.currency}
            </h5>
          </div>
        </div>
        <button type="button" id="checkout-button">
          {langauge.buyCard}
        </button>
      </section>
    </>
  );
};

Stripe.propTypes = {
  product: PropTypes.shape(ProductShape).isRequired
};

export default Stripe;

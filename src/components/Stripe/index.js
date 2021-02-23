import Head from 'next/head';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import ProductShape from '../../shapes/Product';
import { getProductCodeTranslation } from '../../translations/productsCodes';
import { createPaymentSession } from '../../services/ecommerce_api/payment_session';

import { getLanguage } from './lang';

const Stripe = ({ product, successUrl, cancelUrl }) => {
  const languageCode = useSelector(store => store.language);
  const langauge = getLanguage(languageCode);
  const translatedProduct = getProductCodeTranslation(languageCode)[product.code];
  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    createPaymentSession({ ...product, ...translatedProduct }, successUrl, cancelUrl).then(
      ({ data: sessionId }) => {
        console.log('sessionId', sessionId);
        setLoading(false);
      }
    );
  };

  return (
    <>
      <Head>
        <script src="https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch" />
        <script src="https://js.stripe.com/v3" />
      </Head>

      <section>
        <div className="product">
          {product.images.map((image, i) => (
            <img key={i} src={image} alt="Product" />
          ))}
          <div className="description">
            <h3>{translatedProduct.name}</h3>
            <h5>
              ${product.price} {product.currency}
            </h5>
          </div>
        </div>
        <button type="button" id="checkout-button" disabled={loading} onClick={handlePay}>
          {langauge.buyCard}
        </button>
      </section>
    </>
  );
};

Stripe.propTypes = {
  product: PropTypes.shape(ProductShape).isRequired,
  successUrl: PropTypes.string.isRequired,
  cancelUrl: PropTypes.string.isRequired
};

export default Stripe;

import { useState } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../layouts/Main';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutInputs from '../../components/checkout-inputs';
import CheckoutModal from '../../components/checkout-modal';
import CheckoutItems from '../../components/checkout/items';
import { getFinalPrice } from '../../utils/product';

const CheckoutPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});

  const priceTotal = useSelector(state => {
    const { cartItems } = state;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => (totalPrice += getFinalPrice(item.product) * item.count));
    }

    return totalPrice;
  });

  return (
    <Layout>
      {openModal && <CheckoutModal data={data} />}
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Generar pedido</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <CheckoutInputs onChange={setData} />
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Tu carrito</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Costo total</p>
                  <h3>${priceTotal.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back">
              <i className="icon-left" /> Volver
            </a>
            <div className="cart-actions__items-wrapper">
              <a href="/products">
                <button type="button" className="btn btn--rounded btn--border">
                  Seguir navegando
                </button>
              </a>
              {priceTotal > 0 && (
                <button
                  type="button"
                  className="btn btn--rounded btn--yellow"
                  onClick={() => setOpenModal(true)}
                >
                  Generar pedido
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;

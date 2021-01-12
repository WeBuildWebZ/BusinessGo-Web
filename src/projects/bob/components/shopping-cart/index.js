import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getFinalPrice } from '../../utils/product';
import CheckoutStatus from '../checkout-status';

import Item from './item';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const [email, setEmail] = useState('');

  const priceTotal = useSelector(state => {
    const _cartItems = state.cartItems;
    let totalPrice = 0;
    if (_cartItems.length > 0) {
      _cartItems.map(item => (totalPrice += getFinalPrice(item.product) * item.count));
    }

    return totalPrice;
  });

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: 'left' }}>Product</th>
                  <th>Ammount</th>
                  <th>Price</th>
                </tr>

                {cartItems.map((item, i) => (
                  <Item key={i} product={item.product} count={item.count} />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className="cart-actions">
          <a href="/products" className="cart__btn-back">
            <i className="icon-left" /> Seguir navegando
          </a>
          {/* <input type="text" placeholder="Promo Code" className="cart__promo-code" /> */}

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Costo total <strong>${priceTotal.toFixed(2)}</strong>
            </p>
            {priceTotal > 0 && (
              <a href="/cart/checkout" className="btn btn--rounded btn--yellow">
                Pedir
              </a>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .emailInput {
            padding: 8px 0 8px 15px;
            border-radius: 50px;
            background-color: aquamarine;
          }
        `}
      </style>
    </section>
  );
};

export default ShoppingCart;

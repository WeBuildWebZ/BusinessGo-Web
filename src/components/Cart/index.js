import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import { getLanguage } from './lang';

const Cart = () => {
  const language = getLanguage(useSelector(store => store.language));
  const cartItems = useSelector(store => store.cartItems);

  return (
    <div className="cartItems">
      {!cartItems.length ? <div className="cartIsEmpty">{language.cartIsEmpty}</div> : <div />}
      {cartItems.map((cartItem, i) => (
        <CartItem {...cartItem} key={i} />
      ))}
      <style jsx>
        {`
          .cartItems {
            display: flex;
            flex-direction: column;
          }
          .cartIsEmpty {
            margin: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default Cart;

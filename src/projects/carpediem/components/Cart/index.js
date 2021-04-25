import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Cart = () => {
  const language = getLanguage(useSelector(store => store.language));
  const cartItems = useSelector(store => store.cartItems);
  const totalCount = cartItems.reduce((a, b) => a + b.count, 0);
  const showButton = totalCount > 0;

  return (
    <div className="cart">
      <div className={`cartButton${showButton ? '' : ' hidden'}`}>{language.viewCart}</div>
      <style jsx>
        {`
          .cartButton {
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(0, -100%);
            padding: 7px;
            left: 10px;
            top: calc(100% - 10px);
            width: fit-content;
            background-color: #8804c4;
            border-radius: 7px;
            color: whitesmoke;
            font-weight: bold;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .cartButton:hover {
            transform: scale(1.1) translate(0, -100%);
          }
          .cartButton:active {
            transform: scale(1.2) translate(0, -100%);
            transition: 0.1s;
          }
          .cartButton.hidden {
            left: -500px;
            opacity: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Cart;

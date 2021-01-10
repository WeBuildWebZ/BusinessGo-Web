import { useSelector } from 'react-redux';

import { getFinalPrice } from '../../../utils/product';

const CheckoutItems = () => {
  const cartItems = useSelector(state => state.cartItems);

  return (
    <ul className="checkout-items">
      {cartItems.map((item, i) => (
        <li className="checkout-item" key={i}>
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.product.photo} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.product.name}</h3>
              <span>#{item.product._id}</span>
            </div>
          </div>
          <h3>
            ${getFinalPrice(item.product).toFixed(2)} X {item.count}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItems;

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setCartItem, removeCartItem } from '../../../actions/cartItems';

const ShoppingCart = props => {
  const { product, count } = props;

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeCartItem({ product, count }));
  };

  const setProductCount = _count => {
    if (_count <= 0) return false;

    dispatch(setCartItem({ product, count: _count }));
  };

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={product.photo} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{product.name}</h3>
            <p>#{product._id}</p>
          </div>
        </div>
      </td>
      {/* <td className="cart-item-before" data-label="Color">
        {color}
      </td>
      <td className="cart-item-before" data-label="Size">
        {size}
      </td> */}
      <td>
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>${product.price}</td>
      <td className="cart-item-cancel">
        <i className="icon-cancel" onClick={() => removeFromCart()} />
      </td>
    </tr>
  );
};

ShoppingCart.propTypes = {
  product: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
};

export default ShoppingCart;

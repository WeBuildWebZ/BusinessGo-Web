import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Badge from '../Badge';
import { removeCartItem, setCartItem } from '../../shared/actions/cartItems';

const CartManager = props => {
  const { product } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cartItems);
  const count = cartItems.find(item => item.product._id === props.product._id)?.count || 0;

  const handleAddCartItem = offset => {
    const newCount = count + offset;
    const item = { product, count: newCount };

    if (newCount === 0) return dispatch(removeCartItem(item));
    if (newCount < 0) return;

    dispatch(setCartItem(item));
  };

  return (
    <div className="cartManager">
      <i className="fa fa-minus buttonIcon" onClick={() => handleAddCartItem(-1)} />
      <i className="fa fa-shopping-cart">{count > 0 && <Badge count={count} />}</i>
      <i className="fa fa-plus buttonIcon" onClick={() => handleAddCartItem(1)} />
      <style jsx>
        {`
          .fa {
            font-size: 24px;
          }
          .buttonIcon {
            width: fit-content;
            margin: 14px;
            transition: 0.7s;
            cursor: pointer;
            color: #8804c4;
          }
          .buttonIcon:hover {
            transform: scale(1.1);
          }
          .buttonIcon:active {
            transform: scale(1.3);
            transition: 0.1s;
          }
          .cartManager {
            display: flex;
            align-items: center;
            margin: 2px 0 0 14px;
          }
          .fa-shopping-cart {
            position: relative;
            overflow: visible;
            color: ${props.cartColor};
          }
        `}
      </style>
    </div>
  );
};

CartManager.propTypes = {
  product: PropTypes.object.isRequired,
  cartColor: PropTypes.string
};

CartManager.defaultProps = {
  cartColor: '#000'
};

export default CartManager;

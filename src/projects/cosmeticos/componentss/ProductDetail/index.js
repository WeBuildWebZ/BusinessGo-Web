import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MinusIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import PlusIcon from '@material-ui/icons/AddBoxRounded';
import PropTypes from 'prop-types';

import { setCartItem, removeCartItem } from '../../../../shared/actions/cartItems';
import { getProductPrice } from '../../../../utils/product';

import { getLanguage } from './lang';

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const [cartItem] = useSelector(store => store.cartItems).filter(
    _cartItem => _cartItem.product._id === product._id
  );
  const [count, setCount] = useState(cartItem?.count || 1);

  const handleChangeCount = amount => {
    const newCount = count + amount;
    if (newCount <= 0) return;

    setCount(newCount);
  };

  const handleToggleCartItem = () => {
    const shouldSet = !cartItem;
    dispatch(shouldSet ? setCartItem({ product, count }) : removeCartItem({ product }));

    if (!shouldSet) setCount(1);
  };

  return (
    <div className="productDetail">
      <img className="photo" src={product.photo} />
      <div className="container">
        <h5 className="panel description">{product.description}</h5>
        <div className="panel longDescription">{product.long_description}</div>
        {!cartItem && (
          <div className="panel button" onClick={() => handleChangeCount(-1)}>
            <MinusIcon />
          </div>
        )}
        <div className="panel button" onClick={handleToggleCartItem}>
          {!cartItem ? language.addToCart(count) : language.removeFromCart}
        </div>
        {!cartItem && (
          <div className="panel button" onClick={() => handleChangeCount(1)}>
            <PlusIcon />
          </div>
        )}
        <div className="productPrice">
          {`${getProductPrice(product, count)} ${project?.configuration.basic_info.currency}`}
        </div>
      </div>
      <style jsx>
        {`
          .productDetail {
            display: flex;
            flex-direction: row;
          }
          .photo {
            max-width: 50%;
          }
          .container {
          }
          .panel {
            padding: 7px;
            margin: 7px 0 7px 0;
            border-radius: 5px;
            background-color: rgba(135, 206, 250, 0.733);
            box-shadow: 0 0 2px 1px rgba(135, 206, 250, 0.733);
          }
          .description {
          }
          .longDescription {
            padding: 7px;
            margin-bottom: 10px;
            white-space: pre-line;
          }
          .button {
            user-select: none;
            display: inline-block;
            width: fit-content;
            padding: 3px;
            margin-left: 7px;
            margin-right: 7px;
            cursor: pointer;
            transition: 0.7s;
          }
          .button:hover {
            box-shadow: 0 0 5px 2px rgba(135, 206, 250, 0.733);
            border-radius: 7px;
            padding: 9px;
          }
          .productPrice {
            display: inline-block;
            color: green;
            text-shadow: 1px 1px 2px green;
          }

          @media only screen and (max-width: 768px) {
            .productDetail {
              flex-direction: column;
              align-items: center;
            }

            .photo {
            }
          }
        `}
      </style>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductDetail;

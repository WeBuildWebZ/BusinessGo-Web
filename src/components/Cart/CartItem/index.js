import PropTypes from 'prop-types';
import RemoveIcon from '@material-ui/icons/CancelRounded';
import { useDispatch, useSelector } from 'react-redux';

import { getProductPrice } from '../../../utils/product';
import { removeCartItem } from '../../../shared/actions/cartItems';

import { getLanguage } from './lang';

const CartItem = ({ product, count }) => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const productLink = `/productos/${encodeURIComponent(product._id)}`;
  const price = getProductPrice(product, count);

  const handleRemoveItem = () => {
    dispatch(removeCartItem({ product }));
  };

  return (
    <div className="cartItem">
      <a href={productLink}>
        <img className="photo" src={product.photo} />
      </a>

      <div className="description">
        <a href={productLink}>
          <strong>{product.description}</strong>
        </a>
        <a className="productIdLink" href={productLink}>
          <div className="productId">{product._id}</div>
        </a>
        <div className="amount">{`${language.amount}: ${count}`}</div>

        <div className="mobileRightFlex">
          <div className="price">{`${price} ${project?.configuration.basic_info.currency}`}</div>
          <div className="remove" onClick={handleRemoveItem}>
            <RemoveIcon />
          </div>
        </div>
      </div>

      <div className="rightFlex">
        <div className="price">{`${price} ${project?.configuration.basic_info.currency}`}</div>
        <div className="remove" onClick={handleRemoveItem}>
          <RemoveIcon />
        </div>
      </div>

      <style jsx>
        {`
          .cartItem {
            display: flex;
            flex-direction: row;
            padding: 7px;
            margin: 10px;
            border-radius: 5px;
            background-color: rgba(135, 206, 250, 0.733);
            box-shadow: 0 0 2px 1px rgba(135, 206, 250, 0.733);
          }
          .photo {
            max-width: 120px;
            max-height: 120px;
            margin-right: 7px;
            border-radius: 5px;
          }
          .description {
            display: flex;
            flex-direction: column;
          }
          .productIdLink {
            width: fit-content;
          }
          .productId {
            color: gray;
            font-size: 14px;
            margin-left: 7px;
          }
          .productId:before {
            content: '#';
          }
          .amount {
            margin-left: 7px;
          }
          .mobileRightFlex {
            display: none;
          }
          .rightFlex {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            flex-grow: 1;
          }
          .price {
            color: green;
            text-shadow: 1px 1px 2px green;
          }
          .remove {
            margin-left: 17px;
            cursor: pointer;
          }

          @media only screen and (max-width: 768px) {
            .mobileRightFlex {
              display: block;
            }
            .rightFlex {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.any.isRequired,
  count: PropTypes.number.isRequired
};

export default CartItem;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCartItem } from '../../../../blanqueriawow/actions/cartItems';

const Offer = props => {
  const { offer } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cartItems);
  const count = cartItems.find(item => item.product._id === offer._id)?.count || 0;

  const handleAddCartItem = offset => {
    const newCount = count + offset;

    if (newCount < 0) return;

    dispatch(setCartItem({ product: offer, count: newCount }));
  };

  return (
    <div className="card">
      <div className="cartIcons">
        <i className="fa fa-minus buttonIcon" onClick={() => handleAddCartItem(-1)} />
        <i className="fa fa-shopping-cart">{count > 0 && <div className="badge">{count}</div>}</i>
        <i className="fa fa-plus buttonIcon" onClick={() => handleAddCartItem(1)} />
      </div>
      <div className="imageContainer">
        <img className="image" src={offer.photo} />
      </div>
      <h4 className="title">{offer.title}</h4>
      <p className="text">{offer.description}</p>
      <style jsx>
        {`
          .card {
            display: flex;
            flex-direction: column;
            width: 350px;
            height: 100%;
            margin: 1em;
            border: 1px solid #1c1c1c;
            border-radius: 1em;
          }
          .title {
            margin: 14px;
          }
          .text {
            flex: 2;
            padding: 14px;
          }
          .imageContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            height: 250px;
          }
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
          .cartIcons {
            display: flex;
            align-items: center;
            margin: 2px 0 0 14px;
          }
          .fa-shopping-cart {
            position: relative;
            overflow: visible;
          }
          .badge {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 100%;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background-color: red;
            box-shadow: 0 0 1px 1px red;
            color: whitesmoke;
            font-size: 18px;
            border-radius: 50px;
          }
        `}
      </style>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
};

export default Offer;

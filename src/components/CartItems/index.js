import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Badge from '../Badge';

const CartItems = ({ items }) => (
  <div className="items">
    {items.map((item, i) => (
      <div key={i} className="item">
        <div className="image">
          <img className="image" src={item.product.photo} alt="imagen maped" />
          <Badge count={item.count} style={{ transform: 'translate(0, 0)', left: 4, top: 4 }} />
        </div>
        <div className="info">
          <h4 className="title">{item.product.title}</h4>
          <p className="description">{item.product.description}</p>
        </div>
      </div>
    ))}
    <style jsx>
      {`
        .items {
        }
        .item {
          position: relative;
          display: flex;
          align-items: center;
          width: fit-content;
          padding: 4px;
          margin: 7px;
          border-radius: 7px;
          background-color: #8804c4aa;
          transition: 0.7s;
        }
        .item:hover {
          background-color: #8804c4;
        }
        .info {
          display: flex;
          flex-direction: column;
        }
        .image {
          position: relative;
          width: 80px;
          flex-grow: 1;
          border-radius: 7px;
        }
        .title {
          margin: 7px;
        }
        .description {
          margin: 7px;
          max-width: 50%;
        }
        @media only screen and (max-width: 768px) {
          .item {
            flex-direction: column;
          }
          .description {
            margin: 7px;
            max-width: 100%;
          }
        }
      `}
    </style>
  </div>
);

CartItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CartItems;

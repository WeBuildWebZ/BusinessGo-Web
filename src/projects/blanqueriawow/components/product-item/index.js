import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { some } from 'lodash';

import { getFinalPrice } from '../../utils/product';
import { toggleFavoriteProduct } from '../../actions/favoriteProducts';

const ProductItem = props => {
  const { product } = props;
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef();
  const favoriteProducts = useSelector(state => state.favoriteProducts);

  isVisibleRef.current = isVisible;

  const isFavourite = some(favoriteProducts, productId => productId === product._id);

  const toggleFav = () => {
    dispatch(toggleFavoriteProduct(product));
  };

  return (
    <div className="product-item" draggable id={props.elementId}>
      <button
        type="button"
        onClick={toggleFav}
        className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}
      >
        <i className="icon-heart" />
      </button>

      <Link href={`/products/${product._id}`}>
        <a href="#">
          <img
            src={product.photo}
            alt="product"
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
          />
          {product.discount && <span className="product__discount">{product.discount}%</span>}
        </a>
      </Link>

      <div className="product__description">
        <h3>{product.name}</h3>
        <div className={`product__price ${product.discount ? 'product__price--discount' : ''}`}>
          <h4>${getFinalPrice(product)}</h4>

          {product.discount && <span>${product.price}</span>}
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  elementId: PropTypes.string,
  product: PropTypes.object.isRequired
};

ProductItem.defaultProps = {
  elementId: ''
};

export default ProductItem;

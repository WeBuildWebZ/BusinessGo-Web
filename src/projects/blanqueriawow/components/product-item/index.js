import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { some } from 'lodash';

import { getFinalPrice } from '../../utils/product';
import { toggleFavoriteProduct } from '../../actions/favoriteProducts';
import { isInViewport } from '../../../../utils/html';

const ProductItem = props => {
  const { product } = props;
  const dispatch = useDispatch();
  const [elementId] = useState(uuid());
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef();
  const favoriteProducts = useSelector(state => state.favoriteProducts);

  isVisibleRef.current = isVisible;

  const isFavourite = some(favoriteProducts, productId => productId === product._id);

  useEffect(() => {
    if (!props.visibilityHookEnabled) return;

    const handleScroll = () => {
      const productElement = document.getElementById(elementId);
      const newIsVisible = isInViewport(productElement);
      if (newIsVisible !== isVisibleRef.current) {
        setIsVisible(newIsVisible);
        if (newIsVisible) props.onVisible();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFav = () => {
    dispatch(toggleFavoriteProduct(product));
  };

  return (
    <div className="product-item" id={elementId} draggable>
      <div className="product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}
        >
          <i className="icon-heart" />
        </button>

        <Link href={`/products/${product._id}`}>
          <a href="#">
            <img src={product.photo} alt="product" />
            {product.discount && <span className="product__discount">{product.discount}%</span>}
          </a>
        </Link>
      </div>

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
  product: PropTypes.object.isRequired,
  visibilityHookEnabled: PropTypes.bool,
  onVisible: PropTypes.func
};

ProductItem.defaultProps = {
  visibilityHookEnabled: false,
  onVisible: () => {}
};

export default ProductItem;

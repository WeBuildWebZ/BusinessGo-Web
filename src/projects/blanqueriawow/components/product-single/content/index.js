import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';

import { setCartItem } from '../../../actions/cartItems';
import { toggleFavoriteProduct } from '../../../actions/favoriteProducts';
import { getFinalPrice } from '../../../utils/product';

const Content = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const favProducts = useSelector(state => state);
  const isFavourite = some(favProducts, productId => productId === product.id);

  const toggleFav = () => {
    dispatch(toggleFavoriteProduct(product));
  };

  const addToCart = () => {
    dispatch(setCartItem({ product, count }));
  };

  const handleChangeCount = amount => {
    const newCount = count + amount;

    if (newCount <= 0) return;

    setCount(newCount);
  };

  return (
    <section className="product-content">
      <div className="product-content__intro" key={1}>
        <h5 className="product__id">
          Product ID:
          <br />
          {product._id}
        </h5>
        {product.discount && <span className="product-on-sale">En oferta</span>}
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>${getFinalPrice(product)}</h4>
          {product.discount && <span>${product.price}</span>}
        </div>
      </div>

      <div className="product-content__filters" key={2}>
        {/* <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor
                key={type.id}
                type="radio"
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div> */}
        {/* <div className="product-filter-item" key={3}>
          <h5>
            Size: <strong>See size table</strong>
          </h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option key={0}>Choose size</option>
                {productsSizes.map((type, i) => (
                  <option value={type.label} key={i + 1}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}
        <div className="product-filter-item" key={4}>
          <h5>Cantidad:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => handleChangeCount(-1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => handleChangeCount(1)} className="quantity-button__btn">
                +
              </button>
            </div>

            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">
              Añadir al carrito
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}
            >
              <i className="icon-heart" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

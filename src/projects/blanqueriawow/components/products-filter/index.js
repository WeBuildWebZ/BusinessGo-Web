import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFilters } from '../../actions/filters';
import { getDistinctProducts } from '../../services/product';
import Spinner from '../../../../components/Spinner';

import Checkbox from './form-builder/checkbox';

const ProductsFilter = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(store => store.filters.categories);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDistinctProducts().then(({ data: distinct }) => {
      setCategories(distinct['value.category']);
      setLoading(false);
    });
  }, [selectedCategories]);

  const handleToggleCategory = category => {
    const isSelected = selectedCategories.includes(category);

    const newSelectedCategories = isSelected
      ? selectedCategories.filter(_category => _category !== category)
      : [...selectedCategories, category];

    dispatch(updateFilters('categories', newSelectedCategories));
  };

  return (
    <form className="products-filter">
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}
      >
        Add Filter <i className="icon-down-open" />
      </button>

      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Categoría</button>
          {loading && <Spinner />}
          <div className="products-filter__block__content">
            {categories.map((category, i) => (
              <Checkbox key={i} label={category} onChange={() => handleToggleCategory(category)} />
            ))}
          </div>
        </div>

        {/* <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
          </div>
        </div> */}

        {/* <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox type="square" key={type.id} ref={register} name="product-size" label={type.label} />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Color</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div> */}

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">
          Apply
        </button>
      </div>
    </form>
  );
};

export default ProductsFilter;

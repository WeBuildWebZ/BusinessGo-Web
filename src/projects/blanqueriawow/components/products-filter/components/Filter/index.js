import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../../../../../components/Spinner';
import { updateFilters } from '../../../../actions/filters';
import { getDistinctProducts } from '../../../../services/product';
import Checkbox from '../../form-builder/checkbox';

const ProductFilter = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(store => store.filters.categories);
  const queryParams = useSelector(store => store.queryParams);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const shouldRedirect = process.browser && window.location.pathname !== '/products';

  useEffect(() => {
    if (!queryParams.category || selectedCategories.length) return;

    dispatch(updateFilters('categories', [queryParams.category]));
  }, []);

  useEffect(() => {
    getDistinctProducts().then(({ data: distinct }) => {
      setCategories(distinct['value.category']);
      setLoading(false);
    });
  }, [selectedCategories]);

  const handleToggleCategory = category => {
    if (shouldRedirect) return (window.location.href = `/products?category=${encodeURIComponent(category)}`);

    const isSelected = selectedCategories.includes(category);

    const newSelectedCategories = isSelected ? [] : [category];

    dispatch(updateFilters('categories', newSelectedCategories));
  };

  return (
    <div className="products-filter__block" style={{ padding: 15 }}>
      <div style={{ marginBottom: 15, color: 'black' }}>Categoría</div>
      {loading && <Spinner />}
      <div className="products-filter__block__content">
        {categories.map((category, i) => {
          const isSelected = selectedCategories.includes(category);

          return (
            <Checkbox
              key={i}
              label={category}
              checked={isSelected}
              onChange={() => handleToggleCategory(category)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;

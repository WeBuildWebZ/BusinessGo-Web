import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ProductItem from '../../product-item';
import { getProducts } from '../../../services/product';

import ProductsLoading from './loading';

const ProductsContent = props => {
  const selectedCategories = useSelector(store => store.filters.categories);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    getProducts(props.pageSize, pageNumber, { category: selectedCategories }).then(
      ({ data: newProducts }) => {
        setProducts(newProducts);
        setLoading(false);
      }
    );
  }, [pageNumber, selectedCategories]);

  return (
    <>
      {loading && <ProductsLoading />}

      {!loading && (
        <section className="products-list">
          {products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </section>
      )}
    </>
  );
};

ProductsContent.propTypes = {
  pageSize: PropTypes.number.isRequired
};

export default ProductsContent;

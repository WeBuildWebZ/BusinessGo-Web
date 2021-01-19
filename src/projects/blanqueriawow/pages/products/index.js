import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/footer';
import ProductsFilter from '../../components/products-filter';
import ProductsContent from '../../components/products-content';
import { setQueryParams } from '../../../../shared/actions/queryParams';

const Products = props => {
  const dispatch = useDispatch();

  dispatch(setQueryParams(props.query));

  return (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

Products.getInitialProps = ({ query }) => ({ query });

Products.propTypes = {
  query: PropTypes.object
};

Products.defaultProps = {
  query: {}
};

export default Products;

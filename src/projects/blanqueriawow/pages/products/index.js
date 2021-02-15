import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/footer';
import ProductsFilter from '../../components/products-filter';
import ProductsContent from '../../components/products-content';
import { setQueryParams } from '../../../../shared/actions/queryParams';

const Products = props => (
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

export default Products;

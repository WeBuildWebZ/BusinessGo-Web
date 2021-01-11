import { useState } from 'react';
import PropTypes from 'prop-types';

import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import { showClientDocument } from '../../../../services/clientDocument';

export async function getServerSideProps({ query }) {
  const { product_id } = query;

  const { data: product } = await showClientDocument(product_id);

  return { props: { product } };
}

const Product = ({ product }) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb sections={[product.name]} />
      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={[product.photo]} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              {product.description && (
                <button
                  type="button"
                  onClick={() => setShowBlock('description')}
                  className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}
                >
                  Descripción
                </button>
              )}
            </div>

            {product.description && <Description product={product} show={showBlock === 'description'} />}
          </div>
        </div>
      </section>
      <div className="product-single-page">{/* <ProductsFeatured /> */}</div>
      <Footer />
    </Layout>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;

import { useState } from 'react';

import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import { server } from '../../utils/server';

export async function getServerSideProps({ query }) {
  const { _id } = query;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product
    }
  };
}

const Product = ({ product }) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb currentPage={product.name} />
      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock('description')}
                className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}
              >
                Description
              </button>
            </div>

            <Description product={product} show={showBlock === 'description'} />
          </div>
        </div>
      </section>
      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import { showClientDocument } from '../../../../services/api/clientDocument';
import Spinner from '../../../../components/Spinner';

export const getServerSideProps = ({ query }) => {
  const { product_id } = query;

  return { props: { product_id } };
};

const Product = ({ product_id }) => {
  const [showBlock, setShowBlock] = useState('description');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    showClientDocument(product_id).then(({ data: givenProduct }) => {
      setProduct(givenProduct);
    });
  }, []);

  return (
    <Layout>
      <Breadcrumb sections={[product?.name || 'Cargando...']} />
      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            {!product && <Spinner />}
            {product && (
              <div>
                <Gallery images={[product.photo]} />
                <Content product={product} />
              </div>
            )}
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              {!product && <Spinner />}
              {product?.description && (
                <button
                  type="button"
                  onClick={() => setShowBlock('description')}
                  className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}
                >
                  Descripción
                </button>
              )}
            </div>

            {product?.description && <Description product={product} show={showBlock === 'description'} />}
          </div>
        </div>
      </section>
      <div className="product-single-page">{/* <ProductsFeatured /> */}</div>
      <Footer />
    </Layout>
  );
};

Product.propTypes = {
  product_id: PropTypes.string.isRequired
};

export default Product;

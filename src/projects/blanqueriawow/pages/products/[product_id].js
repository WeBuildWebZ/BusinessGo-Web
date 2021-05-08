import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import { showItem } from '../../../../services/api/item';
import Spinner from '../../../../components/Spinner';

const Product = () => {
  const [showBlock, setShowBlock] = useState('description');
  const [product, setProduct] = useState(null);
  const query = useSelector(store => store.queryParams);

  useEffect(() => {
    if (!query.product_id) return;
    showItem(query.product_id).then(({ data: givenProduct }) => {
      setProduct(givenProduct);
    });
  }, [query.product_id]);

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
      <div className="product-single-page" />
      <Footer />
    </Layout>
  );
};

export default Product;

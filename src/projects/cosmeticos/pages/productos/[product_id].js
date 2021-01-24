import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../../componentss/navbar';
import Footer from '../../componentss/footer';
import Copyright from '../../componentss/Copyright';
import ProductDetail from '../../componentss/ProductDetail';
import Breadcrumb from '../../../../components/Breadcrumb';
import Spinner from '../../../../components/Spinner';
import { showClientDocument } from '../../../../services/api/clientDocument';

export const getServerSideProps = ({ query }) => {
  const { product_id } = query;

  return { props: { product_id } };
};

const ProductById = ({ product_id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    showClientDocument(product_id).then(({ data: givenProduct }) => {
      setProduct(givenProduct);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb
        sections={[
          { value: 'Productos', link: '/productos' },
          { value: !product ? 'Cargando...' : product.description, link: '#' }
        ]}
      />
      {!product && <Spinner />}
      {product && <ProductDetail product={product} />}
      <Footer />
      <Copyright />
    </>
  );
};

ProductById.propTypes = {
  product_id: PropTypes.string.isRequired
};

export default ProductById;

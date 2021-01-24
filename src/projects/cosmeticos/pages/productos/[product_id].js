import Navbar from '../../componentss/navbar';
import Breadcrumb from '../../../../components/Breadcrumb';

export const getServerSideProps = ({ query }) => {
  const { product_id } = query;

  return { props: { product_id } };
};

const ProductById = ({ product_id }) => {
  console.log('product_id', product_id);

  return (
    <>
      <Navbar />
      <Breadcrumb
        sections={[
          { value: 'Productos', link: '/productos' },
          { value: product_id, link: '#' }
        ]}
      />
    </>
  );
};

export default ProductById;

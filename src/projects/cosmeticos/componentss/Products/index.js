import { useEffect, useState } from 'react';

import Spinner from '../../../../components/Spinner';
import { getClientDocuments } from '../../../../services/api/clientDocument';

import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getClientDocuments('cosmeticos-products', 10, pageNumber).then(({ data: givenProducts }) => {
      setProducts(givenProducts);
    });
  }, []);

  return (
    <div className="products">
      {!products && <Spinner />}
      {products && products.map((product, i) => <Product key={i} product={product} />)}
      <style jsx>
        {`
          .products {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;
            overflow-y: auto;
            padding-top: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Products;

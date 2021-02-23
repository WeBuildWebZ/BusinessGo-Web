import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Stripe from '../../../../components/Stripe';
import { showProduct } from '../../../../services/ecommerce_api/product';

const Product = () => {
  const [product, setProduct] = useState(null);
  const query = useSelector(store => store.queryParams);

  useEffect(() => {
    if (!query.product_id) return;
    showProduct(query.product_id).then(({ data: givenProduct }) => {
      setProduct(givenProduct);
    });
  }, [query]);

  return (
    <>
      {product && (
        <Stripe
          product={product}
          successUrl={`${window.location.origin}/success`}
          cancelUrl={`${window.location.origin}/cancel`}
        />
      )}
    </>
  );
};

export default Product;

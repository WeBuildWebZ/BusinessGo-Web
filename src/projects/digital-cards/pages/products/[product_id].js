import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Stripe from '../../../../components/Stripe';
import { showProduct } from '../../../../services/ecommerce_api/product';

const Product = () => {
  const project = useSelector(store => store.project);
  const query = useSelector(store => store.queryParams);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!query.product_id) return;
    showProduct(query.product_id).then(({ data: givenProduct }) => {
      setProduct(givenProduct);
    });
  }, [query]);

  return (
    <>
      {project && product && (
        <Stripe
          publishableKey={project.ecommerce.stripe.publishable_key}
          product={product}
          successUrl={`${window.location.origin}/success`}
          cancelUrl={`${window.location.origin}/cancel`}
        />
      )}
    </>
  );
};

export default Product;

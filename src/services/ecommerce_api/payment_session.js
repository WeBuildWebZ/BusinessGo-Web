import api from '../../utils/axios';

export const createPaymentSession = (product, success_url, cancel_url) =>
  api.post(`ecommerce_api/products/${encodeURIComponent(product._id)}/payment_sessions`, {
    product_name: product.name,
    success_url,
    cancel_url
  });

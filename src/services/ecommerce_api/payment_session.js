import api from '../../utils/axios';

export const createPaymentSession = product_id =>
  api.post(`ecommerce_api/products/${encodeURIComponent(product_id)}/payment_sessions`);

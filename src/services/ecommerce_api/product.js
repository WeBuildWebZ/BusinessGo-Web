import api from '../../utils/axios';

export const showProduct = product_id => api.get(`ecommerce_api/products/${encodeURIComponent(product_id)}`);

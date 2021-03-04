import api from '../../utils/axios';

export const showProduct = product_id => api.get(`ecommerce_api/products/${encodeURIComponent(product_id)}`);

export const listProducts = (project, category) =>
  api.get(`ecommerce_api/projects/${encodeURIComponent(project.code)}/products`, { params: { category } });

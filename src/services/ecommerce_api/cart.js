import api from '../../utils/axios';

export const createCart = (project_code, data, items) =>
  api.post('ecommerce_api/carts', { project_code, data, items });

import api from '../../utils/axios';

export const getCartModel = project_code =>
  api.get(`ecommerce_api/projects/${encodeURIComponent(project_code)}/cart_models`);

import api from '../../utils/axios';

export const createCart = (project_code, form_code, data, items) =>
  api.post(
    `ecommerce_api/projects/${encodeURIComponent(project_code)}/forms/${encodeURIComponent(form_code)}/carts`,
    { data, items }
  );

export const getCart = _id => api.get(`ecommerce_api/carts/${encodeURIComponent(_id)}`);

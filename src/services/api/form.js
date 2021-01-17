import api from '../../utils/axios';

export const getForm = (project_code, form_code) =>
  api.get(`api/projects/${encodeURIComponent(project_code)}/forms/${encodeURIComponent(form_code)}`);

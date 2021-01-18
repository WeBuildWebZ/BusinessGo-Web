import api from '../../utils/axios';

export const showForm = (project_code, form_code) =>
  api.get(`api/projects/${encodeURIComponent(project_code)}/forms/${encodeURIComponent(form_code)}`);

export const listForms = (project_code, showable) =>
  api.get(`api/projects/${encodeURIComponent(project_code)}/forms`, { params: { showable } });

export const updateForm = (project_code, form) =>
  api.patch(`api/projects/${encodeURIComponent(project_code)}/forms/${encodeURIComponent(form.code)}`, form);

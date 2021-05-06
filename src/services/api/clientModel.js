import api from '../../utils/axios';

export const getClientModels = project =>
  api.get(`api/projects/${encodeURIComponent(project.code)}/client_models`);

export const showClientModel = (project, entity) =>
  api.get(`api/projects/${encodeURIComponent(project.code)}/client_models/${encodeURIComponent(entity)}`);

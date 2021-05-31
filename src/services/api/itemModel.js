import api from '../../utils/axios';

export const listItemModels = project =>
  api.get(`api/projects/${encodeURIComponent(project.code)}/item_models`);

export const showItemModel = (project, entity) =>
  api.get(`api/projects/${encodeURIComponent(project.code)}/item_models/${encodeURIComponent(entity)}`);

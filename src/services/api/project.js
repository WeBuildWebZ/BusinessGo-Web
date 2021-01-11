import api from '../../utils/axios';

export const showProject = _id => api.get(`api/projects/${encodeURIComponent(_id)}`);

export const updateProjectConfiguration = (user, project, configuration) =>
  api.put(`api/user/${encodeURIComponent(user._id)}/projects/${project._id}/configuration`, configuration);

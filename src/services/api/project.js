import api from '../../utils/axios';

export const showProject = code => api.get(`api/projects/${encodeURIComponent(code)}`);

export const updateProjectConfiguration = (user, project, configuration) =>
  api.put(`api/user/${encodeURIComponent(user._id)}/projects/${project._id}/configuration`, configuration);

export const getProjects = user => api.get(`api/users/${encodeURIComponent(user._id)}/projects`);

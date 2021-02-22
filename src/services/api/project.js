import api from '../../utils/axios';

export const showProject = code =>
  fetch(`${process.env.API_URL}/api/projects/${encodeURIComponent(code)}`).then(response => response.json());

export const updateProjectConfiguration = (project, configuration) =>
  api.put(`api/projects/${project._id}/configuration`, configuration);

export const updateProjectWidgets = (project, widgets) =>
  api.put(`api/projects/${project._id}/widgets`, widgets);

export const updateChatbotConfiguration = (project, chatbotConfig) =>
  api.put(`api/projects/${project._id}/chatbot_configuration`, chatbotConfig);

export const getProjects = () => api.get(`api/projects`);

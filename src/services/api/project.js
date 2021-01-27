import api from '../../utils/axios';

export const showProject = code => api.get(`api/projects/${encodeURIComponent(code)}`);

export const updateProjectConfiguration = (project, configuration) =>
  api.put(`api/projects/${project._id}/configuration`, configuration);

export const updateChatbotConfiguration = (project, chatbotConfig) =>
  api.put(`api/projects/${project._id}/chatbot_configuration`, chatbotConfig);

export const getProjects = () => api.get(`api/projects`);

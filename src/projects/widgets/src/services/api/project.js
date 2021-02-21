import api from '../../utils/axios';

export const showProject = (code, search_by_project_token) =>
  fetch(
    `${process.env.REACT_APP_API_URL}/api/projects/${encodeURIComponent(
      code
    )}?search_by_project_token=${search_by_project_token}`
  ).then(response => response.json());

export const updateProjectConfiguration = (project, configuration) =>
  api.put(`api/projects/${project._id}/configuration`, configuration);

export const updateChatbotConfiguration = (project, chatbotConfig) =>
  api.put(`api/projects/${project._id}/chatbot_configuration`, chatbotConfig);

export const getProjects = () => api.get(`api/projects`);

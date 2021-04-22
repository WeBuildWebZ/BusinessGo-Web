import api from '../../utils/axios';

export const showProject = (code, fill_forms = false) =>
  api.get(`api/projects/${encodeURIComponent(code)}`, { params: { fill_forms } });

export const updateProjectConfiguration = (project, configuration) =>
  api.put(`api/projects/${project._id}/configuration`, configuration);

export const updateProjectConfigurationSection = (project, formCode, configurationSection) =>
  api.put(
    `api/projects/${project._id}/configuration_sections/${encodeURIComponent(formCode)}`,
    configurationSection
  );

export const updateProjectWidgets = (project, widgets) =>
  api.put(`api/projects/${project._id}/widgets`, widgets);

export const updateChatbotConfiguration = (project, chatbotConfig) =>
  api.put(`api/projects/${project._id}/chatbot_configuration`, chatbotConfig);

export const getProjects = () => api.get(`api/projects`);

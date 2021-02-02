import api from '../../utils/axios';

export const createWebMessage = (project, text) =>
  api.post(`chatbot_api/projects/${encodeURIComponent(project.code)}/web_messages`, { type: 'text', text });

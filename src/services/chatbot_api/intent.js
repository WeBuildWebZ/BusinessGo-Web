import api from '../../utils/axios';

export const listIntents = (project_code, channel) =>
  api.get(`chatbot_api/projects/${encodeURIComponent(project_code)}/intents`, { params: { channel } });

export const createIntent = (project_code, channel, intent) =>
  api.post(`chatbot_api/projects/${encodeURIComponent(project_code)}/intents`, intent, {
    params: { channel }
  });

export const updateIntent = (project_code, channel, intent) =>
  api.put(`chatbot_api/projects/${encodeURIComponent(project_code)}/intents`, intent, {
    params: { channel }
  });

export const deleteIntent = intent => api.delete(`chatbot_api/intents/${encodeURIComponent(intent._id)}`);

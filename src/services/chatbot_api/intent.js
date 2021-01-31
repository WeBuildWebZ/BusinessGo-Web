import api from '../../utils/axios';

export const listIntents = (project_code, channel) =>
  api.get(`chatbot_api/projects/${encodeURIComponent(project_code)}/intents`, { params: { channel } });

export const createIntent = (project_code, channel, intent) =>
  api.post(`chatbot_api/projects/${encodeURIComponent(project_code)}/intents`, intent, {
    params: { channel }
  });

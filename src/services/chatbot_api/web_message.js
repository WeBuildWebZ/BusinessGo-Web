import api from '../../utils/axios';
import { initChatbotSocket } from '../../shared/sockets/chatbot';
import { conversation_id } from '../../constants';

export const createWebMessage = (project, text) => {
  initChatbotSocket();
  return api.post(`chatbot_api/projects/${encodeURIComponent(project.code)}/web_messages`, {
    conversation_id,
    type: 'text',
    text
  });
};

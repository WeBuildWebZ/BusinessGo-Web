import api from '../../utils/axios';
import { initChatbotSocket } from '../../shared/sockets/chatbot';

export const createWebMessage = async (project, message, respond) => {
  await initChatbotSocket(project.code, message.conversation_id);

  return api.post(`chatbot_api/projects/${encodeURIComponent(project.code)}/web_messages`, message, {
    params: { respond }
  });
};

import { io } from 'socket.io-client';

let currentConversationId;

/** @type {import('socket.io-client').Socket} socket */
let socket;

export const initChatbotSocket = (project_code, conversation_id, officer) =>
  new Promise(resolve => {
    if (officer) officer = { officer: JSON.stringify(officer) };
    if (socket) {
      if (conversation_id === currentConversationId) return resolve();
      socket.disconnect();
    }
    currentConversationId = conversation_id;
    socket = io(`${process.env.API_URL}/chatbot`, {
      transports: ['websocket'],
      query: { project_code, conversation_id, ...officer }
    });

    const onConnect = () => {
      resolve();
      socket.off('connect', onConnect);
    };
    socket.on('connect', onConnect);
  });

export { socket };

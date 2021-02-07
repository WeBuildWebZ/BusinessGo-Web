import { io } from 'socket.io-client';

import { conversation_id } from '../../../constants';

/** @type {import('socket.io-client').Socket} socket */
let socket;

export const initChatbotSocket = () => {
  if (socket) return;
  socket = io(`${process.env.API_URL}/chatbot`, { transports: ['websocket'], query: { conversation_id } });
};

export { socket };

import socketIo from 'socket.io-client';

import env from '../env';

export const socket = socketIo(env.API_URL);

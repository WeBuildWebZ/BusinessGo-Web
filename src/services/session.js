import api from '../utils/axios';

export const getSessions = () => api.get('sessions');

export const createSession = (email, password) => api.post('sessions', { email, password });

export const deleteSessions = () => api.delete('sessions');

import api from '../../utils/axios';

export const getSessions = () => api.get('api/sessions');

export const createSession = (email, password) => api.post('api/sessions', { email, password });

export const deleteSessions = () => api.delete('api/sessions');

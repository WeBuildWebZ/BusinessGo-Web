import api from '../../utils/axios';

export const updateLanguage = code => api.put(`api/language`, { code });

export const showLanguage = () => api.get(`api/language`);

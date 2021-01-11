import api from '../../utils/axios';

export const showProject = _id => api.get(`api/projects/${encodeURIComponent(_id)}`);

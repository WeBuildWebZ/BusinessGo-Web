import axios from 'axios';

axios.defaults.withCredentials = true;

const token = typeof window === 'object' && localStorage.getItem('token');

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    ...(token ? { Authorization: token } : {})
  }
});

api.defaults.headers['Content-Type'] = 'application/json';

export default api;

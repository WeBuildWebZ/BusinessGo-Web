import axios from '../utils/axios';

export const getSessions = () =>
  axios({
    method: 'get',
    url: `${process.env.API_URL}/sessions`
  });

export const createSession = (email, password) =>
  axios({
    url: `${process.env.API_URL}/sessions`,
    method: 'post',
    data: { email, password }
  });

export const deleteSessions = () =>
  axios({
    method: 'delete',
    url: `${process.env.API_URL}/sessions`
  });

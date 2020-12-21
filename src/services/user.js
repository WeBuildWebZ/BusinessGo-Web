import axios from '../utils/axios';

export const registerUser = (name, surname, phone, email, password) =>
  axios({
    method: 'post',
    url: `${process.env.API_URL}/users`,
    data: { name, surname, phone, email, password }
  });

export const clearEmailNotification = () =>
  axios({
    method: 'delete',
    url: `${process.env.API_URL}/email_confirmation_notification`
  });

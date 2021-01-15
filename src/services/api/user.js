import { v4 as uuid } from 'uuid';

import api from '../../utils/axios';

export const registerUser = (name, surname, phone, email, password) =>
  api.post('api/users', { name, surname, phone, email, password });

export const clearEmailNotification = () => api.delete('api/email_confirmation_notification');

export const createDevelopmentRequest = (userId, name, summary, checklist_items) =>
  api.post(`api/users/${encodeURIComponent(userId)}/development_requests`, {
    name: name || uuid(),
    summary,
    checklist_items
  });

export const getClientModels = (user, project) =>
  api.get(
    `api/users/${encodeURIComponent(user._id)}/projects/${encodeURIComponent(project.code)}/client_models`
  );

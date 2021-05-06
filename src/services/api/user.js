import { v4 as uuid } from 'uuid';

import api from '../../utils/axios';

export const createUserWithEmail = (project, email_confirmation_redirect, email, password, data) =>
  api.post(`api/projects/${encodeURIComponent(project.code)}/users`, {
    login_type: 'email',
    email_confirmation_redirect,
    email,
    password,
    data
  });

export const clearEmailNotification = () => api.delete('api/email_confirmation_notification');

export const createDevelopmentRequest = (userId, name, summary, checklist_items) =>
  api.post(`api/users/${encodeURIComponent(userId)}/development_requests`, {
    name: name || uuid(),
    summary,
    checklist_items
  });

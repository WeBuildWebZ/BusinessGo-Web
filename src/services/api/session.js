import * as Sentry from '@sentry/react';

import api from '../../utils/axios';

export const getSessions = () => api.get('api/sessions');

export const createSession = (email, password) =>
  api.post('api/sessions', { email, password }).then(response => {
    Sentry.setExtra('sessions', response.data);

    return response;
  });

export const deleteSessions = () => api.delete('api/sessions');

import * as Sentry from '@sentry/react';

import api from '../../utils/axios';

export const getSessions = () => api.get('api/sessions');

export const createSession = (project_code, email, password) =>
  api
    .post(`api/projects/${encodeURIComponent(project_code)}/sessions`, { email, password })
    .then(response => {
      Sentry.setExtra('sessions', response.data);

      return response;
    });

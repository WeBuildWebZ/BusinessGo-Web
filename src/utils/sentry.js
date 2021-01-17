import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

export const initSentry = dsn => {
  if (!process.browser || process.env.NODE_ENV === 'development') return;

  Sentry.init({
    dsn,
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0
  });
};

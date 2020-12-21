import React from 'react';

export const getLanguage = language_code =>
  ({
    es: {
      justNow: 'Recién',
      emailConfirmed: { title: 'Email confirmado', message: 'Gracias por confirmarnos tu email!' }
    },
    en: {
      justNow: 'Just now',
      emailConfirmed: { title: 'Email confirmed', message: 'Thanks for confirming us your email!' }
    }
  }[language_code]);

const Component = () => <></>;

export default Component;

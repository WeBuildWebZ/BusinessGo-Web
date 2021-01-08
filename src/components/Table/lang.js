import React from 'react';

export const getLanguage = language_code =>
  ({
    es: {
      edit: 'Editar',
      delete: 'Borrar'
    },
    en: {
      edit: 'Edit',
      delete: 'Delete'
    }
  }[language_code]);

const Component = () => <></>;

export default Component;

export const getLanguage = language_code =>
  ({
    es: {
      edit: 'Editar'
    },
    en: {
      edit: 'Edit'
    }
  }[language_code]);

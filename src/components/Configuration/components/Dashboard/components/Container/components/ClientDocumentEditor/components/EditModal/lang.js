export const getLanguage = language_code =>
  ({
    es: {
      edit: 'Editar',
      create: 'Crear'
    },
    en: {
      edit: 'Edit',
      create: 'Create'
    }
  }[language_code]);

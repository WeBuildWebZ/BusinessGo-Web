export const getLanguage = language_code =>
  ({
    es: {
      add: 'Agregar',
      deleteMessage: field => `Desea borrar ${field.enum_name}?`
    },
    en: {
      add: 'Add',
      deleteMessage: field => `Delete ${field.enum_name}?`
    }
  }[language_code]);

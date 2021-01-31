export const getLanguage = language_code =>
  ({
    es: {
      fieldsFor: 'Campos asociados a',
      save: 'Guardar'
    },
    en: {
      fieldsFor: 'Fields associated with',
      save: 'Save'
    }
  }[language_code]);

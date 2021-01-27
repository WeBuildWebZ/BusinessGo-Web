export const getLanguage = language_code =>
  ({
    es: {
      save: 'Guardar Cambios'
    },
    en: {
      save: 'Save Changes'
    }
  }[language_code]);

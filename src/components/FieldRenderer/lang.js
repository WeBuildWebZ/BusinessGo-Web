export const getLanguage = language_code =>
  ({
    es: {
      save: 'Guardar Cambios',
      back: 'Volver'
    },
    en: {
      save: 'Save Changes',
      back: 'Back'
    }
  }[language_code]);

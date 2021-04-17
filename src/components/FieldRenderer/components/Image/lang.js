export const getLanguage = language_code =>
  ({
    es: {
      incorrectType: { title: 'Error', message: 'Tipo de archivo incorrecto' }
    },
    en: {
      incorrectType: { title: 'Error', message: 'Incorrect file type' }
    }
  }[language_code]);

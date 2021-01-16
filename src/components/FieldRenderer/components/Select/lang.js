export const getLanguage = language_code =>
  ({
    es: {
      select: 'Seleccionar'
    },
    en: {
      select: 'Select'
    }
  }[language_code]);

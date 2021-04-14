export const getLanguage = langCode =>
  ({
    es: {
      select: 'Selecciona'
    },
    en: {
      select: 'Select'
    }
  }[langCode]);

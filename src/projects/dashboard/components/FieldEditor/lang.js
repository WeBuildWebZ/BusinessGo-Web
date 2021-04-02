export const getLanguage = langCode =>
  ({
    es: {
      step: 'Paso'
    },
    en: {
      step: 'Step'
    }
  }[langCode]);

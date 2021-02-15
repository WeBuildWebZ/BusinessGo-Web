export const getLanguage = langCode =>
  ({
    es: {
      placeholder: 'BUSCAR'
    },
    en: {
      placeholder: 'SEARCH'
    }
  }[langCode]);

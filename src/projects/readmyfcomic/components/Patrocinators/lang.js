export const getLanguage = langCode =>
  ({
    es: {
      patrocinators: 'NUESTROS PATROCINADORES'
    },
    en: {
      patrocinators: 'OUR PATROCINATORS'
    }
  }[langCode]);

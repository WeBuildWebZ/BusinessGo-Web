export const getLanguage = language_code =>
  ({
    es: {
      configuration: 'Configuración'
    },
    en: {
      configuration: 'Configuration'
    }
  }[language_code]);

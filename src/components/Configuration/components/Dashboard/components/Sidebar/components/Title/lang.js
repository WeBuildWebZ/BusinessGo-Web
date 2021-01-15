const getLanguage = language_code =>
  ({
    es: {
      configuration: 'Configuración',
      tables: 'Tablas'
    },
    en: {
      configuration: 'Configuration',
      tables: 'Tables'
    }
  }[language_code]);

export default getLanguage;

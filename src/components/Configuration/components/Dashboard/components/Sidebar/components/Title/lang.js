const getLanguage = language_code =>
  ({
    es: {
      configuration: 'Configuración',
      tables: 'Tablas',
      forms: 'Formularios'
    },
    en: {
      configuration: 'Configuration',
      tables: 'Tables',
      forms: 'Forms'
    }
  }[language_code]);

export default getLanguage;

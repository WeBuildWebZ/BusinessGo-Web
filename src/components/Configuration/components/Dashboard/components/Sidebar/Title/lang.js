const getLanguage = language_code =>
  ({
    es: {
      configuration: 'Configuración',
      tables: 'Tablas',
      forms: 'Formularios',
      chatbots: 'Chatbots',
      widgets: 'Widgets'
    },
    en: {
      configuration: 'Configuration',
      tables: 'Tables',
      forms: 'Forms',
      chatbots: 'Chatbots',
      widgets: 'Widgets'
    }
  }[language_code]);

export default getLanguage;

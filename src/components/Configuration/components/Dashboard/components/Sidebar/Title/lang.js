const getLanguage = language_code =>
  ({
    es: {
      configuration: 'Configuración',
      tables: 'Tablas',
      forms: 'Formularios',
      chatbots: 'Chatbots'
    },
    en: {
      configuration: 'Configuration',
      tables: 'Tables',
      forms: 'Forms',
      chatbots: 'Chatbots'
    }
  }[language_code]);

export default getLanguage;

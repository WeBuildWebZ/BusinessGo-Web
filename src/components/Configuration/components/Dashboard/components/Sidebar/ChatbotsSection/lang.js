export const getLanguage = language_code =>
  ({
    es: {
      title: channel => `Configurar Chatbot en canal ${channel}`,
      chatbotsNotEnabled: 'Los chatbots no están habilitados para este proyecto',
      conversations: 'Conversaciones',
      intents: 'Intenciones'
    },
    en: {
      title: channel => `Configur Chatbot on channel ${channel}`,
      chatbotsNotEnabled: 'Los chatbots no están habilitados para este proyecto',
      conversations: 'Conversations',
      intents: 'Intents'
    }
  }[language_code]);

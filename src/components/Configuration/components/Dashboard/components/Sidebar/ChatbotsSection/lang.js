export const getLanguage = language_code =>
  ({
    es: {
      title: channel => `Configurar Chatbot en canal ${channel}`,
      chatbotsNotEnabled: 'Los chatbots no están habilitados para este proyecto'
    },
    en: {
      title: channel => `Configur Chatbot on channel ${channel}`,
      chatbotsNotEnabled: 'Los chatbots no están habilitados para este proyecto'
    }
  }[language_code]);

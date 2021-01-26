export const getLanguage = language_code =>
  ({
    es: {
      chatbotConfig: channel => `Chatbot: canal ${channel}`
    },
    en: {
      chatbotConfig: channel => `Chatbot: channel ${channel}`
    }
  }[language_code]);

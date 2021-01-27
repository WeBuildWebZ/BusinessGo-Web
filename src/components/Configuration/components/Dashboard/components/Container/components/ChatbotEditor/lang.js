export const getLanguage = language_code =>
  ({
    es: {
      chatbotConfig: channel => `Chatbot: canal ${channel}`,
      authConfig: 'Autenticación',
      basicConfig: 'Configuración Básica',
      saveChanges: 'Guardar'
    },
    en: {
      chatbotConfig: channel => `Chatbot: channel ${channel}`,
      authConfig: 'Authentication',
      basicConfig: 'Basic Configuration',
      saveChanges: 'Save'
    }
  }[language_code]);

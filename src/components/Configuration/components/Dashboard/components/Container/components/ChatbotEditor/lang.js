export const getLanguage = language_code =>
  ({
    es: {
      chatbotConfig: channel => `Chatbot: canal ${channel}`,
      authConfig: 'Autenticación',
      basicConfig: 'Configuración Básica',
      saveChanges: 'Guardar',
      configUpdated: {
        title: 'Configuración Actualizada',
        message: channel => `La configuración del chatbot en el canal ${channel} fue actualizada`
      }
    },
    en: {
      chatbotConfig: channel => `Chatbot: channel ${channel}`,
      authConfig: 'Authentication',
      basicConfig: 'Basic Configuration',
      saveChanges: 'Save',
      configUpdated: {
        title: 'Configuration Updated',
        message: channel => `Configuration for chatbot on channel ${channel} was updated`
      }
    }
  }[language_code]);

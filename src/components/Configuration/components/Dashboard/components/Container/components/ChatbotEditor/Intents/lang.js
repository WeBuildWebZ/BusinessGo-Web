export const getLanguage = language_code =>
  ({
    es: {
      title: channel => `Intenciones para canal ${channel}`,
      createIntent: 'Crear Intención'
    },
    en: {
      title: channel => `Intents for channel ${channel}`,
      createIntent: 'Create Intent'
    }
  }[language_code]);

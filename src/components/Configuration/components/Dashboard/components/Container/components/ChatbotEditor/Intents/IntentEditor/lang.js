export const getLanguage = language_code =>
  ({
    es: {
      title: channel => `Crear intención para canal ${channel}`,
      createIntent: channel => `Crear intención para canal ${channel}`,
      editIntent: channel => `Editar intención para canal ${channel}`,
      back: 'Volver'
    },
    en: {
      title: channel => `Create intent for channel ${channel}`,
      createIntent: channel => `Create intent for channel ${channel}`,
      editIntent: channel => `Edit intent for channel ${channel}`,
      back: 'Go Back'
    }
  }[language_code]);

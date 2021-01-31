export const getLanguage = language_code =>
  ({
    es: {
      title: channel => `Intenciones para canal ${channel}`,
      createIntent: 'Crear Intención',
      intentCreated: {
        title: 'Intención Creada',
        message: intent => `La intención "${intent.name}" fue creada correctamente!`
      }
    },
    en: {
      title: channel => `Intents for channel ${channel}`,
      createIntent: 'Create Intent',
      intentCreated: {
        title: 'Intent Created',
        message: intent => `Intent "${intent.name}" was created successfully!`
      }
    }
  }[language_code]);

export const getLanguage = language_code =>
  ({
    es: {
      configuration: 'Configuración',
      configurationUpdated: {
        title: 'Configuración actualizada',
        message: 'la configuración fue actualizada'
      }
    },
    en: {
      configuration: 'Configuration',
      configurationUpdated: { title: 'Configuration updated', message: 'The configuration was updated' }
    }
  }[language_code]);

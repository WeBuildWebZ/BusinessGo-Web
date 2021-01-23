export const getLanguage = language_code =>
  ({
    es: {
      notifications_enabled: 'Notificaciones habilitadas',
      addEmail: 'Agregar Email'
    },
    en: {
      notifications_enabled: 'Notifications enabled',
      addEmail: 'Add Email'
    }
  }[language_code]);

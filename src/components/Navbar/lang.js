export const getLanguage = language_code =>
  ({
    es: {
      goToPanel: 'Ir al Panel',
      logout: 'Salir'
    },
    en: {
      goToPanel: 'Go to Panel',
      logout: 'Logout'
    }
  }[language_code]);

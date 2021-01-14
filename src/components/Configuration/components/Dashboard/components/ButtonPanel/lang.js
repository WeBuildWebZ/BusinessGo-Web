export const getLanguage = language_code =>
  ({
    es: {
      logout: 'Cerrar Sesión'
    },
    en: {
      logout: 'Logout'
    }
  }[language_code]);

export const getLanguage = langCode =>
  ({
    es: {
      logout: 'Cerrar Sesión'
    },
    en: {
      logout: 'Logout'
    }
  }[langCode]);

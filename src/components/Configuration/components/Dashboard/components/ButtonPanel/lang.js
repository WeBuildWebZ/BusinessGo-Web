export const getLanguage = language_code =>
  ({
    es: {
      logout: 'Cerrar Sesión',
      changeLanguage: 'Cambiar Lenguaje'
    },
    en: {
      logout: 'Logout',
      changeLanguage: 'Change Language'
    }
  }[language_code]);

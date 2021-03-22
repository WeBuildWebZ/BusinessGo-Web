export const getLanguage = langCode =>
  ({
    es: {
      login: 'Iniciar Sesión'
    },
    en: {
      login: 'Log In'
    }
  }[langCode]);

export const getLanguage = langCode =>
  ({
    es: {
      username: 'Usuario',
      password: 'Contraseña'
    },
    en: {
      username: 'User',
      password: 'Password'
    }
  }[langCode]);

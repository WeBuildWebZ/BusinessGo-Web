export const getLanguage = langCode =>
  ({
    es: {
      alerts: {
        logout: {
          title: 'Logout OK',
          type: 'info',
          message: 'Has cerrado sesión correctamente!'
        }
      }
    },
    en: {
      alerts: {
        logout: {
          title: 'Logout OK',
          type: 'info',
          message: 'Logged out correctly!'
        }
      }
    }
  }[langCode]);

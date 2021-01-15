export const getLanguage = language_code =>
  ({
    es: {
      title: 'Login',
      username: 'Nombre de usuario',
      password: 'Contraseña',
      submit: 'Iniciar Sesión',
      errors: {
        internal_server_error: { title: 'Error interno', message: 'Hubo un error al iniciar sesión' },
        not_authenticated: {
          title: 'Usuario o contraseña incorrectos',
          message: 'Verifica tu usuario y contarseña y vuelve a intentar'
        }
      }
    },
    en: {
      title: 'Login',
      username: 'Username',
      password: 'Password',
      submit: 'Login',
      errors: {
        internal_server_error: { title: 'Internal error', message: 'There was an error trying to log in' },
        not_authenticated: {
          title: 'Invalid username or password',
          message: 'Check your username and password and try again'
        }
      }
    }
  }[language_code]);

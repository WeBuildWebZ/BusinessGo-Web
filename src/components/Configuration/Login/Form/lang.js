export const getLanguage = language_code =>
  ({
    es: {
      title: 'Login',
      username: 'Nombre de usuario',
      password: 'Contraseña',
      submit: 'Iniciar Sesión',
      errors: {
        internal_server_error: { title: 'Error interno', message: 'Hubo un error al iniciar sesión' },
        connection_error: {
          title: 'Problema de conexión',
          message: 'Lo sentimos, hubo un problema de conexión, por favor intenta más tarde.'
        },
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
        connection_error: {
          title: 'Connection problem',
          message: "We're sorry, there was a connectoin problem, please try again later."
        },
        not_authenticated: {
          title: 'Invalid username or password',
          message: 'Check your username and password and try again'
        }
      }
    }
  }[language_code]);

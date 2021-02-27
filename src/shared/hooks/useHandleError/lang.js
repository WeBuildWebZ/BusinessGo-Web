export const getLanguage = langCode =>
  ({
    es: {
      alerts: {
        invalid_credentials: {
          title: 'Credenciales Inválidas',
          type: 'error',
          message: 'El usuario o la contrasña son incorrectos. Por favor, intenta de nuevo'
        },
        user_already_exists: {
          title: 'El usuario ya existe',
          type: 'error',
          message: 'Ya existe un usuario con ese email'
        },
        internal_server_error: {
          title: 'Error Interno',
          type: 'error',
          message: 'Hubo un error al realizar la consulta'
        },
        request_not_sent: {
          title: 'Error de Conexión',
          type: 'error',
          message: 'No pudimos realizar la consulta por una falla de conexión con el servidor'
        },
        invalid_parameters: {
          title: 'Datos inválidos',
          type: 'error',
          message: 'Hay errores en el formulario ingresado'
        }
      }
    },
    en: {
      alerts: {
        invalid_credentials: {
          title: 'Invalid Credentials',
          type: 'error',
          message: 'Incorrect email or password. Please try again'
        },
        user_already_exists: {
          title: 'User already exists',
          type: 'error',
          message: 'There is already a user with that email'
        },
        internal_server_error: {
          title: 'Internal Server Error',
          type: 'error',
          message: 'There was an error'
        },
        request_not_sent: {
          title: 'Conection error',
          type: 'error',
          message: "We couldn't perform the operation due to a server conection error"
        },
        invalid_parameters: {
          title: 'Invalid data',
          type: 'error',
          message: 'There are errors in the provided form'
        }
      }
    }
  }[langCode]);

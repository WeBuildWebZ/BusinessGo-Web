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
          title: 'Datos Inválidos',
          type: 'error',
          message: 'Hay errores en el formulario ingresado'
        },
        not_authenticated: {
          title: 'No Autenticado',
          type: 'error',
          message: 'Necesitas estar logueado para realizar la acción'
        },
        not_logged_in: {
          title: 'No estás logueado',
          type: 'error',
          message: 'Necesitas estar logueado para realizar la acción'
        },
        not_authorized: {
          title: 'No Authorized',
          type: 'error',
          message: 'No estás autorizado para realizar la acción'
        },
        not_found: {
          title: 'No Encontrado',
          type: 'error',
          message: 'No se encontró el recurso solicitado'
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
          title: 'Conection Error',
          type: 'error',
          message: "We couldn't perform the operation due to a server conection error"
        },
        invalid_parameters: {
          title: 'Invalid Data',
          type: 'error',
          message: 'There are errors in the provided form'
        },
        not_authenticated: {
          title: 'Not Authenticated',
          type: 'error',
          message: 'You need to be logged in in order to perform that action'
        },
        not_logged_in: {
          title: 'Not Logged in',
          type: 'error',
          message: 'You need to be logged in in order to perform that action'
        },
        not_authorized: {
          title: 'No Authorized',
          type: 'error',
          message: "You're not authorized to perform that action"
        },
        not_found: {
          title: 'Not Found',
          type: 'error',
          message: 'The requested resource was not found'
        }
      }
    }
  }[langCode]);

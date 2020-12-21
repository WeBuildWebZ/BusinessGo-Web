export const getLanguage = language_code =>
  ({
    es: {
      title: 'Registro',
      name: 'Nombre',
      surname: 'Apellido',
      phone: 'Teléfono',
      email: 'Email',
      emailMessage: 'No vamos a compartir tu mail con nadie más',
      password: 'Contraseña',
      submit: 'Crear Cuenta!',
      errors: {
        email_already_used: {
          title: 'Error al crear la cuenta',
          message: 'El email ingresado ya está siendo utilizado'
        }
      }
    },
    en: {
      title: 'Register',
      name: 'Name',
      surname: 'Surname',
      phone: 'Phone',
      email: 'Email',
      emailMessage: "We'll never share your email with anyone else.",
      password: 'Password',
      submit: 'Create Account!',
      errors: {
        email_already_used: {
          title: 'Error creating the account',
          message: 'The email is already being used'
        }
      }
    }
  }[language_code]);

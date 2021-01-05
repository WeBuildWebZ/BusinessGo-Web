export const getLanguage = language_code =>
  ({
    es: {
      title: 'Login',
      username: 'Nombre de usuario',
      password: 'Contraseña',
      submit: 'Iniciar Sesión'
    },
    en: {
      title: 'Login',
      username: 'Username',
      password: 'Password',
      submit: 'Login'
    }
  }[language_code]);

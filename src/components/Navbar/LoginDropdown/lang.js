export const getLanguage = language_code =>
  ({
    es: {
      title: 'Login',
      email: 'Email',
      password: 'Contraseña',
      submit: 'Iniciar Sesión'
    },
    en: {
      title: 'Login',
      email: 'Email',
      password: 'Password',
      submit: 'Login'
    }
  }[language_code]);

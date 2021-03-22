export const getLanguage = langCode =>
  ({
    es: {
      loginOk: { title: 'Login Satisfactorio', message: 'Has iniciado sesión correctamente!' }
    },
    en: {
      loginOk: { title: 'Login Successful', message: 'You have successfully logged in!' }
    }
  }[langCode]);

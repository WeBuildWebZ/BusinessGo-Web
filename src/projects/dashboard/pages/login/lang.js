export const getLanguage = langCode =>
  ({
    es: {
      username: 'Usuario',
      password: 'Contraseña',
      login: 'Iniciar Sesión'
    },
    en: {
      username: 'User',
      password: 'Password',
      login: 'Log In'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

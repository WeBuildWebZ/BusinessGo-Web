export const getLanguage = language_code =>
  ({
    es: {
      hello: 'Hola',
      theseAreTheProjects: 'Estos son los proyectos a los que tienes acceso'
    },
    en: {
      hello: 'Hi',
      theseAreTheProjects: 'These are the projects you have access to'
    }
  }[language_code]);

const Component = () => <div />;

export default Component;

export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto'
    },
    en: {
      project: 'Project'
    }
  }[language_code]);

const Component = () => <div />;

export default Component;

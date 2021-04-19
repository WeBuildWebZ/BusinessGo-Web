export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto',
      configuration: 'Configuración'
    },
    en: {
      project: 'Project',
      configuration: 'Configuration'
    }
  }[language_code]);

const Component = () => <div />;

export default Component;

export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto',
      configuration: 'Configuración',
      siteBuilder: 'Constructor de Sitio Web (Próximamente)',
      formEditor: 'Editor de Formularios'
    },
    en: {
      project: 'Project',
      configuration: 'Configuration',
      siteBuilder: 'Website Builder (Coming soon)',
      formEditor: 'Form Editor'
    }
  }[language_code]);

const Component = () => <div />;

export default Component;

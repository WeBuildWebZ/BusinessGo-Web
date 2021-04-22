export const getLanguage = language_code =>
  ({
    es: {
      project: 'Proyecto',
      configuration: 'Configuración',
      configurationUpdated: {
        title: 'Configuración actualizada',
        message: 'la configuración fue actualizada'
      }
    },
    en: {
      project: 'Project',
      configuration: 'Configuration',
      configurationUpdated: { title: 'Configuration updated', message: 'The configuration was updated' }
    }
  }[language_code]);

const Component = () => <div />;

export default Component;

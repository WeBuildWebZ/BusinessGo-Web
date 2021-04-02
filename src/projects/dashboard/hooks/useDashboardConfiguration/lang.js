export const getLanguage = langCode =>
  ({
    es: {
      dashboard: 'Dashboard',
      basic_config: 'Configuración Básica',
      content_editor: 'Editor de Contenido'
    },
    en: {
      dashboard: 'Dashboard',
      basic_config: 'Basic Configuration',
      content_editor: 'Content Editor'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

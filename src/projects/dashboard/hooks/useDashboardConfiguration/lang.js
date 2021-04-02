export const getLanguage = langCode =>
  ({
    es: {
      dashboard: 'Dashboard',
      forms_editor: 'Editor de formularios',
      content_editor: 'Editor de Contenido'
    },
    en: {
      dashboard: 'Dashboard',
      forms_editor: 'Form Editor',
      content_editor: 'Content Editor'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

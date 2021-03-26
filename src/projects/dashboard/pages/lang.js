export const getLanguage = langCode =>
  ({
    es: {
      breadcrumbItems: {
        '/': [{ text: 'Dashboard' }],
        '/content_editor': [{ text: 'Dashboard', link: '/' }, { text: 'Editor de Contenido' }]
      },
      sidebar: {
        basic_config: 'Configuración Básica',
        content_editor: 'Editor de Contenido'
      }
    },
    en: {
      breadcrumbItems: {
        '/': [{ text: 'Dashboard' }],
        '/content_editor': [{ text: 'Dashboard', link: '/' }, { text: 'Content Editor' }]
      },
      sidebar: {
        basic_config: 'Basic Configuration',
        content_editor: 'Content Editor'
      }
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

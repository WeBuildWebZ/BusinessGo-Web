export const getLanguage = langCode =>
  ({
    es: {
      breadcrumbItems: {
        '/': [{ text: 'Dashboard' }],
        '/content_editor': [{ text: 'Dashboard', link: '/' }, { text: 'Editor de Contenido' }]
      }
    },
    en: {
      breadcrumbItems: {
        '/': [{ text: 'Dashboard' }],
        '/content_editor': [{ text: 'Dashboard', link: '/' }, { text: 'Content Editor' }]
      }
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

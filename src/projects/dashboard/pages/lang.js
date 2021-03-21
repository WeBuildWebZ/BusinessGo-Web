export const getLanguage = langCode =>
  ({
    es: {
      breadcrumbItems: {
        '/': [{ text: 'Tarjetas', link: '/dashboard/cards' }, { text: 'Dashboard' }]
      }
    },
    en: {
      breadcrumbItems: {
        '/': [{ text: 'Cards', link: '/dashboard/cards' }, { text: 'Dashboard' }]
      }
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

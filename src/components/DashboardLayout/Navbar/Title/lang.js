export const getLanguage = langCode =>
  ({
    es: {
      breadcrumbItems: {
        '/dashboard': [{ text: 'Tarjetas', link: '/dashboard/cards' }, { text: 'Dashboard' }]
      }
    },
    en: {
      breadcrumbItems: {
        '/dashboard': [{ text: 'Cards', link: '/dashboard/cards' }, { text: 'Dashboard' }]
      }
    }
  }[langCode]);

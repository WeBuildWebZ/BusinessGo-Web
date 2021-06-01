export const getLanguage = langCode =>
  ({
    es: {
      breadcrumbItems: {
        '/dashboard/cards/new': [
          { text: 'Tarjetas', link: '/dashboard/cards' },
          { text: 'Crear Nueva Tarjeta' }
        ]
      }
    },
    en: {
      breadcrumbItems: {
        '/dashboard/cards/new': [{ text: 'Cards', link: '/dashboard/cards' }, { text: 'Create New Card' }]
      }
    }
  }[langCode]);

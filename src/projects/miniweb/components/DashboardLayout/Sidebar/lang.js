export const getLanguage = langCode =>
  ({
    es: {
      options: 'Opciones',
      cards: 'Tarjetas'
    },
    en: {
      options: 'Options',
      cards: 'Cards'
    }
  }[langCode]);

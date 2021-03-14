export const getLanguage = langCode =>
  ({
    es: {
      topN: 'Top 10 Comics',
      discoverMoreComics: 'Descubre más cómics'
    },
    en: {
      topN: 'Top 10 Comics',
      discoverMoreComics: 'Discover more comics!'
    }
  }[langCode]);

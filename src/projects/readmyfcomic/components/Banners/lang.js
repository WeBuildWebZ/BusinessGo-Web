export const getLanguage = langCode =>
  ({
    es: {
      topN: 'TOP 10 COMICS',
      hotChapters: 'CAPÍTULOS RELEVANTES',
      newComics: 'NUEVOS COMICS',
      discoverMoreComics: 'Descubre más cómics'
    },
    en: {
      topN: 'TOP 10 COMICS',
      hotChapters: 'HOT CHAPTERS',
      newComics: 'NEW COMICS',
      discoverMoreComics: 'Discover more comics!'
    }
  }[langCode]);

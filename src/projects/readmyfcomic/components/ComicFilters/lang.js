export const getLanguage = langCode =>
  ({
    es: {
      categories: 'CATEGORÍAS PRINCIPALES',
      filter: 'FILTRO',
      searchByTags: 'BUSCAR POR ETIQUETAS'
    },
    en: {
      categories: 'MAIN CATEGORIES',
      filter: 'FILTER',
      searchByTags: 'SEARCH BY TAGS'
    }
  }[langCode]);

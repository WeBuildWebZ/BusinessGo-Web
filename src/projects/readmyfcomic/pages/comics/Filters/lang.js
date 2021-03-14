export const getLanguage = langCode =>
  ({
    es: {
      categories: 'CATEGORÍAS PRINCIPALES',
      filter: 'FILTRO'
    },
    en: {
      categories: 'MAIN CATEGORIES',
      filter: 'FILTER'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

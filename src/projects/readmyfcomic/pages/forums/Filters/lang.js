export const getLanguage = langCode =>
  ({
    es: {
      searchByTags: 'BUSCAR POR ETIQUETAS'
    },
    en: {
      searchByTags: 'SEARCH BY TAGS'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

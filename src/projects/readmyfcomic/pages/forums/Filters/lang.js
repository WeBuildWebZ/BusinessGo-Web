export const getLanguage = langCode =>
  ({
    es: {
      searchByName: 'BUSCAR POR NOMBRE'
    },
    en: {
      searchByName: 'SEARCH BY NAME'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

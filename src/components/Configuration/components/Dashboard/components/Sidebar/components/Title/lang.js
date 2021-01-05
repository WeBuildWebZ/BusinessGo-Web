const getLanguage = language_code =>
  ({
    es: {
      tables: 'Tablas'
    },
    en: {
      tables: 'Tables'
    }
  }[language_code]);

export default getLanguage;

export const getLanguage = language_code =>
  ({
    es: {
      noTables: 'No hay tablas'
    },
    en: {
      noTables: 'There are no tables'
    }
  }[language_code]);

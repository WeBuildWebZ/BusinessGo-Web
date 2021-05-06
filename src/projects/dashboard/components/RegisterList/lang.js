export const getLanguage = language_code =>
  ({
    es: {
      rowsPerPage: 'Registros por página',
      actions: 'Acciones'
    },
    en: {
      rowsPerPage: 'Rows per page',
      actions: 'Actions'
    }
  }[language_code]);

export const getLanguage = language_code =>
  ({
    es: {
      noTables: 'No hay formularios',
      editForm: 'Editar',
      showResponses: 'Ver Respuestas'
    },
    en: {
      noTables: 'There are no forms',
      editForm: 'Editar',
      showResponses: 'Show Responses'
    }
  }[language_code]);

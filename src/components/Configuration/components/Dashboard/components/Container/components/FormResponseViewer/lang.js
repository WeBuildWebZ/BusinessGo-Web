export const getLanguage = language_code =>
  ({
    es: {
      responsesForForm: 'Respuestas para el Formulario'
    },
    en: {
      responsesForForm: 'Responses for Form'
    }
  }[language_code]);

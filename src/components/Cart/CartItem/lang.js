export const getLanguage = language_code =>
  ({
    es: {
      amount: 'Cantidad'
    },
    en: {
      amount: 'Amount'
    }
  }[language_code]);

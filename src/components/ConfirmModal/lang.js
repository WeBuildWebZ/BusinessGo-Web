export const getLanguage = language_code =>
  ({
    es: {
      confirm: 'Confirmar',
      cancel: 'Cancelar'
    },
    en: {
      confirm: 'Confirm',
      cancel: 'Cancel'
    }
  }[language_code]);

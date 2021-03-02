export const getLanguage = langCode =>
  ({
    es: {
      data: 'Datos',
      preview: 'Vista Previa'
    },
    en: {
      data: 'Data',
      preview: 'Preview'
    }
  }[langCode]);

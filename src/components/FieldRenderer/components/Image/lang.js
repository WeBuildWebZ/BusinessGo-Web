export const getLanguage = language_code =>
  ({
    es: {
      selectImage: 'Seleccionar imagen'
    },
    en: {
      selectImage: 'Select image'
    }
  }[language_code]);

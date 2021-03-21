export const getLanguage = langCode =>
  ({
    es: {
      options: 'Opciones',
      basicConfig: 'Configuración Básica'
    },
    en: {
      options: 'Options',
      basicConfig: 'Configuración Básica'
    }
  }[langCode]);

export const getLanguage = langCode =>
  ({
    es: {
      options: 'Opciones',
      basicConfig: 'Configuración Básica',
      contentEditor: 'Editor de Contenido'
    },
    en: {
      options: 'Options',
      basicConfig: 'Configuración Básica',
      contentEditor: 'Content Editor'
    }
  }[langCode]);

export const getLanguage = langCode =>
  ({
    es: {
      selectFile: 'Seleccionar archivo',
      invalidFile: { title: 'Formato incorrecto', message: 'El archivo debe ser una imagen.' },
      invalidLength: { title: 'Demasiados archivos', message: 'Debes subir un solo archivo.' }
    },
    en: {
      selectFile: 'Select file',
      invalidFile: { title: 'Incorrect format', message: 'File must be an image.' },
      invalidLength: { title: 'Too many files', message: 'You must upload only 1 file.' }
    }
  }[langCode]);

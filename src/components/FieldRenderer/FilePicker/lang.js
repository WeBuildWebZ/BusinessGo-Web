export const getLanguage = langCode =>
  ({
    es: {
      selectFile: 'Selecciona un archivo',
      invalidLength: { title: 'Demasiados archivos', message: 'Cantidad máxima de archivos superada.' },
      invalidSize: { title: 'Error', message: 'Límite de tamaño excedido' }
    },
    en: {
      selectFile: 'Select a file',
      invalidLength: { title: 'Too many files', message: 'Maximum number of files exceeded .' },
      invalidSize: { title: 'Error', message: 'Size limit exceeded' }
    }
  }[langCode]);

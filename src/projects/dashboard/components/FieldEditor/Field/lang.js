export const getLanguage = langCode =>
  ({
    es: {
      step: 'Paso',
      nameIn: 'Nombre del campo en ',
      showIn: 'Mostrar en:',
      languages: {
        en: 'inglés',
        es: 'español'
      }
    },
    en: {
      step: 'Step',
      nameIn: 'Field Name in ',
      showIn: 'Show in:',
      languages: {
        en: 'english',
        es: 'spanish'
      }
    }
  }[langCode]);

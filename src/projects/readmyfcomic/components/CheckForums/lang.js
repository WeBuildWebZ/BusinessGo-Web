export const getLanguage = langCode =>
  ({
    es: {
      checkForumsMessage: 'NO SABES QUÉ LEER?\nECHA UN VISTAZO A NUESTROS FOROS!',
      goToForums: 'Ir a foros'
    },
    en: {
      checkForumsMessage: "DON'T YOU KNOW WHAT TO READ?\nCHECK OUR FORUMS!",
      goToForums: 'Go to forums'
    }
  }[langCode]);

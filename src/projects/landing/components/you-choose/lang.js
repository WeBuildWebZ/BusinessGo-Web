export const getLanguage = langCode =>
  ({
    es: {
      youChoose: 'Tú Eliges!',
      description:
        'Escoge el plan más apropiado para comenzar a trabajar con nosotros. Haz click en el botón y chatea conmigo.'
    },
    en: {
      youChoose: 'You Choose',
      description:
        'Choose the most appropriate plan to start working with us. Click on the button and start chatting with me.'
    }
  }[langCode]);

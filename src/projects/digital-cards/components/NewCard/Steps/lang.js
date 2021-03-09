export const getLanguage = langCode =>
  ({
    es: {
      creatingCard: 'Estamos creando tu tarjeta...',
      cardCreated: { title: 'Card Creada', message: 'Hemos creado la card con éxito!' }
    },
    en: {
      creatingCard: 'We are creating your card...',
      cardCreated: { title: 'Card Created', message: "We've created your card successfully!" }
    }
  }[langCode]);

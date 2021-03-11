export const getLanguage = langCode =>
  ({
    es: {
      creatingCard: 'Estamos creando tu tarjeta...',
      cardCreated: { title: 'Card Creada', message: 'Hemos creado la card con éxito!' },
      destinations: {
        person: { title: 'Persona', description: 'La tarjeta será para una persona' },
        business: { title: 'Negocio', description: 'La tarjeta será para un negocio' }
      }
    },
    en: {
      creatingCard: 'We are creating your card...',
      cardCreated: { title: 'Card Created', message: "We've created your card successfully!" },
      destinations: {
        person: { title: 'Person', description: 'The card will be for a person' },
        business: { title: 'Business', description: 'The card will be for a business' }
      }
    }
  }[langCode]);

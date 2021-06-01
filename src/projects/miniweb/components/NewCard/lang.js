export const getLanguage = langCode =>
  ({
    es: {
      newCard: 'Crear nueva Card',
      goBack: 'Volver',
      next: 'Siguiente',
      cardCreated: { title: 'MiniWeb Creada', message: 'La MiniWeb ha sido creada con éxito!' }
    },
    en: {
      newCard: 'Create new Card',
      goBack: 'Go back',
      next: 'Next',
      cardCreated: { title: 'MiniWeb Created', message: 'The MiniWeb has been created successfully!' }
    }
  }[langCode]);

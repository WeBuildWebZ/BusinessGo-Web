export const getLanguage = langCode =>
  ({
    es: {
      thisIsYourCart: 'Este es tu carrito',
      generateRequest: 'Hacer pedido',
      creatingRequest: 'Estamos creando tu pedido...',
      requestCreated: { title: 'Pedido creado', message: 'Hemos creado tu pedido satisfactoriamente!' }
    },
    en: {
      thisIsYourCart: 'This is your cart',
      generateRequest: 'Make request',
      creatingRequest: "We're creating your request...",
      requestCreated: { title: 'Request created', message: "We've created your request successfully!" }
    }
  }[langCode]);

export const getLanguage = language_code =>
  ({
    es: {
      addToCart: count => `Agregar ${count} al Carrito`,
      removeFromCart: 'Quitar del Carrito'
    },
    en: {
      addToCart: count => `Add ${count} to Cart`,
      removeFromCart: 'Remove from Cart'
    }
  }[language_code]);

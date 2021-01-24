export const getLanguage = language_code =>
  ({
    es: {
      addToCart: count => `Agregar ${count} al Carrito`,
      removeFromCart: count => `Quitar ${count} del Carrito`
    },
    en: {
      addToCart: count => `Add ${count} to Cart`,
      removeFromCart: count => `Remove ${count} from Cart`
    }
  }[language_code]);

export const getLanguage = langCode =>
  ({
    es: {
      thisIsYourCart: 'Este es tu carrito'
    },
    en: {
      thisIsYourCart: 'This is your cart'
    }
  }[langCode]);

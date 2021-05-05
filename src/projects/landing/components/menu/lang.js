export const getLanguage = langCode =>
  ({
    es: {
      home: 'Inicio',
      pricing: 'Precios y Aclaraciones',
      clients: 'Clientes',
      images: 'Imágenes',
      blog: 'Blog'
    },
    en: {
      home: 'Home',
      pricing: 'Pricing and Clarifications',
      clients: 'Clients',
      images: 'Images',
      blog: 'Blog'
    }
  }[langCode]);

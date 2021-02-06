export const getLanguage = langCode =>
  ({
    es: {
      home: 'Inicio',
      pricing: 'Precios',
      gallery: 'Galería',
      blog: 'Blog',
      aboutUs: 'Nosotros'
    },
    en: {
      home: 'Home',
      pricing: 'Pricing',
      gallery: 'Gallery',
      blog: 'Blog',
      aboutUs: 'About Us'
    }
  }[langCode]);

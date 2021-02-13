export const getLanguage = langCode =>
  ({
    es: {
      home: 'Inicio',
      pricing: 'Precios',
      gallery: 'Galería',
      images: 'Imágenes',
      blog: 'Blog',
      aboutUs: 'Nosotros'
    },
    en: {
      home: 'Home',
      pricing: 'Pricing',
      gallery: 'Gallery',
      images: 'Images',
      blog: 'Blog',
      aboutUs: 'About Us'
    }
  }[langCode]);

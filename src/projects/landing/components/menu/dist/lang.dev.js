"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguage = void 0;

var getLanguage = function getLanguage(langCode) {
  return {
    es: {
      home: 'Inicio',
      pricing: 'Precios',
      clients: 'Clientes',
      images: 'Imágenes',
      blog: 'Blog'
    },
    en: {
      home: 'Home',
      pricing: 'Pricing',
      clients: 'Clients',
      images: 'Images',
      blog: 'Blog'
    }
  }[langCode];
};

exports.getLanguage = getLanguage;
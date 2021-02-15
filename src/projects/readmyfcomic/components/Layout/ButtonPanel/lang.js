export const getLanguage = langCode =>
  ({
    es: {
      frontPage: 'PÁGINA PRINCIPAL',
      findComic: 'BUSCAR CÓMIC',
      findProfile: 'BUSCAR PERFIL',
      contact: 'CONTACT'
    },
    en: {
      frontPage: 'FRONT PAGE',
      findComic: 'FIND COMIC',
      findProfile: 'FIND PROFILE',
      contact: 'CONTACT'
    }
  }[langCode]);

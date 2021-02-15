export const getLanguage = langCode =>
  ({
    es: {
      frontPage: 'PÁGINA PRINCIPAL',
      findComic: 'BUSCAR CÓMIC',
      findProfile: 'BUSCAR PERFIL',
      forum: 'FORO',
      contact: 'CONTACT'
    },
    en: {
      frontPage: 'FRONT PAGE',
      findComic: 'FIND COMIC',
      findProfile: 'FIND PROFILE',
      forum: 'FORUM',
      contact: 'CONTACT'
    }
  }[langCode]);

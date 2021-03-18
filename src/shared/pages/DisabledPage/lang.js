export const getLanguage = langCode =>
  ({
    es: {
      title: 'Página deshabilitada',
      message:
        'Lo sentimos, esta página ha sido deshabilitada.\nEn caso de ser el propietario por favor consultar con el equipo de desarrollo para solucionar este problema.'
    },
    en: {
      title: 'Page Disabled',
      message:
        "We're sorry, this page has been disabled.\nIf you are the owner, please contact the development team to solve this problem."
    }
  }[langCode]);

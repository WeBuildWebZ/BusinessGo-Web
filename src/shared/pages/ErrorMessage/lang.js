export const getLanguage = langCode =>
  ({
    es: {
      disabled: {
        title: 'Página deshabilitada',
        message:
          'Lo sentimos, esta página ha sido deshabilitada.\nEn caso de ser el propietario por favor consultar con el equipo de desarrollo para solucionar este problema.'
      },
      notFound: {
        title: 'Página No Encontrada',
        message:
          'Lo sentimos, no encontramos la configuración asociada a esta páigna.\nEn caso de ser el propietario por favor consultar con el equipo de desarrollo para solucionar este problema.'
      }
    },
    en: {
      disabled: {
        title: 'Page Not Found',
        message:
          "We're sorry, couldn't find the configuration associated with this page.\nIf you are the owner, please contact the development team to solve this problem."
      }
    }
  }[langCode]);

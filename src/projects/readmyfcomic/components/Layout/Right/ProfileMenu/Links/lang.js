export const getLanguage = langCode =>
  ({
    es: {
      profile: 'PERFIL',
      comics: 'CÓMICS',
      publish: 'PUBLICAR',
      favorites: 'FAVORITOS',
      logout: 'CERRAR SESIÓN'
    },
    en: {
      profile: 'PROFILE',
      comics: 'COMICS',
      publish: 'PUBLISH',
      favorites: 'FAVORITES',
      logout: 'LOG OUT'
    }
  }[langCode]);

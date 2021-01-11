export const getLanguage = language_code =>
  ({
    es: {
      getTitle: user => `Hola ${user.name}!`,
      selectProject: 'Seleccioná el proyecto al cual querés acceder'
    },
    en: {
      getTitle: user => `Hi ${user.name}!`,
      selectProject: 'Select your project'
    }
  }[language_code]);

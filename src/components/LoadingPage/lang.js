const getLanguage = (language_code) =>
  ({
    es: {
      message: "Cargando...",
    },
    en: {
      message: "It's loading...",
    },
  }[language_code]);

export default getLanguage;

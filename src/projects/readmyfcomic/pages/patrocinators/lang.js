export const getLanguage = langCode =>
  ({
    es: {
      title: 'NUSTROS PATROCINADORES',
      subtitle:
        'Este es un espacio dedicado a quienes hacen posible la mejora constante de readmyfcomic.com.\n¡Gracias a todos!'
    },
    en: {
      title: 'OUR PATROCINATORS',
      subtitle:
        'This is a space dedicated to those who make possible the constant improvement of readmyfcomic.com.\nThank you all!'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

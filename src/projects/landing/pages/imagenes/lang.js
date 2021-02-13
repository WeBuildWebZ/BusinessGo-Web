export const getLanguage = langCode =>
  ({
    es: {
      title: 'Imágenes',
      subtitle: 'Checate estas fotos!',
      visit: 'Visitar'
    },
    en: {
      title: 'Images',
      subtitle: 'Take a look to these photos!',
      visit: 'Take a Look'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

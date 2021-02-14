export const getLanguage = langCode =>
  ({
    es: {
      title: 'Imágenes',
      subtitle: 'Seleccionamos estos diseños UX/UI para ti, queremos mostrarte lo que podemos hacer.',
      visit: 'Ver'
    },
    en: {
      title: 'Images',
      subtitle: 'We select these UX/UI designs for you, we want to show you what we can do.',
      visit: 'Take a Look'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

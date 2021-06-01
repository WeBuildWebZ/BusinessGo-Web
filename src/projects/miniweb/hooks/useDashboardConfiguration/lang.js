export const getLanguage = langCode =>
  ({
    es: {
      dashboard: 'Dashboard',
      miniWebs: 'MiniWebs',
      newMiniweb: 'Nueva MiniWeb'
    },
    en: {
      dashboard: 'Dashboard',
      miniWebs: 'MiniWebs',
      newMiniweb: 'New MiniWeb'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

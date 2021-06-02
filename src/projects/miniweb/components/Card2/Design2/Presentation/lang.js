export const getLanguage = language_code =>
  ({
    es: {
      addToContacts: 'Agregar a Contactos'
    },
    en: {
      addToContacts: 'Add to Contacts'
    }
  }[language_code]);

const Component = () => <div />;

export default Component;

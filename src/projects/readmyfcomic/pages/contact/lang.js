export const getLanguage = langCode =>
  ({
    es: {
      title: 'CONTACTO',
      name: { title: 'Nombre', placeholder: 'Ingresa tu nombre completo' },
      email: { title: 'E-mail', placeholder: 'Ingresa tu email' },
      url: { title: 'URL (Opcional)', placeholder: 'Ingresa una URL' },
      message: { title: 'Mensaje', placeholder: 'Escribe un mensjae' },
      image: 'Imagen',
      send: 'Enviar'
    },
    en: {
      title: 'CONTACT',
      name: { title: 'Name', placeholder: 'Enter your full name' },
      email: { title: 'E-mail', placeholder: 'Enter your email' },
      url: { title: 'URL (Optional)', placeholder: 'Enter an URL' },
      message: { title: 'Message', placeholder: 'Write your message' },
      image: 'Image',
      send: 'Send'
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

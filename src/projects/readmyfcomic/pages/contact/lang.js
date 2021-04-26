export const getLanguage = langCode =>
  ({
    es: {
      title: 'CONTACTO',
      name: { title: 'Nombre', placeholder: 'Ingresa tu nombre completo' },
      email: { title: 'E-mail', placeholder: 'Ingresa tu email' },
      url: { title: 'URL (Opcional)', placeholder: 'Ingresa una URL' },
      message: { title: 'Mensaje', placeholder: 'Escribe un mensjae' },
      image: 'Imagen',
      send: 'Enviar',
      emailSent: {
        title: 'Email enviado correctamente',
        message: 'Gracias por contactarte con nosotros! Hemos recibido tu mensaje correctamente.'
      }
    },
    en: {
      title: 'CONTACT',
      name: { title: 'Name', placeholder: 'Enter your full name' },
      email: { title: 'E-mail', placeholder: 'Enter your email' },
      url: { title: 'URL (Optional)', placeholder: 'Enter an URL' },
      message: { title: 'Message', placeholder: 'Write your message' },
      image: 'Image',
      send: 'Send',
      emailSent: {
        title: 'Email sent successfully',
        message: "Thanks for contacting us! We've receibed your message correctly."
      }
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

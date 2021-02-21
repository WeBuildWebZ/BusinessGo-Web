export const getLanguage = langCode =>
  ({
    es: {
      titulo: 'Acerca de Nosotros',
      descripcion:
        'Somos una empresa dedicada al desarrollo de páginas web, visita nuestra galería, nuestra sección de Blogs y envíanos tu consulta, te esperamos.',

      webuildwebz: 'webuildwebz',
      contactInfo: 'Información de Contacto',
      privacyPolicy: 'Política de Privacidad'
    },
    en: {
      title: 'About Us',
      description:
        "We are a company dedicated to the development of web pages, take a look at our gallery, our Blogs section and send us your query, we're waiting for you.",
      webuildwebz: 'webuildwebz',
      contactInfo: 'Contact Information',
      privacyPolicy: 'Privacy Policy'
    }
  }[langCode]);

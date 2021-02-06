export const getLanguage = langCode =>
  ({
    es: {
      title: 'Acerca de Nosotros',
      description:
        'Somos una empresa dedicada al desarrollo de páginas web, visita nuestra galería, nuestra sección de Blogs y envíanos tu consulta, te esperamos.',
      socialNetworks: 'Redes sociales',
      contactInfo: 'Información de Contacto'
    },
    en: {
      title: 'About Us',
      description:
        "We are a company dedicated to the development of web pages, take a look at our gallery, our Blogs section and send us your query, we're waiting for you.",
      socialNetworks: 'Social networks',
      contactInfo: 'Contact Information'
    }
  }[langCode]);

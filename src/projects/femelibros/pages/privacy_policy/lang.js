export const getLanguage = langCode =>
  ({
    es: {
      privacyPolicy: 'Política de Privacidad',
      privacyPolicyContent: `
        Cuando necesitemos información de su parte, le pediremos que nos la proporcione voluntariamente. Los datos recibidos a través de los formularios sólo los podrá consultar usted a través de la sección de administración del proyecto, no los compartiremos con nadie más que usted.
        Usted podrá utilizar cookies durante la prestación de servicios del sitio Web. Las cookies son ficheros de información personal alojados en el propio terminal del usuario. El usuario tiene la posibilidad de configurar su navegador de manera que se impida la creación de archivos cookie o se advierta de la misma.
        Nuestra política con respecto al correo electrónico se centra en remitir únicamente comunicaciones que usted haya solicitado recibir.
        Si prefiere no recibir estos mensajes por correo electrónico le ofreceremos la cancelación de los mismos.
      `
    },
    en: {
      privacyPolicy: 'Privacy Policy',
      privacyPolicyContent: `
        When we need information from you, we will ask you to voluntarily provide it to us. The data received through the forms can only be consulted by you through the project administration section, we will not share it with anyone other than you.
        You may use cookies during the provision of services on the website. Cookies are files of personal information hosted in the user's own terminal. The user has the possibility of configuring their browser in such a way as to prevent the creation of cookie files or warn of it.
        If you prefer not to receive these messages by email, we will offer to cancel them.
        .
      `
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

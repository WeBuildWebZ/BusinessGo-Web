export const getLanguage = language_code =>
  ({
    es: {
      back: 'Anterior',
      next: 'Siguiente',
      close: 'Confirmá el email para continuar...',
      modals: [
        {
          title: 'Bienvenido a BusinessGo!',
          message: user =>
            'Gracias por registrarte en nuestra plataforma.' +
            `Te mandamos un email a la casilla ${user.email} para verificar tu cuenta.` +
            ' Luego de confirmar el email podrás solicitarnos' +
            ' el desarrollo de una página web comentándonos cómo querés que se vea, qué características' +
            ' tenés pensadas, qué información vas a mostrar en ella, etc.'
        },
        {
          title: 'Gestión de dominios',
          message: () =>
            'El dominio es completamente gratuito! Nosotros nos encargamos de administrar tu dominio' +
            ', vos solo nos tenés que indicar qué dominio estás precisando.'
        },
        {
          title: 'Precios',
          message: () => 'Los precios dependerán de las características que elijas a continuación.'
        }
      ]
    },
    en: {
      back: 'Previous',
      next: 'Next',
      close: 'Confirm your email to continue',
      modals: [
        {
          title: 'Welcome to BusinessGo!',
          message: user =>
            'Thanks for registering in our platform. ' +
            `We've sent you an email to ${user.email} so that we verify your account.` +
            " After you confirm use your email, you'll be able to" +
            ' request us the development of a web page letting us now how do you want it to look' +
            ' what features you have in mind, what information you want to show in it, etc.'
        },
        {
          title: 'Domain Management',
          message: () =>
            'The domain is completely free! We take care of the management' +
            ", you just have to specify what domain you're looking for."
        },
        {
          title: 'Pricing',
          message: () => 'The pricing depends on the features you choose next.'
        }
      ]
    }
  }[language_code]);

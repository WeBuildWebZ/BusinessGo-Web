import React from 'react';

import { getBasePrice } from './components';

const getWhatsappMessage = user => ({
  es:
    `Hola ${user.name}, gracias por utilizar nuestros servicios!` +
    ' Vamos a brindarte la mejor atención posible.',
  en: `Hey ${user.name}, thanks for using our services! we will give you the best possible attention.`
});
const whatsappLink = (user, language_code) =>
  `https://api.whatsapp.com/send?phone=5491130696440&text=${encodeURIComponent(
    getWhatsappMessage(user)[language_code]
  )}`;

export const getLanguage = language_code =>
  ({
    es: {
      developmentRequest: 'Pedido de desarrollo web',
      message: user =>
        `${user.name}, a continuación te vamos` +
        ' a mostrar todas las características que ofrecemos al día de hoy.' +
        ' Algunas de ellas se pagan mensualmente y otras una única vez.' +
        ' El flujo será el siguiente:',
      describeYourPage: 'Describinos brevemente tu página ideal',
      registerRequest: 'Registrar Pedido!',
      basePrice: getBasePrice({ basePrice: 'Precio base', unique: 'inicial', monthly: 'mensual' }),
      websiteName: 'Nombre del sitio web',
      flow: [
        () =>
          'Podrás describir un poco tu idea en el campo de descripción' +
          ' y luego elegir las características que te gustaría tener en tu sition web.',
        user => (
          <div>
            Cuando crees el pedido te vamos a contactar (
            <a target="blank" href={whatsappLink(user, 'es')}>
              <div style={{ color: 'blue', display: 'inline-block', margin: 0 }}>
                o podés contactarnos desde acá
              </div>
            </a>
            ) para ver tu idea más en detalle.
          </div>
        ),
        () =>
          'El pago inicial se realizará en 2 partes: cuando hagas la primera parte del pago' +
          ', podrás ver una vista previa de tu sitio solo estando logueado.' +
          ' Al realizar la segunda parte del pago y suscribirte al pago mensual' +
          ', tu web se hará pública automáticamente.'
      ]
    },
    en: {
      developmentRequest: 'Web development request',
      message: user =>
        `${user.name}, next we are going to show you` +
        ' all the features we offer nowadays.' +
        ' some of them are paid monthly and others only once.' +
        ' The flow will be the following:',
      describeYourPage: 'Give us a summary of your ideal page',
      registerRequest: 'Register Request!',
      websiteName: 'Website name',
      flow: [
        () =>
          "You'll be able to describe your idea to us in the description field" +
          ' and choose the features you would like to have in your website.' +
          ' Podés pedirnos cambios cuando quieras!',
        user => (
          <div>
            When you create the request we will contact you (
            <a target="blank" href={whatsappLink(user, 'es')}>
              <div style={{ color: 'blue', display: 'inline-block', margin: 0 }}>
                or you can contact us from here
              </div>
            </a>
            ) in order to review your idea with more detail.
          </div>
        ),
        () =>
          'The initial payment consists of 2 parts: when you pay the first part' +
          ", you'll be able to see your site preview only being logged in." +
          ' When you pay the second part and subcribe to the monthly payment' +
          ', your web will be public automatically. You can request changes to us whenever you want!'
      ]
    }
  }[language_code]);

const Component = () => <></>;

export default Component;

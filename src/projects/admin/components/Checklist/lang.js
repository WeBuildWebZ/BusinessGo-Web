import React from 'react';

export const getLanguage = language_code =>
  ({
    es: {
      justNow: 'Recién',
      emailConfirmed: { title: 'Email confirmado', message: 'Gracias por confirmarnos tu email!' },
      frequencyTypes: {
        monthly: 'por mes',
        unique: 'inicial'
      },
      items: {
        email_contact: {
          title: 'Contacto por Email',
          description: 'Tus visitantes se podrán contactar por email con vos.'
        },
        domain: {
          title: 'Dominio',
          description: (
            <p>
              Te ofrecemos un dominio&nbsp;
              <b>.com, .net, .edu, .org</b>
              &nbsp;entre otros y nos encargamos de configurarlo y mantenerlo.
            </p>
          )
        },
        google_ranking: {
          title: 'Posicionamiento en Google',
          description:
            'Nos encargamos de que tu web aparezca en los' +
            ' primeros resultados de Google utilizando técnicas de SEO'
        },
        turn_management: {
          title: 'Administración de turnos',
          description:
            'Esta funcionalidad sirve para que cualquier visitante pueda pedir un turno ' +
            'a través de la página web.'
        },
        shopping_cart: {
          title: 'Carrito de Compras',
          description:
            'Los visitantes podrán agregar productos al carrito de compras y realizar' +
            ' el pago con mercado pago al final'
        },
        maps: {
          title: 'Mapas',
          description: 'Le agregamos mapas a tu sitio web para ubicar tu negocio'
        },
        whatsapp_button: {
          title: 'Botón de WhatsApp',
          description: 'Le agregamos un botón que lleva a los usuarios a tu WhatsApp'
        }
      }
    },
    en: {
      justNow: 'Just now',
      emailConfirmed: { title: 'Email confirmed', message: 'Thanks for confirming us your email!' },
      frequencyTypes: {
        monthly: 'per month',
        unique: 'initial'
      },
      items: {
        email_contact: {
          title: 'Email Contact',
          description: 'Your visitors will be able to contact you via email.'
        },
        domain: {
          title: 'Domain',
          description: (
            <p>
              We offer you domains&nbsp;
              <b>.com, .net, .edu, .org</b>
              &nbsp;among other ones and take care of configuring and mantaining it.
            </p>
          )
        },
        google_ranking: {
          title: 'Google Ranking',
          description: 'We take care that your website appears in the first Google results'
        },
        turn_management: {
          title: 'Turn Management',
          description: 'This functionallity allows any visitor to request a turn through your website.'
        },
        shopping_cart: {
          title: 'Shopping Cart',
          description:
            'The visitors will be able to add products to a shopping cart' +
            ' and then pay to you with mercado pago'
        },
        maps: {
          title: 'Maps',
          description: 'We add maps to your website to locate your business'
        },
        whatsapp_button: {
          title: 'WhatsApp Button',
          description: 'We add a button that forwards users to your WhatsApp'
        }
      }
    }
  }[language_code]);

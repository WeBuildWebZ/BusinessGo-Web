import { itemData } from './constants';

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
          description: 'Tus visitantes se podrán contactar por email con vos.',
          imageLink: itemData.email_contact.imageUrl
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
          description: 'Your visitors will be able to contact you via email.',
          imageLink: itemData.email_contact.imageUrl
        }
      }
    }
  }[language_code]);

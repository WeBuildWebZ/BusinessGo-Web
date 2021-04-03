export const getLanguage = langCode =>
  ({
    es: {
      webDevelopment: 'Desarrollo de página web',
      loginRegister: 'Login / Registro de usuarios',
      animations: 'Animaciones',
      chatbot: 'Chatbot / Chat en tiempo real',
      contentManager: 'Gestor de contenido',
      emailSending: 'Envío de emails',
      domainName: 'Nombre de dominio',
      hosting: 'Hosting',
      seo: 'SEO',
      payments: 'Pagos con Paypal, MercadoPago, Stripe, Conekta, etc',
      totalPrice: 'Precio Total',
      perMonth: 'por mes',
      descriptions: {
        loginRegister:
          'Desarrollamos la funcionalidad de login y registro para que tu web pueda tener usuarios. Estos se guardarán en una base de datos.',
        payments:
          'Integraremos tu página web con la plataforma de pagos que prefieras para realizar pagos en línea.'
      },
      prices: [
        {
          type: 'A',
          quality: 'Básica',
          price: '100$',
          options: [
            '1 Página',
            'SEO básico',
            'Rápida entrega',
            'no Animaciones',
            'Redes sociales',
            'Servicio de Copywriting'
          ]
        },
        {
          type: 'B',
          quality: 'Profesional',
          price: '200$',
          options: [
            'Responsive Design',
            '2 Paginas Internas',
            'High SEO ',
            'Animaciones',
            'Codigo QR',
            'Hosting para Imagenes'
          ]
        },
        {
          type: 'C',
          quality: 'Ejecutiva',
          price: '300$',
          options: [
            'Progressive Web App',
            'Full Animaciones',
            'Diseños Exclusivos',
            'Full SEO y Performance',
            'Servicio de Copywriting',
            'Formato SPA'
          ]
        }
      ]
    },
    en: {
      webDevelopment: 'Web page Development',
      loginRegister: 'User Login / Register',
      animations: 'Animations',
      chatbot: 'Chatbot / Real time chat',
      contentManager: 'Content manager',
      emailSending: 'Email sending',
      domainName: 'Domain name',
      hosting: 'Hosting',
      seo: 'SEO',
      payments: 'Payments with Paypal, MercadoPago, Stripe, Conekta, etc',
      totalPrice: 'Total Price',
      perMonth: 'per month',
      descriptions: {
        loginRegister:
          'We develop the login and registration functionality so that your website can have users. These will be saved in a database.',
        payments:
          'We will integrate your website with the payment platform of your choice to make online payments.'
      },
      prices: [
        {
          type: 'A',
          quality: 'Basic',
          price: '100$',
          options: [
            '1 Página',
            'Basic SEO',
            'Fast Delivery',
            'no Animations',
            'Social Networks',
            'Copywriting Service'
          ]
        },
        {
          type: 'B',
          quality: 'Professional',
          price: '200$',
          options: [
            'Responsive Design',
            '2 Internal Pages',
            'High SEO ',
            'Animations',
            'QR Code',
            'Image Hosting'
          ]
        },
        {
          type: 'C',
          quality: 'Executive',
          price: '300$',
          options: [
            'Progressive Web App',
            'Full Animations',
            'Exclusive Designs',
            'Full SEO and Performance',
            'Copywriting Service',
            'SPA Format'
          ]
        }
      ]
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

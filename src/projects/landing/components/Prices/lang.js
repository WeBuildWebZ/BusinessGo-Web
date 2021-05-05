export const getLanguage = langCode =>
  ({
    es: {
      webDevelopment: 'Desarrollo de página web',
      loginRegister: 'Login / Registro de usuarios',
      animations: 'Animaciones',
      chatbot: 'Chatbot / Chat en tiempo real',
      contentManager: 'Gestor de contenido',
      emailSending: 'Envío de emails',
      domainName: 'Nombre de dominio + Certificado SSL',
      hosting: 'Hosting',
      seo: 'SEO',
      payments: 'Pagos con Paypal, MercadoPago, Stripe, Conekta, etc',
      totalPrice: 'Precio Total',
      perMonth: 'por mes',
      descriptions: {
        webDevelopment: 'Este precio incluye tanto el diseño de la web como desarrollo frontend.',
        loginRegister:
          'Desarrollamos la funcionalidad de login y registro para que tu web pueda tener usuarios. Estos se guardarán en una base de datos.',
        animations: 'Agregamos efectos al hacer scroll y en los botones.',
        chatbot:
          'Te ofrecemos un chatbot como el que tenemos en nuestra web. Este se puede configurar para responder a diferentes intenciones que pueden tener los usuarios. Además lo podemos incluir en los siguientes canales: Facebook, Telegram, Slack, Line y Viber. También podrás chatear en tiempo real con usuarios que estén hablando con el chatbot.',
        contentManager:
          'Podrás modificar todo el contenido incluido en la página web: textos, imágenes, videos, productos, etc.',
        emailSending:
          'Tu página va a incluir la funcionalidad de envío de emails con tu propio dominio: esto puede servir para una sección de contacto o para automatizar avisos hacia los usuarios.',
        domainName:
          'Gestionamos el nombre de dominio que necesites (.com, .net, etc) y lo apuntamos a la página web. También incluimos un certificado SSL para que la página aparezca como HTTPS (segura) y no como HTTP (no segura).',
        hosting: 'Nos encargamos de disponibilizar el sitio web en un hosting.',
        seo: 'Haremos que tu sitio web aparezca en los primeros resultados de Google y otros buscadores.',
        payments:
          'Integraremos tu página web con la plataforma de pagos que prefieras para realizar pagos en línea.'
      },
      letsTalk: 'Charlemos sobre tu idea!',
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
      domainName: 'Domain name + SSL certificate',
      hosting: 'Hosting',
      seo: 'SEO',
      payments: 'Payments with Paypal, MercadoPago, Stripe, Conekta, etc',
      totalPrice: 'Total Price',
      perMonth: 'per month',
      descriptions: {
        webDevelopment: 'This price includes both web design and frontend development',
        loginRegister:
          'We develop the login and registration functionality so that your website can have users. These will be saved in a database.',
        animations: 'We add scroll effects and button animations.',
        chatbot:
          'We offer you a chatbot like the one we have on our website. This can be configured to respond to different intentions that users may have. We can also include it in the following channels: Facebook, Telegram, Slack, Line and Viber. You can also chat in real time with users who are talking to the chatbot.',
        contentManager:
          'You will be able to modify all the content included in the web page: texts, images, videos, products, etc.',
        emailSending:
          'Your page will include the functionality of sending emails with your own domain: this can be used for a contact section or to automate notifications to users.',
        domainName:
          'We manage the domain name you need (.com, .net, etc) and point it to the website. We also include an SSL certificate so that the page appears as HTTPS (secure) and not HTTP (not secure).',
        hosting: 'We take care of making the website available on a hosting.',
        seo: 'We will make your website appear in the first results of Google and other search engines.',
        payments:
          'We will integrate your website with the payment platform of your choice to make online payments.'
      },
      letsTalk: "Let's talk about your idea!",
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

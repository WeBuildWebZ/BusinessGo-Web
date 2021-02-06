export const getLanguage = langCode =>
  ({
    es: {
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

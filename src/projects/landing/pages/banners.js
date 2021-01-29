import Right from '../components/BannerRight';
import PageDemo from '../components/PageDemo';

const RightChild = <Right />;
const PageDemoChild = pageUrl => <PageDemo pageUrl={pageUrl} />;

export const banners = [
  {
    image: '/images/left-top.jpg',
    title: 'En We Build Webz, diseñamos, construimos, pero sobre todo, ayudamos a crecer tu empresa.',
    description:
      'Navega en nuestra web, mira nuestros trabajos realizados, Nuestros servicios, y hablamos,sera rapido',
    button: 'ver',
    Right: RightChild
  },
  {
    image: 'https://blanqueriawow.com/images/page.png',
    title: 'Blanquería Wow',
    description:
      'Todo para el confort de tu hogar !!\nLo llevamos a tu domicilio sin importar la zona\nEnvios a todo el país ✈\nVentas por mayor y menor',
    button: 'siguiente proyecto',
    Right: PageDemoChild('https://blanqueriawow.com')
  },
  {
    image: 'https://www.omnilifeenmexico.com/images/page_2.png',
    title: 'Omnilife México',
    description: 'Somos una tienda de productos Omnilife y Cosmética. Distribuimos en México',
    button: 'siguiente proyecto',
    Right: PageDemoChild('https://www.omnilifeenmexico.com')
  },
  {
    image: 'https://res.cloudinary.com/globy/image/upload/v1610558514/s5i6qrthlbbaf2forvq6.webp',
    title: 'Globy Taxi App',
    description: 'Somos una app mexicana de taxis que opera con autos concesionados',
    button: 'siguiente proyecto',
    Right: PageDemoChild('https://www.globy.dancotll.com')
  },
  {
    image: 'https://www.muebles.dancotll.com/images/slideone.jpg',
    title: 'Muebles Horacio',
    description: 'Somos una tienda de Muebles a medida. Distribuimos en Buenos Aires.',
    button: 'volver',
    Right: PageDemoChild('https://www.muebles.dancotll.com')
  }
];

export default () => <div />;

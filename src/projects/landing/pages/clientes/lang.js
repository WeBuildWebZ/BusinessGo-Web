const Carpediem = {
  url: 'https://www.carpediem-distribuciones.com/',
  image_url: 'https://www.carpediem-distribuciones.com/images/page.png'
};
const Femelibros = {
  url: 'https://www.femelibros.com/',
  image_url: 'https://www.femelibros.com/images/page.png'
};
const MasNegocio = {
  url: 'https://masnegocio.online/',
  image_url: 'https://masnegocio.online/images/page.png'
};
const ReadMyFComic = {
  url: 'https://readmyfcomic.com/',
  image_url: 'https://readmyfcomic.com/images/page.png'
};
const Orden = {
  url: 'https://orden.webuildwebz.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-orden.jpg?alt=media&token=9545ae58-713e-4485-801c-9f68eb86b8e9'
};
const JoseRios = {
  url: 'https://jose-rios.netlify.app/#/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-jose-rios-netlify.jpg?alt=media&token=e04a90c5-4dde-47cc-9179-a46f17c6f25b'
};
const MueblesHoracio = {
  url: 'https://www.muebles.dancotll.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-horacio-muebles.jpg?alt=media&token=4ca6934f-b088-49a0-9a9a-723bb05b1db5'
};
const WoW = {
  url: 'https://blanqueriawow.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-wow.jpg?alt=media&token=3d21ef80-bd3f-4cc6-9b8b-1d54bfc6897c'
};
const WeChat = {
  url: 'https://www.chatbot.webuildwebz.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-we-chat.jpg?alt=media&token=a209759c-c743-4747-bac5-ae66cc25705b'
};
const Globy = {
  url: 'https://www.globy.dancotll.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/image.jpg?alt=media&token=0ee2a779-1a7d-4a2f-9365-ee2aecc05aeb'
};

export const getLanguage = langCode =>
  ({
    es: {
      title: 'Clientes',
      visit: 'Visitar',
      items: [
        {
          ...Femelibros,
          description: 'Ayudamos a mujeres emprendedoras que buscan pasar su negocio al mundo DIGITAL.'
        },
        {
          ...Carpediem,
          description:
            'Es una distribuidora de bebidas y anexos para kioscos, almacenes y supermercados. Venta minorista y mayorista con sede central en Villa Mercedes provincia de San Luis. Desde el año 2012 abastece a todo el país, llevando las mejores marcas al más bajo precios.'
        },
        {
          ...MasNegocio,
          description:
            'Utiliza nuestra tecnología, y comparte tu tarjeta digital, para compartir tu información de contacto en 1 segundo.'
        },
        {
          ...ReadMyFComic,
          description:
            'Plataforma óptima en que autores y lectores de todo el mundo pueden compartir y leer cómics de forma gratuita sin restricción de estilo y contenido.'
        },
        {
          ...Orden,
          description:
            'Desarrollo de sitio para proyecto familiar de España, Murcia. Orden Y Mas, organiza el espacio de tu vivienda.'
        },
        {
          ...JoseRios,
          description:
            'Portfolio web desarrollado con React js, algunas animaciones ligeras, orientado al diseño UX/UI.'
        },
        {
          ...MueblesHoracio,
          description:
            'Muebles-Horacio, una tienda digital, de caracter informativa, en la que el publico contacta al vendedor.'
        },
        {
          ...WoW,
          description:
            'En esta web, desarrollamos una Ecommerce, con un Carousel, Base de Datos y carga de imagenes.'
        },
        {
          ...WeChat,
          description:
            'Sitio web anexo a webuildwebz, en esta sub seccion ofrecemos nuestro servicio de Chat Bot'
        },
        {
          ...Globy,
          description: 'Globy, es una empresa Mexicana de taxi al estilo Uber, en proceso de formacion.'
        }
      ]
    },
    en: {
      title: 'Clients',
      visit: 'Take a Look',
      items: [
        {
          ...Carpediem,
          description:
            'It is a distributor of drinks and annexes for kiosks, warehouses and supermarkets. Retail and wholesale with headquarters in Villa Mercedes province of San Luis. Since 2012 it has been supplying the whole country, bringing the best brands at the lowest prices.'
        },
        {
          ...MasNegocio,
          description:
            'Use our technology, and share your digital card, to share your contact information in 1 second.'
        },
        {
          ...ReadMyFComic,
          description:
            'Optimal platform where authors and readers from all over the world can share and read comics for free without restriction of style and content.'
        },
        {
          ...Orden,
          description:
            'Site development for a family project in Spain, Murcia. Orden Y Mas, organize the space of your home.'
        },
        {
          ...JoseRios,
          description: 'Web portfolio developed with React js, some light animations, UX/UI design oriented.'
        },
        {
          ...MueblesHoracio,
          description:
            'Muebles-Horacio, a digital store, informative, in which the public contacts the seller.'
        },
        {
          ...WoW,
          description:
            'On this website, we develop an Ecommerce, with a Carousel, Database and image loading.'
        },
        {
          ...WeChat,
          description: 'Website attached to webuildwebz, in this sub section we offer our Chat Bot service'
        },
        {
          ...Globy,
          description: 'Globy is a Mexican Uber-style Taxi company, in formation process.'
        }
      ]
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

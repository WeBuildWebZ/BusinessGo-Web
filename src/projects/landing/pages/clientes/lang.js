const Globy = {
  url: 'https://www.globy.dancotll.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/image.jpg?alt=media&token=0ee2a779-1a7d-4a2f-9365-ee2aecc05aeb'
};
const ZanleGroup = {
  url: 'https://zanle-group.vercel.app/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/zanle-group-portada.jpg?alt=media&token=329e26d9-d08b-454a-a181-669e6cc61f13'
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
const Orden = {
  url: 'https://orden.webuildwebz.com/',
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-orden.jpg?alt=media&token=9545ae58-713e-4485-801c-9f68eb86b8e9'
};
const MasNegocio = {
  url: 'https://masnegocio.webuildwebz.com/',
  image_url: 'https://masnegocio.webuildwebz.com/images/page.png'
};
const ReadMyFComic = {
  url: 'https://readmyfcomic.webuildwebz.com/',
  image_url: 'https://readmyfcomic.webuildwebz.com/images/page.png'
};

export const getLanguage = langCode =>
  ({
    es: {
      title: 'Clientes',
      visit: 'Visitar',
      items: [
        {
          ...Globy,
          description: 'Globy, es una empresa Mexicana de taxi al estilo Uber, en proceso de formacion.'
        },
        {
          ...ZanleGroup,
          description: 'Zanle Group, web para freelance de Jose Rios, dirigida a Latino America'
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
          ...Orden,
          description:
            'Desarrollo de sitio para proyecto familiar de España, Murcia. Orden Y Mas, organiza el espacio de tu vivienda.'
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
        }
      ]
    },
    en: {
      title: 'Clients',
      visit: 'Take a Look',
      items: [
        {
          ...Globy,
          description: 'Globy is a Mexican Uber-style Taxi company, in formation process.'
        },
        {
          ...ZanleGroup,
          description: 'Zanle Group, web for freelance, directed to Latin America.'
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
          ...Orden,
          description:
            'Site development for a family project in Spain, Murcia. Orden Y Mas, organize the space of your home.'
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
        }
      ]
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

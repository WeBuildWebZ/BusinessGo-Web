const Article1 = {
  url: 'https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito',
  image_url:
    'https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
};
const Article2 = {
  image_url:
    'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  url: 'https://www.40defiebre.com/que-es/diseno-responsive'
};
const Article3 = {
  image_url:
    'https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  url: 'https://www.cualhost.com/sitios-web/para-que-sirve-una-pagina-web/'
};
const Article4 = {
  image_url:
    'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-pexels.jpg?alt=media&token=15fdf457-6ace-4d8f-b7b3-ed7009aee6df',
  url: 'https://www.pexels.com/es-es/ '
};

export const getLanguage = langCode =>
  ({
    es: {
      title: 'Preparamos para ti esta Colección de Blogs Destacada',
      description:
        'Encuentra toda la informacion que necesitas: diseños, términos, inclusive banco de imágenes FREE. En esta seccion de nuestra web, te va a gustar, que esperas?',
      items: [
        {
          ...Article1,
          title: 'Que es: SEO?',
          description: 'Mira este articulo y descucbri que es el SEO, posicionamiento web y mas.'
        },
        {
          ...Article2,
          title: 'Que es: Responsive Design?',
          description:
            'Mira este articulo y descucbri que es el Responsive Design, o mejor dicho, adaptacion a dispositivos.'
        },
        {
          ...Article3,
          title: 'Necesito una Web?',
          description: 'En este articulo te detallamos porque debes tener tu Web, consejos y recomendaciones.'
        },
        {
          ...Article4,
          title: 'Pexels, imágenes gratis',
          description: 'Entra en esta web, Cientos, no, Miles de Imagenes gratis para ti.'
        }
      ]
    },
    en: {
      title: 'We prepared this Blog Collection for you',
      description:
        'Find all information you need: designs, terms, including FREE image bank. You will like this section of our website, what are you waiting for?',
      items: [
        {
          ...Article1,
          title: 'This is the article title',
          description: 'Look at this nice article!'
        },
        {
          ...Article2,
          title: 'This is the article title',
          description: 'Look at this nice article!'
        },
        {
          ...Article3,
          title: 'This is the article title',
          description: 'Look at this nice article!'
        },
        {
          ...Article4,
          title: 'Pexels, free Images',
          description: 'Look at this nice article!'
        }
      ]
    }
  }[langCode]);

const Component = () => <div />;

export default Component;

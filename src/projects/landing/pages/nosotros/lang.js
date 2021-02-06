const Jose = {
  background: '/images/yo.jpg',
  image: '/images/yo.jpg',
  name: 'Jose Rios',
  position: 'Front-End'
};
const Lean = {
  background: '/images/el.jpg',
  image: '/images/el.jpg',
  name: 'Leandro Cotti',
  position: 'Back-End'
};

export const getLanguage = langCode =>
  ({
    es: {
      aboutUs: 'Sobre Nosotros',
      members: [
        {
          ...Jose,
          description:
            'Soy una persona apasionada por aprender todo sobre FrontEnd, interfaces y diseño, estoy a cargo de esta sección en WeBuildWebz.'
        },
        {
          ...Lean,
          description:
            'Soy desarrollador backend desde hace 2 años, programo desde los 12 años. Me encargo de todo lo que conforma el backend de WeBuildWebz: infraestructura, API Rest, bases de datos.'
        }
      ]
    },
    en: {
      aboutUs: 'About Us',
      members: [
        {
          ...Jose,
          description:
            'I am passionate about learning everything about FrontEnd, interfaces and design, I am in charge of this section in WeBuildWebz.'
        },
        {
          ...Lean,
          description:
            "I'm Backend Developer since 2 years ago, I have been programming since I was 12 years old. I take care of everything that makes up the WeBuildWebz backend: Infrastructure, API Rest, Databases."
        }
      ]
    }
  }[langCode]);

const Component = () => <div />;

export default Component;
